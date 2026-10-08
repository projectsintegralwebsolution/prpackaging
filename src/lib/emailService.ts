import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export interface EnquiryPayload {
  name: string;
  companyName?: string;
  phone: string;
  email: string;
  product: string;
  industry?: string;
  diameter?: string;
  length?: string;
  wallThickness?: string;
  quantity?: string;
  message?: string;
  _hp?: string; // honeypot anti-spam field
}

export interface SendEnquiryResult {
  success: boolean;
  message: string;
  referenceId?: string;
  error?: string;
}

// In-memory rate limiting map: ip -> Array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Cleanup old rate limit entries every 30 minutes
setInterval(() => {
  const now = Date.now();
  rateLimitMap.forEach((timestamps, ip) => {
    const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
    if (validTimestamps.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, validTimestamps);
    }
  });
}, 30 * 60 * 1000).unref();

/**
 * Check if the given client IP has exceeded the rate limit.
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

/**
 * Sanitize plain strings to prevent HTML injection.
 */
function sanitize(str?: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

/**
 * Validate email format using RFC 5322 regex.
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (must contain at least 10 digits).
 */
function isValidPhone(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

/**
 * Configure Nodemailer transport.
 * Uses real SMTP credentials if provided in environment variables;
 * otherwise gracefully falls back to JSON/logging transport for development.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (host && user && pass) {
    return {
      transporter: nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass }
      }),
      isLive: true
    };
  }

  // Fallback / simulation transport
  return {
    transporter: nodemailer.createTransport({
      jsonTransport: true
    }),
    isLive: false
  };
}

/**
 * Secure 3-way email notification dispatcher.
 */
export async function processAndSend3WayEnquiry(
  rawPayload: EnquiryPayload,
  clientIp: string = "unknown"
): Promise<SendEnquiryResult> {
  // 1. Honeypot check (anti-bot)
  if (rawPayload._hp && rawPayload._hp.trim().length > 0) {
    console.warn(`[SPAM BLOCKED] Honeypot field filled by IP: ${clientIp}`);
    // Silently return success to confuse automated bot
    return {
      success: true,
      message: "Enquiry submitted successfully. Our team will contact you shortly."
    };
  }

  // 2. Rate limit check
  if (!checkRateLimit(clientIp)) {
    return {
      success: false,
      message: "Too many requests. Please wait a few minutes before submitting another enquiry."
    };
  }

  // 3. Sanitization
  const data = {
    name: sanitize(rawPayload.name),
    companyName: sanitize(rawPayload.companyName),
    phone: sanitize(rawPayload.phone),
    email: sanitize(rawPayload.email).toLowerCase(),
    product: sanitize(rawPayload.product),
    industry: sanitize(rawPayload.industry),
    diameter: sanitize(rawPayload.diameter),
    length: sanitize(rawPayload.length),
    wallThickness: sanitize(rawPayload.wallThickness),
    quantity: sanitize(rawPayload.quantity),
    message: sanitize(rawPayload.message)
  };

  // 4. Strict Validation
  if (!data.name || data.name.length < 2) {
    return { success: false, message: "Please enter your full name." };
  }
  if (!data.phone || !isValidPhone(data.phone)) {
    return { success: false, message: "Please enter a valid phone number with at least 10 digits." };
  }
  if (!data.email || !isValidEmail(data.email)) {
    return { success: false, message: "Please enter a valid email address." };
  }
  if (!data.product) {
    return { success: false, message: "Please select the product required." };
  }

  // 5. Generate Reference ID and Timestamp
  const now = new Date();
  const refCode = `${now.getFullYear().toString().slice(-2)}${(now.getMonth() + 1).toString().padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`;
  const referenceId = `PRP-${refCode}`;

  const submissionDateFormatted = now.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium"
  });

  // 6. Secure Server-Side Recipients Configuration
  // INTERNAL ADMIN NOTIFICATION - strictly kept on server, NEVER shown in frontend or customer emails
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "princekumarjha80@gmail.com";

  // CLIENT BUSINESS EMAIL - official P.R. Packaging inbox
  const clientBusinessEmail = process.env.CLIENT_NOTIFICATION_EMAIL || "prpackaging2@gmail.com";

  // System From address
  const systemFrom = process.env.EMAIL_FROM || `"P.R. Packaging Website" <${process.env.SMTP_USER || "no-reply@prpackaging.com"}>`;

  // 7. Save Enquiry to local server log file for backup audit trail
  try {
    const logEntry = {
      referenceId,
      timestamp: now.toISOString(),
      formattedDate: submissionDateFormatted,
      clientIp,
      ...data
    };
    const logPath = path.join(process.cwd(), "enquiries.log");
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + "\n", "utf8");
  } catch (fsErr) {
    console.error("Failed to append to enquiries.log:", fsErr);
  }

  // 8. Create Transporter
  const { transporter, isLive } = createTransporter();

  // Common styling for HTML emails
  const tableRow = (label: string, value: string) => `
    <tr>
      <td style="padding: 10px 14px; font-weight: 600; color: #1e293b; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; width: 35%; font-size: 13px;">${label}</td>
      <td style="padding: 10px 14px; color: #334155; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; font-size: 13px;">${value || '<span style="color:#94a3b8;">Not specified</span>'}</td>
    </tr>
  `;

  // ==========================================
  // EMAIL 1: ADMIN / BACKEND NOTIFICATION
  // Recipient: princekumarjha80@gmail.com
  // ==========================================
  const adminSubject = `[Admin Alert] New Website Enquiry - P.R. Packaging (${data.name} - ${data.product})`;
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px;">
      <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <div style="background-color: #0f172a; padding: 20px 24px; color: #ffffff;">
          <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; color: #f59e0b; text-transform: uppercase;">BACKEND ADMIN NOTIFICATION</span>
          <h2 style="margin: 6px 0 0; font-size: 20px; font-weight: 800; color: #ffffff;">New Website Enquiry Received</h2>
          <p style="margin: 4px 0 0; font-size: 12px; color: #94a3b8;">Reference: <strong>${referenceId}</strong> | Submitted: ${submissionDateFormatted}</p>
        </div>
        <div style="padding: 24px;">
          <p style="margin-top: 0; font-size: 14px; color: #334155;">A new enquiry has been submitted through the <strong>P.R. Packaging</strong> official website.</p>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
            ${tableRow("Reference ID", referenceId)}
            ${tableRow("Full Name", data.name)}
            ${tableRow("Company Name", data.companyName)}
            ${tableRow("Phone Number", `<a href="tel:${data.phone}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${data.phone}</a>`)}
            ${tableRow("Email Address", `<a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${data.email}</a>`)}
            ${tableRow("Product Required", `<strong>${data.product}</strong>`)}
            ${tableRow("Industry", data.industry)}
            ${tableRow("Required Diameter", data.diameter)}
            ${tableRow("Required Length", data.length)}
            ${tableRow("Wall Thickness", data.wallThickness)}
            ${tableRow("Estimated Quantity", data.quantity)}
            ${tableRow("Message / Specifications", data.message)}
            ${tableRow("Submission Date/Time", submissionDateFormatted)}
            ${tableRow("Submitter IP", clientIp)}
          </table>
        </div>
        <div style="background-color: #f8fafc; padding: 14px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center;">
          Internal Admin Dispatch System &bull; P.R. Packaging Manufacturing &bull; Boisar MIDC
        </div>
      </div>
    </body>
    </html>
  `;

  // ==========================================
  // EMAIL 2: CLIENT NOTIFICATION
  // Recipient: client business inbox
  // STRICT PRIVACY: Internal admin email is NEVER included
  // ==========================================
  const clientSubject = `New Website Enquiry – P.R. Packaging`;
  const clientHtml = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px;">
      <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <div style="background-color: #1e293b; padding: 24px; color: #ffffff;">
          <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; color: #d97706; text-transform: uppercase;">P.R. PACKAGING &bull; ESTD. 1992</span>
          <h2 style="margin: 6px 0 0; font-size: 22px; font-weight: 800; color: #ffffff;">New Customer Enquiry</h2>
          <p style="margin: 4px 0 0; font-size: 13px; color: #cbd5e1;">A new enquiry has been submitted through the P.R. Packaging website.</p>
        </div>
        <div style="padding: 24px;">
          <div style="background-color: #f1f5f9; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px; border-left: 4px solid #d97706;">
            <span style="font-size: 12px; color: #64748b; display: block;">Enquiry Reference: <strong>${referenceId}</strong></span>
            <span style="font-size: 12px; color: #64748b; display: block; margin-top: 2px;">Received on: <strong>${submissionDateFormatted}</strong></span>
          </div>

          <table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 6px; overflow: hidden;">
            ${tableRow("Name", data.name)}
            ${tableRow("Company Name", data.companyName)}
            ${tableRow("Phone", `<a href="tel:${data.phone}" style="color: #b45309; text-decoration: none; font-weight: 700;">${data.phone}</a>`)}
            ${tableRow("Email", `<a href="mailto:${data.email}" style="color: #b45309; text-decoration: none; font-weight: 600;">${data.email}</a>`)}
            ${tableRow("Product Required", `<strong style="color: #0f172a;">${data.product}</strong>`)}
            ${tableRow("Industry", data.industry)}
            ${tableRow("Required Diameter", data.diameter)}
            ${tableRow("Required Length", data.length)}
            ${tableRow("Wall Thickness", data.wallThickness)}
            ${tableRow("Quantity", data.quantity)}
            ${tableRow("Message", data.message)}
            ${tableRow("Submission Date/Time", submissionDateFormatted)}
          </table>

          <div style="margin-top: 24px; padding: 16px; background-color: #fffbeb; border: 1px solid #fef3c7; border-radius: 6px; text-align: center;">
            <p style="margin: 0; font-size: 13px; color: #92400e;">
              To respond to this customer, click reply to this email or call them directly at <strong>${data.phone}</strong>.
            </p>
          </div>
        </div>
        <div style="background-color: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
          P.R. Packaging &bull; Boisar MIDC Plant, Palghar &bull; Bhiwandi Warehouse<br />
          <span style="font-size: 11px; color: #94a3b8;">This is an automated notification from your official website enquiry form.</span>
        </div>
      </div>
    </body>
    </html>
  `;

  // ==========================================
  // EMAIL 3: ENQUIRY SUBMITTER CONFIRMATION EMAIL
  // Recipient: customer's entered email
  // STRICT PRIVACY: Internal admin email is NEVER included
  // ==========================================
  const customerSubject = `Enquiry Received – P.R. Packaging`;
  const customerHtml = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px;">
      <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <div style="background-color: #1e293b; padding: 24px; color: #ffffff; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">P.R. PACKAGING</h1>
          <p style="margin: 4px 0 0; font-size: 12px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 0.08em;">Manufacturer of Paper Tubes, Paper Cores &amp; Corrugated Packaging &bull; Estd. 1992</p>
        </div>
        <div style="padding: 28px 24px;">
          <p style="margin-top: 0; font-size: 15px; color: #0f172a; font-weight: 600;">Dear ${data.name},</p>
          <p style="font-size: 14px; color: #334155; line-height: 1.6;">
            Thank you for contacting <strong>P.R. Packaging</strong>.
          </p>
          <p style="font-size: 14px; color: #334155; line-height: 1.6;">
            We have successfully received your enquiry. Our team will review your requirements and get back to you shortly.
          </p>

          <div style="margin: 24px 0; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px;">
            <h3 style="margin: 0 0 12px; font-size: 13px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em;">Enquiry Reference Summary</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr>
                <td style="padding: 6px 0; color: #64748b; width: 40%;">Reference Number:</td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${referenceId}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b;">Product Enquired:</td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${data.product}</td>
              </tr>
              ${data.quantity ? `<tr><td style="padding: 6px 0; color: #64748b;">Quantity:</td><td style="padding: 6px 0; color: #0f172a;">${data.quantity}</td></tr>` : ''}
              <tr>
                <td style="padding: 6px 0; color: #64748b;">Submission Date:</td>
                <td style="padding: 6px 0; color: #0f172a;">${submissionDateFormatted}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <h4 style="margin: 0 0 10px; font-size: 13px; font-weight: 700; color: #0f172a; text-transform: uppercase;">P.R. Packaging Contact Information</h4>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #475569;">
              <tr>
                <td style="padding: 4px 0; width: 30%; font-weight: 600;">Management &amp; Sales:</td>
                <td style="padding: 4px 0;">Varun Mundra &bull; <a href="tel:9029443776" style="color: #b45309; text-decoration: none; font-weight: 600;">+91 90294 43776</a></td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-weight: 600;">Operations &amp; Admin:</td>
                <td style="padding: 4px 0;">Suresh Mundra &bull; <a href="tel:9321393328" style="color: #b45309; text-decoration: none; font-weight: 600;">+91 93213 93328</a></td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-weight: 600;">Factory Office:</td>
                <td style="padding: 4px 0;"><a href="tel:8408926751" style="color: #b45309; text-decoration: none; font-weight: 600;">+91 84089 26751</a></td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-weight: 600;">Official Email:</td>
                <td style="padding: 4px 0;"><a href="mailto:${clientBusinessEmail}" style="color: #b45309; text-decoration: none; font-weight: 600;">${clientBusinessEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-weight: 600; vertical-align: top;">Manufacturing Unit:</td>
                <td style="padding: 4px 0;">Plot No. G-49, Near Vikram Glass Naka, MIDC Area, Boisar, District Palghar &ndash; 401501, Maharashtra, India</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; font-weight: 600;">Transit Warehouse:</td>
                <td style="padding: 4px 0;">Bhiwandi, Maharashtra, India</td>
              </tr>
            </table>
          </div>
        </div>
        <div style="background-color: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center;">
          &copy; ${now.getFullYear()} P.R. Packaging. All rights reserved. &bull; Boisar MIDC, Maharashtra, India
        </div>
      </div>
    </body>
    </html>
  `;

  // 9. Dispatch all 3 emails independently
  const emailDispatches = [
    // 1. Admin Email
    {
      type: "ADMIN",
      to: adminEmail,
      subject: adminSubject,
      html: adminHtml,
      replyTo: data.email
    },
    // 2. Client Business Email
    {
      type: "CLIENT",
      to: clientBusinessEmail,
      subject: clientSubject,
      html: clientHtml,
      replyTo: data.email
    },
    // 3. Customer Confirmation Email
    {
      type: "CUSTOMER",
      to: data.email,
      subject: customerSubject,
      html: customerHtml,
      replyTo: clientBusinessEmail
    }
  ];

  console.log(`[ENQUIRY DISPATCH] Reference: ${referenceId} | Submitter: ${data.name} (${data.email}) | Product: ${data.product}`);
  console.log(`[ENQUIRY DISPATCH] Sending 3-way notification: Admin(${adminEmail}), Client(${clientBusinessEmail}), Submitter(${data.email})`);

  let anySuccess = false;
  const dispatchResults: Record<string, string> = {};

  for (const item of emailDispatches) {
    try {
      const sendResult = await transporter.sendMail({
        from: systemFrom,
        to: item.to,
        replyTo: item.replyTo,
        subject: item.subject,
        html: item.html
      });

      anySuccess = true;
      dispatchResults[item.type] = "SENT";
      console.log(`[EMAIL DISPATCH SUCCESS] Type: ${item.type} -> To: ${item.to} | MessageId: ${(sendResult as { messageId?: string }).messageId || 'simulated'}`);
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : String(err);
      console.error(`[EMAIL DISPATCH ERROR] Type: ${item.type} -> To: ${item.to}:`, errMessage);
      dispatchResults[item.type] = `FAILED: ${errMessage}`;
    }
  }

  // If live SMTP was configured and failed entirely, handle gracefully
  if (isLive && !anySuccess) {
    console.error("[ENQUIRY ERROR] All live email dispatches failed.");
    return {
      success: false,
      message: "Unable to send enquiry notification at this moment. Please call or WhatsApp our team directly."
    };
  }

  return {
    success: true,
    referenceId,
    message: "Enquiry received successfully. P.R. Packaging team will reach out within 24 hours."
  };
}

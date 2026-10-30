const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory store or file backup for inquiries
const ENQUIRIES_LOG = path.join(__dirname, 'enquiries.log');

// Rate limiting in Express
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const valid = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (valid.length >= MAX_REQUESTS) return false;
  valid.push(now);
  rateLimitMap.set(ip, valid);
  return true;
}

function sanitize(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (host && user && pass) {
    return {
      transporter: nodemailer.createTransport({ host, port, secure, auth: { user, pass } }),
      isLive: true
    };
  }
  return {
    transporter: nodemailer.createTransport({ jsonTransport: true }),
    isLive: false
  };
}

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'P.R. Packaging Backend API',
    established: 1992,
    location: 'Boisar MIDC, Palghar, Maharashtra'
  });
});

app.post('/api/enquiry', async (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';

  // Honeypot check
  if (req.body._hp && String(req.body._hp).trim().length > 0) {
    console.warn(`[SPAM BLOCKED] Honeypot filled by IP: ${clientIp}`);
    return res.json({ success: true, message: 'Enquiry received. P.R. Packaging team will reach out within 24 hours.' });
  }

  // Rate limit
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a few minutes before submitting another enquiry.' });
  }

  const name = sanitize(req.body.name);
  const companyName = sanitize(req.body.companyName);
  const phone = sanitize(req.body.phone);
  const email = sanitize(req.body.email).toLowerCase();
  const product = sanitize(req.body.product);
  const industry = sanitize(req.body.industry);
  const diameter = sanitize(req.body.diameter);
  const length = sanitize(req.body.length);
  const wallThickness = sanitize(req.body.wallThickness);
  const quantity = sanitize(req.body.quantity);
  const message = sanitize(req.body.message);

  if (!name || name.length < 2) {
    return res.status(400).json({ error: 'Please enter your full name.' });
  }
  const digitsOnly = phone.replace(/\D/g, '');
  if (!phone || digitsOnly.length < 10) {
    return res.status(400).json({ error: 'Please enter a valid phone number with at least 10 digits.' });
  }
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (!product) {
    return res.status(400).json({ error: 'Please select the product required.' });
  }

  const now = new Date();
  const refCode = `${now.getFullYear().toString().slice(-2)}${(now.getMonth() + 1).toString().padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;
  const referenceId = `PRP-${refCode}`;

  const submissionDate = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const record = {
    referenceId,
    timestamp: now.toISOString(),
    submissionDate,
    name,
    companyName,
    phone,
    email,
    product,
    industry,
    diameter,
    length,
    wallThickness,
    quantity,
    message,
    clientIp
  };

  try {
    fs.appendFileSync(ENQUIRIES_LOG, JSON.stringify(record) + '\n');
  } catch (e) {
    console.error('Failed to write to enquiry log', e);
  }

  // Secure Server-side Recipients
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'princekumarjha80@gmail.com';
  const clientBusinessEmail = process.env.CLIENT_NOTIFICATION_EMAIL || 'prpackaging2@gmail.com';
  const systemFrom = process.env.EMAIL_FROM || `"P.R. Packaging Website" <${process.env.SMTP_USER || 'no-reply@prpackaging.com'}>`;

  const { transporter, isLive } = getTransporter();

  const tableRow = (label, val) => `
    <tr>
      <td style="padding: 10px 14px; font-weight: 600; color: #1e293b; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; width: 35%; font-size: 13px;">${label}</td>
      <td style="padding: 10px 14px; color: #334155; background-color: #ffffff; border-bottom: 1px solid #e2e8f0; font-size: 13px;">${val || '<span style="color:#94a3b8;">Not specified</span>'}</td>
    </tr>
  `;

  // 1. ADMIN EMAIL
  const adminMail = {
    from: systemFrom,
    to: adminEmail,
    replyTo: email,
    subject: `[Admin Alert] New Website Enquiry - P.R. Packaging (${name} - ${product})`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f1f5f9;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1;">
          <div style="background: #0f172a; padding: 18px 24px; color: #fff;">
            <div style="color: #f59e0b; font-size: 11px; font-weight: bold;">BACKEND ADMIN NOTIFICATION</div>
            <h2 style="margin: 4px 0 0; font-size: 18px;">New Website Enquiry Received</h2>
            <div style="color: #94a3b8; font-size: 12px;">Ref: ${referenceId} &bull; ${submissionDate}</div>
          </div>
          <div style="padding: 20px;">
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0;">
              ${tableRow('Reference ID', referenceId)}
              ${tableRow('Name', name)}
              ${tableRow('Company', companyName)}
              ${tableRow('Phone', phone)}
              ${tableRow('Email', email)}
              ${tableRow('Product', product)}
              ${tableRow('Industry', industry)}
              ${tableRow('Diameter', diameter)}
              ${tableRow('Length', length)}
              ${tableRow('Wall Thickness', wallThickness)}
              ${tableRow('Quantity', quantity)}
              ${tableRow('Message', message)}
              ${tableRow('Date', submissionDate)}
              ${tableRow('Client IP', clientIp)}
            </table>
          </div>
        </div>
      </div>
    `
  };

  // 2. CLIENT EMAIL (Strictly NO princekumarjha80@gmail.com)
  const clientMail = {
    from: systemFrom,
    to: clientBusinessEmail,
    replyTo: email,
    subject: `New Website Enquiry – P.R. Packaging`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
          <div style="background: #1e293b; padding: 20px; color: #fff;">
            <div style="color: #d97706; font-size: 11px; font-weight: bold;">P.R. PACKAGING &bull; ESTD. 1992</div>
            <h2 style="margin: 4px 0 0; font-size: 20px;">New Customer Enquiry</h2>
            <div style="color: #cbd5e1; font-size: 12px;">A new enquiry has been submitted through the P.R. Packaging website.</div>
          </div>
          <div style="padding: 20px;">
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0;">
              ${tableRow('Name', name)}
              ${tableRow('Company', companyName)}
              ${tableRow('Phone', `<a href="tel:${phone}" style="color: #b45309; font-weight: bold;">${phone}</a>`)}
              ${tableRow('Email', `<a href="mailto:${email}" style="color: #b45309;">${email}</a>`)}
              ${tableRow('Product Required', `<strong>${product}</strong>`)}
              ${tableRow('Industry', industry)}
              ${tableRow('Required Diameter', diameter)}
              ${tableRow('Required Length', length)}
              ${tableRow('Wall Thickness', wallThickness)}
              ${tableRow('Quantity', quantity)}
              ${tableRow('Message', message)}
              ${tableRow('Submission Date/Time', submissionDate)}
            </table>
          </div>
        </div>
      </div>
    `
  };

  // 3. CUSTOMER CONFIRMATION (Strictly NO princekumarjha80@gmail.com)
  const customerMail = {
    from: systemFrom,
    to: email,
    replyTo: clientBusinessEmail,
    subject: `Enquiry Received – P.R. Packaging`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
          <div style="background: #1e293b; padding: 20px; color: #fff; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">P.R. PACKAGING</h2>
            <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">Manufacturer of Paper Tubes, Paper Cores &amp; Corrugated Packaging</div>
          </div>
          <div style="padding: 24px;">
            <p>Dear ${name},</p>
            <p>Thank you for contacting <strong>P.R. Packaging</strong>.</p>
            <p>We have successfully received your enquiry. Our team will review your requirements and get back to you shortly.</p>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin: 20px 0;">
              <strong>Enquiry Summary:</strong><br />
              &bull; Reference: <strong>${referenceId}</strong><br />
              &bull; Product: <strong>${product}</strong><br />
              &bull; Date: ${submissionDate}
            </div>
            <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 13px; color: #475569;">
              <strong>P.R. Packaging Contact Information:</strong><br />
              &bull; Varun Mundra: +91 90294 43776<br />
              &bull; Suresh Mundra: +91 93213 93328<br />
              &bull; Factory: +91 84089 26751<br />
              &bull; Email: ${clientBusinessEmail}<br />
              &bull; Facility: Plot G-49, Near Vikram Glass Naka, Boisar MIDC, Palghar – 401501, Maharashtra
            </div>
          </div>
        </div>
      </div>
    `
  };

  const dispatches = [
    { type: 'ADMIN', mail: adminMail },
    { type: 'CLIENT', mail: clientMail },
    { type: 'CUSTOMER', mail: customerMail }
  ];

  for (const d of dispatches) {
    try {
      const resMail = await transporter.sendMail(d.mail);
      console.log(`[EXPRESS EMAIL SENT] ${d.type} -> ${d.mail.to} (ID: ${resMail.messageId || 'simulated'})`);
    } catch (err) {
      console.error(`[EXPRESS EMAIL ERROR] ${d.type} -> ${d.mail.to}:`, err.message);
    }
  }

  return res.json({
    success: true,
    referenceId,
    message: 'Enquiry received. P.R. Packaging team will reach out within 24 hours.'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`P.R. Packaging Express API server running on port ${PORT}`);
  });
}

module.exports = app;

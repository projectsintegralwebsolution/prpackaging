import { NextResponse } from "next/server";
import { processAndSend3WayEnquiry } from "@/lib/emailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Extract client IP for rate limiting and audit trail
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";

    const result = await processAndSend3WayEnquiry(body, clientIp);

    if (!result.success) {
      return NextResponse.json(
        { error: result.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        referenceId: result.referenceId,
        message: result.message
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API route error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try contacting via phone or WhatsApp." },
      { status: 500 }
    );
  }
}

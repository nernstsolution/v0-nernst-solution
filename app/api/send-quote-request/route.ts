import { type NextRequest, NextResponse } from "next/server"
import { createQuoteRequestEmail, type QuoteRequestData } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const data: QuoteRequestData = await request.json()

    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY environment variable is not set")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // Create email template
    const emailTemplate = createQuoteRequestEmail(data)

    console.log("[v0] Sending quote request email to:", emailTemplate.to)

    // Send email using Resend (requires RESEND_API_KEY environment variable)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@nernstsolution.com",
        to: [emailTemplate.to],
        subject: emailTemplate.subject,
        html: emailTemplate.html,
        text: emailTemplate.text,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error("[v0] Resend API error:", result)
      throw new Error(`Resend API error: ${result.message || "Unknown error"}`)
    }

    console.log("[v0] Quote request email sent successfully:", result.id)

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
      emailId: result.id,
    })
  } catch (error) {
    console.error("[v0] Error sending quote request email:", error)
    return NextResponse.json(
      {
        error: "Failed to send quote request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

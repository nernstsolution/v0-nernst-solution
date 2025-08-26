import { type NextRequest, NextResponse } from "next/server"
import {
  createContactEmail,
  createContactConfirmationEmail,
  generateInquiryReference,
  sendEmail,
  type ContactFormData,
} from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY environment variable is not set")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const inquiryReference = generateInquiryReference()
    const dataWithReference = { ...data, inquiryReference }

    console.log("[v0] Processing contact inquiry with reference:", inquiryReference)

    const customerEmail = createContactConfirmationEmail(dataWithReference)
    const customerResult = await sendEmail(customerEmail)

    if (!customerResult.success) {
      console.error("[v0] Failed to send customer confirmation email:", customerResult.error)
    } else {
      console.log("[v0] Customer confirmation email sent:", customerResult.id)
    }

    const companyEmail = createContactEmail(dataWithReference)
    const companyResult = await sendEmail(companyEmail)

    if (!companyResult.success) {
      console.error("[v0] Failed to send company notification email:", companyResult.error)
      return NextResponse.json(
        {
          error: "Failed to send contact message",
          details: companyResult.error,
        },
        { status: 500 },
      )
    }

    console.log("[v0] Contact inquiry processed successfully:", inquiryReference)

    return NextResponse.json({
      success: true,
      message: "Contact message sent successfully",
      inquiryReference,
      customerEmailId: customerResult.id,
      companyEmailId: companyResult.id,
    })
  } catch (error) {
    console.error("[v0] Error processing contact message:", error)
    return NextResponse.json(
      {
        error: "Failed to send contact message",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

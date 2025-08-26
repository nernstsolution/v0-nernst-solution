import { type NextRequest, NextResponse } from "next/server"
import {
  createQuoteRequestEmail,
  createQuoteConfirmationEmail,
  generateQuoteReference,
  sendEmail,
  type QuoteRequestData,
} from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const data: QuoteRequestData = await request.json()

    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY environment variable is not set")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const quoteReference = generateQuoteReference()
    const dataWithReference = { ...data, quoteReference }

    console.log("[v0] Processing quote request with reference:", quoteReference)

    const customerEmail = createQuoteConfirmationEmail(dataWithReference)
    const customerResult = await sendEmail(customerEmail)

    if (!customerResult.success) {
      console.error("[v0] Failed to send customer confirmation email:", customerResult.error)
    } else {
      console.log("[v0] Customer confirmation email sent:", customerResult.id)
    }

    const companyEmail = createQuoteRequestEmail(dataWithReference)
    const companyResult = await sendEmail(companyEmail)

    if (!companyResult.success) {
      console.error("[v0] Failed to send company notification email:", companyResult.error)
      return NextResponse.json(
        {
          error: "Failed to send quote request",
          details: companyResult.error,
        },
        { status: 500 },
      )
    }

    console.log("[v0] Quote request processed successfully:", quoteReference)

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
      quoteReference,
      customerEmailId: customerResult.id,
      companyEmailId: companyResult.id,
    })
  } catch (error) {
    console.error("[v0] Error processing quote request:", error)
    return NextResponse.json(
      {
        error: "Failed to send quote request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

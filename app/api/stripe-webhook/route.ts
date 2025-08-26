import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import {
  generateOrderNumber,
  createOrderConfirmationEmail,
  createOrderNotificationEmail,
  sendEmail,
  type OrderData,
} from "@/lib/email"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("[v0] Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    // Handle successful payment
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session

      console.log("[v0] Processing completed checkout session:", session.id)

      // Retrieve session with line items
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ["line_items", "line_items.data.price.product"],
      })

      // Generate order number
      const orderNumber = generateOrderNumber()

      // Extract order data
      const orderData: OrderData = {
        orderNumber,
        customerEmail: session.customer_details?.email || "",
        customerName: session.customer_details?.name || "Customer",
        items:
          sessionWithLineItems.line_items?.data.map((item) => ({
            name: (item.price?.product as Stripe.Product)?.name || "Product",
            quantity: item.quantity || 1,
            price: (item.price?.unit_amount || 0) / 100,
          })) || [],
        total: (session.amount_total || 0) / 100,
        shippingAddress: session.shipping_details?.address
          ? {
              line1: session.shipping_details.address.line1 || "",
              line2: session.shipping_details.address.line2 || undefined,
              city: session.shipping_details.address.city || "",
              state: session.shipping_details.address.state || "",
              postal_code: session.shipping_details.address.postal_code || "",
              country: session.shipping_details.address.country || "",
            }
          : undefined,
      }

      console.log("[v0] Sending order confirmation emails for order:", orderNumber)

      // Send confirmation email to customer
      const customerEmail = createOrderConfirmationEmail(orderData)
      const customerResult = await sendEmail(customerEmail)

      if (!customerResult.success) {
        console.error("[v0] Failed to send customer confirmation email:", customerResult.error)
      } else {
        console.log("[v0] Customer confirmation email sent:", customerResult.id)
      }

      // Send notification email to company
      const companyEmail = createOrderNotificationEmail(orderData)
      const companyResult = await sendEmail(companyEmail)

      if (!companyResult.success) {
        console.error("[v0] Failed to send company notification email:", companyResult.error)
      } else {
        console.log("[v0] Company notification email sent:", companyResult.id)
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("[v0] Webhook error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}

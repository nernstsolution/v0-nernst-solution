import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { items, successUrl, cancelUrl } = await request.json()

    // Create line items for Stripe
    const lineItems = items.map((item: any) => {
      const imageUrl =
        item.images && item.images.length > 0
          ? item.images[0].startsWith("http")
            ? item.images[0]
            : `${process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com"}${item.images[0]}`
          : null

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: imageUrl ? [imageUrl] : [],
            metadata: {
              product_id: item.id,
            },
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      }
    })

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU", "DE", "FR", "JP"],
      },
      billing_address_collection: "required",
      metadata: {
        order_type: "hardware_purchase",
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}

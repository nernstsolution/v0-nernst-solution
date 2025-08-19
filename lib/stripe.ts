import { loadStripe } from "@stripe/stripe-js"

// Initialize Stripe
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export interface CheckoutItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface CheckoutSession {
  items: CheckoutItem[]
  successUrl: string
  cancelUrl: string
}

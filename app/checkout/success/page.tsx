"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Package, Mail } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart()
  const hasClearedCart = useRef(false)

  // Clear the cart only once when the page loads (checkout completed successfully)
  useEffect(() => {
    if (!hasClearedCart.current) {
      clearCart()
      hasClearedCart.current = true
    }
  }, []) // Empty dependency array - only run once

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            {/* <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" /> */}
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            <h1 className="text-3xl font-bold font-sans text-foreground mb-4">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground font-serif">
              Thank you for your purchase. Your order has been successfully processed.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-sans">What happens next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-left">
                  <p className="font-medium">Order Confirmation</p>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an email confirmation with your order details and tracking information.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Package className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-left">
                  <p className="font-medium">Processing & Shipping</p>
                  <p className="text-sm text-muted-foreground">
                    Your order will be processed within 2-3 business days and shipped via express delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-left">
                  <p className="font-medium">Technical Support</p>
                  <p className="text-sm text-muted-foreground">
                    Our technical team will contact you to ensure proper setup and provide any needed assistance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button asChild size="lg">
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <div>
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Questions about your order? Contact us at{" "}
              <a href="mailto:contact@nernstsolution.com" className="text-primary hover:underline">
                contact@nernstsolution.com
              </a>{" "}
              or call +1 (302) 316-5188
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

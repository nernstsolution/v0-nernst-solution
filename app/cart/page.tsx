"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/cart"
import { Minus, Plus, Trash2, ArrowLeft, CreditCard } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function CartPage() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    if (items.length === 0) return

    setIsLoading(true)
    try {
      console.log("[v0] Starting checkout process")

      // Create checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: `${window.location.origin}${item.image}`,
          })),
          successUrl: `${window.location.origin}/checkout/success`,
          cancelUrl: `${window.location.origin}/checkout/cancel`,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("[v0] Checkout session created:", data)

      if (data.error) {
        throw new Error(data.error)
      }

      const { sessionId, checkoutUrl } = data

      if (checkoutUrl) {
        console.log("[v0] Opening checkout in new window")
        const checkoutWindow = window.open(checkoutUrl, "_blank", "noopener,noreferrer")

        if (!checkoutWindow) {
          // If popup was blocked, try direct navigation
          console.log("[v0] Popup blocked, trying direct navigation")
          try {
            window.location.assign(checkoutUrl)
          } catch (assignError) {
            console.log("[v0] Direct navigation failed, creating link")
            // Create a temporary link and click it
            const link = document.createElement("a")
            link.href = checkoutUrl
            link.target = "_blank"
            link.rel = "noopener noreferrer"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }
        } else {
          // Show success message that checkout opened in new tab
          toast({
            title: "Checkout Opened",
            description: "Please complete your payment in the new tab that opened.",
          })
        }
      } else {
        throw new Error("No checkout URL available")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      toast({
        title: "Checkout Error",
        description: "Failed to initiate checkout. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-sans text-foreground mb-4">Your Cart</h1>
            <p className="text-xl text-muted-foreground font-serif mb-8">Your cart is empty</p>
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold font-sans text-foreground">Shopping Cart</h1>
              <Button variant="outline" onClick={clearCart} className="bg-transparent">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 relative overflow-hidden rounded-lg border">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold font-sans text-lg mb-2">{item.name}</h3>
                        <p className="text-primary font-bold text-xl">{formatPrice(item.price)}</p>

                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 0)}
                              className="w-16 text-center"
                              min="0"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold font-sans mb-4">Order Summary</h2>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg" onClick={handleCheckout} disabled={isLoading}>
                  {isLoading ? (
                    "Processing..."
                  ) : (
                    <>
                      <CreditCard className="h-5 w-5 mr-2" />
                      Proceed to Checkout
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center mt-4">Secure checkout powered by Stripe</p>

                <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    • Free shipping on orders over $5,000
                    <br />• 30-day return policy
                    <br />• Technical support included
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

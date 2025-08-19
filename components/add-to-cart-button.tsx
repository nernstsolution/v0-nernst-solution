"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { ShoppingCart } from "lucide-react"

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: number
    image: string
  }
  size?: "default" | "sm" | "lg"
  className?: string
}

export function AddToCartButton({ product, size = "default", className }: AddToCartButtonProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product)
  }

  return (
    <Button size={size} className={className} onClick={handleAddToCart}>
      <ShoppingCart className="h-5 w-5 mr-2" />
      Add to Cart
    </Button>
  )
}

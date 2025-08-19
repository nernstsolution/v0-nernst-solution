"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { parsePrice } from "@/lib/cart"

interface ProductCardProps {
  id: string
  name: string
  image: string
  description: string
  category: "test-stand" | "hardware"
  transactionCategory: "cart" | "quote"
  price?: string
}

export function ProductCard({ id, name, image, description, category, transactionCategory, price }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    if (price) {
      addItem({
        id,
        name,
        price: parsePrice(price),
        image,
      })
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden rounded-t-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle className="text-xl font-sans mb-2">{name}</CardTitle>
        <p className="text-muted-foreground font-serif">{description}</p>
        {price && <p className="text-2xl font-bold text-primary mt-4">{price}</p>}
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button asChild variant="outline" className="flex-1 bg-transparent">
          <Link href={`/products/${id}`}>View Details</Link>
        </Button>
        {transactionCategory === "quote" ? (
          <Button asChild className="flex-1">
            <Link href={`/quote/${id}`}>Request Quote</Link>
          </Button>
        ) : (
          <Button className="flex-1" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export function calculateItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)
}

export function parsePrice(priceString: string): number {
  return Number.parseFloat(priceString.replace(/[$,]/g, ""))
}

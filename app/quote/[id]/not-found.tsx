import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Quote Request Not Available</h1>
        <p className="text-xl text-muted-foreground font-serif mb-8">
          The product you're trying to request a quote for doesn't exist or quotes are not available for this item.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/#products">Browse Products</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

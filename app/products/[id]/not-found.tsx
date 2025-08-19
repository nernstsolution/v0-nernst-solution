import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Product Not Found</h1>
        <p className="text-xl text-muted-foreground font-serif mb-8">
          The product you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/#products">Browse All Products</Link>
        </Button>
      </main>
      <Footer />
    </div>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-sans text-foreground mb-6">
            Advanced Water Electrolyzer Research Hardware
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif">
            Professional-grade test stands and cell hardware for research institutes, universities, and industrial
            companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="#products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

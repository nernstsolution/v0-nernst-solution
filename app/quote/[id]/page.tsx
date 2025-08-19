import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteRequestForm } from "@/components/quote-request-form"
import { getProduct } from "@/lib/products"
import { ArrowLeft } from "lucide-react"

interface QuotePageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: QuotePageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)

  if (!product) {
    return {
      title: "Product Not Found | Nernst Solution LLC",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `Request Quote - ${product.name} | Nernst Solution LLC`,
    description: `Request a custom quote for ${product.name}. Get pricing and technical specifications for your research needs.`,
    keywords: [
      "quote request",
      product.name.toLowerCase(),
      "electrolyzer research hardware",
      "custom pricing",
      "research equipment quote",
      "test stand pricing",
      "hardware quote"
    ],
    openGraph: {
      title: `Request Quote - ${product.name} | Nernst Solution LLC`,
      description: `Request a custom quote for ${product.name}. Get pricing and technical specifications.`,
      url: `https://nernstsolution.com/quote/${id}`,
      images: product.images.map(image => ({
        url: image,
        width: 1200,
        height: 630,
        alt: `Quote for ${product.name}`,
      })),
    },
    twitter: {
      title: `Request Quote - ${product.name} | Nernst Solution LLC`,
      description: `Request a custom quote for ${product.name}. Get pricing and technical specifications.`,
      images: product.images,
    },
    alternates: {
      canonical: `/quote/${id}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  }
}

export default async function QuotePage({ params }: QuotePageProps) {
  const { id } = await params
  const product = getProduct(id)

  if (!product || product.transactionCategory !== "quote") {
    notFound()
  }

  // TypeScript now knows product is defined after this check

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">Request Quote</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href={`/products/${product.id}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Product
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Summary */}
          <div>
            <h1 className="text-3xl font-bold font-sans text-foreground mb-6">Request Quote</h1>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 relative overflow-hidden rounded-lg border">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">
                      Test Stand
                    </Badge>
                    <CardTitle className="font-sans text-xl">{product.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-serif mb-4">{product.shortDescription}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold font-sans">Key Specifications:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(product.specifications)
                      .slice(0, 6)
                      .map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-muted-foreground">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <Button asChild variant="outline" className="w-full mt-4 bg-transparent">
                  <Link href={`/products/${product.id}`}>View Full Details</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <h3 className="font-semibold font-sans mb-2">What happens next?</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Our technical team will review your requirements</li>
                <li>• We'll prepare a detailed quote within 2-3 business days</li>
                <li>• A specialist will contact you to discuss specifications</li>
                <li>• Custom configurations available upon request</li>
              </ul>
            </div>
          </div>

          {/* Quote Request Form */}
          <div>
            <QuoteRequestForm product={product} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

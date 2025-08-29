import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProduct } from "@/lib/products"
import { ArrowLeft, FileText } from "lucide-react"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { MEAPerformanceChart } from "@/components/mea-performance-chart"

const nernst_mea_data = [
  { j: 0.1, V: 1.453, name: "0.1" },
  { j: 0.5, V: 1.542, name: "0.5" },
  { j: 1.0, V: 1.617, name: "1.0" },
  { j: 2.0, V: 1.754, name: "2.0" },
  { j: 3.0, V: 1.868, name: "3.0" },
  { j: 4.0, V: 1.987, name: "4.0" },
]

const nrel_mea_data = [
  { j: 0.1, V: 1.479, name: "0.1" },
  { j: 0.5, V: 1.56, name: "0.5" },
  { j: 1.0, V: 1.633, name: "1.0" },
  { j: 2.0, V: 1.763, name: "2.0" },
  { j: 3.0, V: 1.886, name: "3.0" },
  { j: 4.0, V: 2.005, name: "4.0" },
]

const combinedData = nernst_mea_data.map((nernst, index) => ({
  j: nernst.j,
  name: nernst.name,
  "Nernst MEA": nernst.V,
  "NREL Standard MEA": nrel_mea_data[index].V,
}))

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)

  if (!product) {
    return {
      title: "Product Not Found | Nernst Solution LLC",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.name} | Nernst Solution LLC`,
    description: product.shortDescription,
    keywords: [
      product.name.toLowerCase(),
      product.category,
      "electrolyzer research hardware",
      "test stand",
      "research equipment",
      ...product.applications.map((app) => app.toLowerCase()),
      ...product.features.map((feature) => feature.toLowerCase()),
    ],
    openGraph: {
      title: `${product.name} | Nernst Solution LLC`,
      description: product.shortDescription,
      url: `https://nernstsolution.com/products/${id}`,
      images: product.images.map((image) => ({
        url: image,
        width: 1200,
        height: 630,
        alt: product.name,
      })),
      type: "website",
    },
    twitter: {
      title: `${product.name} | Nernst Solution LLC`,
      description: product.shortDescription,
      images: product.images,
    },
    alternates: {
      canonical: `/products/${id}`,
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProduct(id)

  if (!product) {
    notFound()
  }

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
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/#products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square relative overflow-hidden rounded-lg border">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {product.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </>
              )}
            </Carousel>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 relative overflow-hidden rounded border cursor-pointer hover:border-primary transition-colors"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category === "test-stand" ? "Test Stand" : "Cell Hardware"}
              </Badge>
              <h1 className="text-3xl font-bold font-sans text-foreground mb-4">{product.name}</h1>
              {product.price && <p className="text-3xl font-bold text-primary mb-4">{product.price}</p>}
              <p className="text-lg text-muted-foreground font-serif">{product.fullDescription}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {product.transactionCategory === "quote" ? (
                <Button asChild size="lg" className="flex-1">
                  <Link href={`/quote/${product.id}`}>
                    <FileText className="h-5 w-5 mr-2" />
                    Request Quote
                  </Link>
                </Button>
              ) : (
                <AddToCartButton
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price ? Number.parseFloat(product.price.replace(/[$,]/g, "")) : 0,
                    image: product.images[0],
                  }}
                  size="lg"
                  className="flex-1"
                />
              )}
              <Button variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Specifications */}
          <Card>
            <CardHeader>
              <CardTitle className="font-sans">Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{key}</span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="font-sans">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="font-sans">Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {application}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* MEA Performance Chart - only show for MEA product */}
        {product.id === "membrane-electrode-assembly" && (
          <div className="mt-16">
            <MEAPerformanceChart />
          </div>
        )}

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold font-sans text-foreground mb-8">Related Products</h2>
          <div className="text-center text-muted-foreground">
            <p className="font-serif">Explore our complete range of electrolyzer research equipment</p>
            <Button asChild variant="outline" className="mt-4 bg-transparent">
              <Link href="/#products">View All Products</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

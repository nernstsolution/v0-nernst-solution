import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getAllProducts } from "@/lib/products"

export const metadata: Metadata = {
  title: "Products - Electrolyzer Research Hardware | Nernst Solution LLC",
  description: "Explore our comprehensive range of electrolyzer research hardware including PEM and AEM test stands, single cell hardware, multi-cell assemblies, and membrane electrode assemblies.",
  keywords: [
    "electrolyzer products",
    "test stand products", 
    "research hardware products",
    "PEM test stand",
    "AEM test stand",
    "single cell hardware",
    "multi-cell hardware",
    "membrane electrode assembly",
    "electrolyzer testing equipment",
    "research laboratory equipment"
  ],
  openGraph: {
    title: "Products - Electrolyzer Research Hardware | Nernst Solution LLC",
    description: "Professional electrolyzer research equipment including test stands, cell hardware, and membrane electrode assemblies for research and development.",
    url: "https://nernstsolution.com/products",
    images: [
      {
        url: "/images/1kw-test-stand.png",
        width: 1200,
        height: 630,
        alt: "Nernst Solution Electrolyzer Research Hardware Products",
      },
    ],
  },
  twitter: {
    title: "Products - Electrolyzer Research Hardware | Nernst Solution LLC",
    description: "Professional electrolyzer research equipment including test stands, cell hardware, and membrane electrode assemblies.",
    images: ["/images/1kw-test-stand.png"],
  },
  alternates: {
    canonical: "/products",
  },
}

export default function ProductsPage() {
  const products = getAllProducts()
  const testStands = products.filter((p) => p.category === "test-stand")
  const hardware = products.filter((p) => p.category === "hardware")

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Professional water electrolyzer research equipment designed for precision and reliability
          </p>
        </div>

        {/* Test Stands Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-sans text-foreground mb-8">Test Stands</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testStands.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.images[0]}
                description={product.shortDescription}
                category={product.category}
                transactionCategory={product.transactionCategory}
                price={product.price}
              />
            ))}
          </div>
        </div>

        {/* Cell Hardware Section */}
        <div>
          <h2 className="text-2xl font-bold font-sans text-foreground mb-8">Cell Hardware</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardware.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.images[0]}
                description={product.shortDescription}
                category={product.category}
                transactionCategory={product.transactionCategory}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

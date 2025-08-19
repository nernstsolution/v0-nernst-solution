import { ProductCard } from "./product-card"
import { getAllProducts } from "@/lib/products"

export function ProductsSection() {
  const products = getAllProducts()
  const testStands = products.filter((p) => p.category === "test-stand")
  const hardware = products.filter((p) => p.category === "hardware")

  return (
    <section id="products" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Professional water electrolyzer research equipment designed for precision and reliability
          </p>
        </div>

        {/* Test Stands Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-sans text-foreground mb-8 text-center">Test Stands</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          <h3 className="text-2xl font-bold font-sans text-foreground mb-8 text-center">Cell Hardware</h3>
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
      </div>
    </section>
  )
}

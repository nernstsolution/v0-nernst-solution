import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, Download, ExternalLink, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Resources - Learning Center & Documentation | Nernst Solution LLC",
  description: "Access comprehensive resources including Cell Build Guides, test equipment tips, product catalogs, brochures, and technical specifications for electrolyzer research hardware.",
  keywords: [
    "electrolyzer resources",
    "research hardware guides",
    "test equipment best practices",
    "electrolyzer documentation",
    "technical specifications",
    "product catalogs",
    "research equipment tips",
    "hardware maintenance guides"
  ],
  openGraph: {
    title: "Resources - Learning Center & Documentation | Nernst Solution LLC",
    description: "Comprehensive resources for electrolyzer research hardware including guides, catalogs, and technical specifications.",
    url: "https://nernstsolution.com/resources",
    images: [
      {
        url: "/images/nernst-logo.png",
        width: 1200,
        height: 630,
        alt: "Nernst Solution Resources",
      },
    ],
  },
  twitter: {
    title: "Resources - Learning Center & Documentation | Nernst Solution LLC",
    description: "Comprehensive resources for electrolyzer research hardware.",
    images: ["/images/nernst-logo.png"],
  },
  alternates: {
    canonical: "/resources",
  },
}

const learningResources = [
  {
    id: "cell-build-guide",
    title: "Cell Build Guide",
    description: "Essential guidelines for optimal performance and safety when using electrolyzer research equipment.",
    category: "Guide",
    readTime: "15 min read",
    author: "Nernst Technical Team",
    date: "2024",
    href: "/resources/cell-build-guide",
    icon: BookOpen,
  },
  {
    id: "test-equipment-tips",
    title: "Test Equipment Tips & Tricks",
    description: "Proven techniques and insider knowledge for maximizing the potential of your test stands.",
    category: "Tips",
    readTime: "10 min read",
    author: "Research Specialists",
    date: "2024",
    href: "/resources/test-equipment-tips",
    icon: BookOpen,
  },
  {
    id: "hardware-maintenance",
    title: "Hardware Maintenance Guide",
    description: "Comprehensive maintenance procedures to ensure long-term reliability of your research hardware.",
    category: "Maintenance",
    readTime: "20 min read",
    author: "Engineering Team",
    date: "2024",
    href: "/resources/hardware-maintenance",
    icon: BookOpen,
  },
]

const documentation = [
  {
    id: "catalog",
    title: "Product Catalog 2024",
    description: "Complete catalog of all electrolyzer research hardware, test stands, and accessories.",
    category: "Catalog",
    fileSize: "2.4 MB",
    format: "PDF",
    date: "2024",
    href: "/resources/catalog",
    icon: FileText,
    downloadable: true,
  },
  {
    id: "brochures",
    title: "Product Brochures",
    description: "Detailed brochures for each product category with specifications and applications.",
    category: "Brochure",
    fileSize: "1.8 MB",
    format: "PDF",
    date: "2024",
    href: "/resources/brochures",
    icon: FileText,
    downloadable: true,
  },
  {
    id: "technical-specs",
    title: "Technical Specifications",
    description: "Comprehensive technical documentation for all products including dimensions, materials, and performance data.",
    category: "Technical",
    fileSize: "3.1 MB",
    format: "PDF",
    date: "2024",
    href: "/resources/technical-specs",
    icon: FileText,
    downloadable: true,
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Resources</h1>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
            Access comprehensive guides, best practices, and documentation to maximize the potential of your electrolyzer research hardware
          </p>
        </div>

        {/* Learning Center Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-sans text-foreground">Learning Center</h2>
            <Badge variant="secondary" className="text-sm">
              {learningResources.length} Resources
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningResources.map((resource) => (
              <Card key={resource.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.category}
                    </Badge>
                    <resource.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg font-sans">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground font-serif">{resource.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{resource.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{resource.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{resource.date}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full" variant="outline">
                    <Link href={resource.href}>
                      Read More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Documentation Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-sans text-foreground">Documentation</h2>
            <Badge variant="secondary" className="text-sm">
              {documentation.length} Documents
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentation.map((doc) => (
              <Card key={doc.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {doc.category}
                    </Badge>
                    <doc.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg font-sans">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground font-serif">{doc.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      <span>{doc.format}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{doc.fileSize}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{doc.date}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link href={doc.href}>
                      {doc.downloadable ? "Download" : "View"}
                      {doc.downloadable ? <Download className="w-4 h-4 ml-2" /> : <ExternalLink className="w-4 h-4 ml-2" />}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold font-sans mb-4">Need More Specific Information?</h3>
              <p className="text-muted-foreground font-serif mb-6">
                Can't find what you're looking for? Our technical team is here to help with custom documentation and personalized guidance.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button asChild>
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  )
}

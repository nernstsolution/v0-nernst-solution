import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Clock, User, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hardware Maintenance Tips - Electrolyzer Research Hardware | Nernst Solution LLC",
  description: "Best practices for maintaining electrolyzer cell hardware, including flow fields, bolts, and current collectors.",
  keywords: [
    "electrolyzer hardware maintenance",
    "flow field cleaning",
    "bolt inspection",
    "current collector care",
    "cell hardware reliability",
    "preventive maintenance"
  ],
  openGraph: {
    title: "Hardware Maintenance Tips - Electrolyzer Research Hardware | Nernst Solution LLC",
    description: "Best practices for maintaining electrolyzer cell hardware, including flow fields, bolts, and current collectors.",
    url: "https://nernstsolution.com/resources/hardware-maintenance",
    images: [
      {
        url: "/images/nernst-logo.png",
        width: 1200,
        height: 630,
        alt: "Hardware Maintenance Tips",
      },
    ],
  },
  twitter: {
    title: "Hardware Maintenance Tips - Electrolyzer Research Hardware | Nernst Solution LLC",
    description: "Best practices for maintaining electrolyzer cell hardware.",
    images: ["/images/nernst-logo.png"],
  },
  alternates: {
    canonical: "/resources/hardware-maintenance",
  },
}

export default function HardwareMaintenanceTipsPage() {
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
          <Link href="/resources" className="hover:text-primary transition-colors">
            Resources
          </Link>
          <span>/</span>
          <span className="text-foreground">Hardware Maintenance Tips</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/resources">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>
        </Button>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <Badge variant="secondary">Maintenance</Badge>
          </div>
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Electrolyzer Cell Hardware Maintenance</h1>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto mb-6">
            Proper maintenance of electrolyzer cell hardware is essential for ensuring long-term durability, consistent performance, and reliable test results.
          </p>
          {/* Article Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Nernst Technical Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg font-sans">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              <Link 
                href="#flow-fields" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                1. Flow Fields
              </Link>
              <Link 
                href="#bolts" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                2. Bolts
              </Link>
              <Link 
                href="#current-collector" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                3. Current Collector
              </Link>
              <Link 
                href="#conclusion" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Conclusion
              </Link>
            </nav>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1 */}
          <section id="flow-fields">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">1. Flow Fields</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                Flow fields should be inspected regularly for both surface coating condition and the presence of debris. Particular attention should be given to the anode side, as the anode coating is more susceptible to degradation under high oxidative environments. Compromised coatings can lead to increased resistance and reduced performance. On the cathode side, operators should carefully check for carbon fiber debris, as carbon paper used in cathode assemblies can release fibrous materials that may obstruct channels or ports. Routine cleaning and inspections help maintain proper flow distribution and prevent contamination.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="bolts">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">2. Bolts</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                Bolts should be inspected regularly for thread condition to prevent mechanical failures during operation. When necessary, apply Krytox grease to the thread inserts. This practice protects the threads from wear, reduces the likelihood of overtightening, and facilitates smoother disassembly. Operators must take caution to ensure that Krytox grease does not come into contact with any active materials in the cell hardware, as contamination can negatively affect performance and experimental results.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="current-collector">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">3. Current Collector</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                The current collector should be inspected at the locations where electrical contact is established with the current or voltage cable lugs. If the coating is worn and the copper surface becomes oxidized, recoating may be necessary to restore optimal conductivity and minimize contact resistance. As a best practice, washers should always be used between tightening bolts or nuts and the current collector plate. This helps to distribute load evenly, protect the coating, and maintain stable electrical connections.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">Conclusion</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                Regular inspections and proper maintenance of cell hardware extend the service life of electrolyzer components and ensure reliable, reproducible performance. By focusing on the condition of flow fields, bolts, and current collectors, operators can mitigate premature failures, reduce downtime, and maintain the integrity of both the hardware and the experimental data.
              </p>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold font-sans mb-4">Need More Help?</h3>
              <p className="text-muted-foreground font-serif mb-6">
                Have questions about implementing these best practices? Our technical team is here to help.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Technical Support</Link>
                </Button>
                <Button asChild>
                  <Link href="/resources">Browse More Resources</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

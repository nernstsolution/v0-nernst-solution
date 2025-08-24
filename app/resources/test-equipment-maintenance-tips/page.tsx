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
  title: "Test Equipment Maintenance Tips - Electrolyzer Research Hardware | Nernst Solution LLC",
  description: "Best practices for maintaining electrolyzer test stands, including resin cartridge replacement, separator bottle cleaning, and pump calibration.",
  keywords: [
    "electrolyzer maintenance",
    "test equipment tips",
    "ion exchange resin replacement",
    "separator bottle cleaning",
    "pump calibration",
    "research hardware reliability",
    "preventive maintenance"
  ],
  openGraph: {
    title: "Test Equipment Maintenance Tips - Electrolyzer Research Hardware | Nernst Solution LLC",
    description: "Best practices for maintaining electrolyzer test stands, including resin cartridge replacement, separator bottle cleaning, and pump calibration.",
    url: "https://nernstsolution.com/resources/test-stand-maintenance-tips",
    images: [
      {
        url: "/images/nernst-logo.png",
        width: 1200,
        height: 630,
        alt: "Test Equipment Maintenance Tips",
      },
    ],
  },
  twitter: {
    title: "Test Equipment Maintenance Tips - Electrolyzer Research Hardware | Nernst Solution LLC",
    description: "Best practices for maintaining electrolyzer test stands.",
    images: ["/images/nernst-logo.png"],
  },
  alternates: {
    canonical: "/resources/test-equipment-maintenance-tips",
  },
}

export default function TestEquipmentMaintenanceTipsPage() {
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
          <span className="text-foreground">Test Equipment Maintenance Tips</span>
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
            <Badge variant="secondary">Tips</Badge>
          </div>
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Test Equipment Maintenance Tips</h1>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto mb-6">
            Proper maintenance of an electrolyzer test stand is essential to ensure reliable performance, accurate data collection, and long equipment life.
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
                href="#resin-replacement" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                1. Regular Ion Exchange Resin Cartridge Replacement
              </Link>
              <Link 
                href="#separator-bottle" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                2. Replenishing and Cleaning the Cathode Separator Bottle
              </Link>
              <Link 
                href="#pump-calibration" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                3. Pump Calibration When Changing Cell Hardware
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
          <section id="resin-replacement">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">1. Regular Ion Exchange Resin Cartridge Replacement</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                The ion exchange resin cartridge plays a vital role in maintaining high-purity water for electrolyzer operation. As the resin becomes exhausted, conductivity of the circulating water gradually increases, which can affect cell performance and accelerate degradation.
              </p>
              <p className="text-muted-foreground font-serif mb-6">
                It is recommended to replace the cartridge every six months, or after 2,000 hours of operation, whichever comes first. In addition, if the conductivity reading rises above the baseline level, the cartridge should be replaced immediately, regardless of the elapsed time.
              </p>
              <p className="text-muted-foreground font-serif mb-6">
                Operators should note that the actual replacement interval depends strongly on the inlet deionized (DI) water quality. Facilities with consistently high-purity feed water may extend cartridge life, while environments with lower-quality inlet water will require more frequent changes. Monitoring conductivity trends on a routine basis is the most reliable way to establish the correct replacement schedule for a given installation.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="separator-bottle">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">2. Replenishing and Cleaning the Cathode Separator Bottle</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                The cathode separator bottle serves to collect water and hydrogen exiting the cathode side of the electrolyzer. Over time, this bottle may accumulate carbon fiber debris originating from cell hardware, in addition to condensed water carried by the gas stream. If left unattended, these particulates can build up, leading to contamination, reduced gas–liquid separation efficiency, and in some cases flow blockages.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground font-serif mb-6">
                <li>Inspect the bottle at scheduled intervals for debris accumulation or discoloration.</li>
                <li>Replenish the water level as needed to ensure consistent separation function.</li>
                <li>Empty and clean the bottle thoroughly using DI water and mild detergents, ensuring all carbon fiber debris and residues are removed.</li>
              </ul>
              <p className="text-muted-foreground font-serif mb-6">
                Establishing a routine inspection—such as weekly during continuous operation—will help maintain reliable gas management and minimize the risk of contamination in downstream components.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="pump-calibration">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">3. Pump Calibration When Changing Cell Hardware</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                The liquid circulation pump is tuned to maintain stable flow and pressure conditions across the electrolyzer cell. Different cell hardware designs, however, exhibit varying pressure drop characteristics due to differences in flow fields, gasket compression, and active area.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground font-serif mb-6">
                <li>Re-calibrate the pump whenever a new cell hardware configuration is installed.</li>
                <li>Use updated pump performance curves to reflect the expected flow and pressure drop.</li>
                <li>Verify calibration by running the system at typical operating conditions and confirming stable readings from pressure and flow sensors.</li>
              </ul>
              <p className="text-muted-foreground font-serif mb-6">
                Proper calibration ensures that the pump delivers the required coolant or water circulation without introducing excessive mechanical or thermal stresses to the system.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">Conclusion</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                Adhering to these preventive maintenance practices will help ensure that electrolyzer test stands operate safely, consistently, and with high data fidelity. Regular replacement of the ion exchange resin cartridge, routine inspection and cleaning of the cathode separator bottle, and recalibration of pumps when changing hardware are straightforward steps that have significant impact on long-term reliability. By institutionalizing these practices into operating procedures, laboratories and industrial users alike can maximize the value of their test stand investments and support the generation of reproducible, high-quality results.
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

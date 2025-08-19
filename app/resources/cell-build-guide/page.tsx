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
  title: "Cell Build Guide - Electrolyzer Research Hardware | Nernst Solution LLC",
  description: "Essential guidelines for optimal performance and safety when using electrolyzer research equipment. Learn best practices for test stands, cell hardware, and maintenance procedures.",
  keywords: [
    "electrolyzer best practices",
    "research hardware guidelines",
    "test stand safety",
    "electrochemical cell maintenance",
    "electrolyzer testing procedures",
    "research equipment safety",
    "hardware operation guidelines",
    "electrolyzer performance optimization"
  ],
  openGraph: {
    title: "Cell Build Guide - Electrolyzer Research Hardware | Nernst Solution LLC",
    description: "Essential guidelines for optimal performance and safety when using electrolyzer research equipment.",
    url: "https://nernstsolution.com/resources/cell-build-guide",
    images: [
      {
        url: "/images/nernst-logo.png",
        width: 1200,
        height: 630,
        alt: "Cell Build Guide",
      },
    ],
  },
  twitter: {
    title: "Cell Build Guide - Electrolyzer Research Hardware | Nernst Solution LLC",
    description: "Essential guidelines for optimal performance and safety when using electrolyzer research equipment.",
    images: ["/images/nernst-logo.png"],
  },
  alternates: {
    canonical: "/resources/cell-build-guide",
  },
}

export default function CellBuildGuidePage() {
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
          <span className="text-foreground">Cell Build Guide</span>
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
            <Badge variant="secondary">Guide</Badge>
          </div>
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Cell Build Guide</h1>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto mb-6">
            Essential guidelines for optimal performance and safety when using electrolyzer research equipment
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
              <span>15 min read</span>
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
                href="#fundamental-components" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                1. Fundamental Components of Electrolyzer Cell Hardware
              </Link>
              <Link 
                href="#assembly-guidelines" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                2. Guidelines for Assembling a High-Performance Electrolyzer Cell
              </Link>
              <Link 
                href="#conditioning-protocols" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                3. Conditioning Protocols and Long-Term Stability
              </Link>
            </nav>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section 1: Fundamental Components */}
          <section id="fundamental-components">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">1. Fundamental Components of Electrolyzer Cell Hardware</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                An electrolyzer cell consists of a carefully engineered assembly of mechanical, electrical, and electrochemical components. Proper understanding of the role of each element is essential for reliable operation, performance optimization, and safety during testing. Figure 1 illustrates an exploded view of a typical single-cell hardware assembly.
              </p>
              
              {/* Figure 1: Exploded view of electrolyzer cell assembly */}
              <div className="my-6">
                <div className="relative w-full max-w-4xl mx-auto">
                  <Image
                    src="/images/resources/exploded-cell-assembly.png"
                    alt="Exploded isometric view of multi-layered electrochemical cell assembly showing pressure plates, current collectors, flow fields, gas diffusion layers, MEA, and external connections"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg border shadow-sm"
                    priority
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3 font-serif">
                  <strong>Figure 1:</strong> Exploded view of a typical single-cell hardware assembly showing the layered structure and components
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold font-sans text-foreground mb-3">a) Pressure Plates</h3>
                  <p className="text-muted-foreground font-serif">
                    Rigid metal plates that apply and maintain uniform mechanical compression across the cell. The applied load ensures consistent contact between functional layers, minimizes interfacial resistance, and prevents leakage.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold font-sans text-foreground mb-3">b) Current Collectors</h3>
                  <p className="text-muted-foreground font-serif">
                    Highly conductive plates (commonly copper or coated stainless steel) positioned between the pressure plates and flow fields. Their primary function is to transmit current efficiently into the electrochemical cell while minimizing ohmic losses and contact resistance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold font-sans text-foreground mb-3">c) Flow Fields</h3>
                  <p className="text-muted-foreground font-serif">
                    Machined or molded plates containing channels designed to uniformly distribute water and gases (hydrogen and oxygen) across the active area. In addition to mass transport, flow fields conduct current and aid in thermal management by dissipating localized heat.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold font-sans text-foreground mb-3">d) Gaskets</h3>
                  <p className="text-muted-foreground font-serif">
                    Sealing elements fabricated from chemically resistant elastomers or composites. They prevent cross-leakage of reactants and ensure mechanical integrity of the assembly under compression. Proper selection of gasket thickness and elasticity is critical for maintaining operational safety and long-term durability.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold font-sans text-foreground mb-3">e) Porous Transport Layer (PTL)</h3>
                  <p className="text-muted-foreground font-serif">
                    A porous, conductive medium typically made of titanium felt on the anode side and carbon paper on the cathode side. The PTL promotes uniform distribution of water, facilitates gas evacuation, and provides an electrical pathway between the flow field and the catalyst layer.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold font-sans text-foreground mb-3">f) Membrane Electrode Assembly (MEA)</h3>
                  <p className="text-muted-foreground font-serif">
                    The functional heart of the electrolyzer. It consists of a polymer electrolyte membrane coated with electrocatalyst layers and gas diffusion media. The MEA drives the electrochemical reaction, splitting water into hydrogen at the cathode and oxygen at the anode.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Assembly Guidelines */}
          <section id="assembly-guidelines">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">2. Guidelines for Assembling a High-Performance Electrolyzer Cell</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                The performance, reliability, and safety of an electrolyzer cell depend critically on proper assembly. Attention to detail in component alignment, torque application, and sealing integrity is required to avoid common operational issues such as gas crossover, excessive ohmic resistance, and premature degradation.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold font-sans text-foreground mb-4">2.1 Optimization of Gasket and PTL Configuration</h3>
                  <p className="text-muted-foreground font-serif">
                    The relative thickness of gaskets and porous transport layers (PTLs) determines the compression and sealing behavior of the cell. A gasket that is too thin increases the risk of leakage, while a gasket that is too thick reduces compression in the active area, leading to poor electrochemical contact. The PTL thickness must be selected in conjunction with gasket dimensions to achieve uniform pressure distribution and proper fluid transport. Empirical testing and manufacturer guidelines should be followed when selecting these components.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold font-sans text-foreground mb-4">2.2 Application of Controlled Compression</h3>
                  <p className="text-muted-foreground font-serif">
                    Mechanical compression is applied by tightening tie rods that secure the pressure plates. The applied torque must be calculated based on the mechanical properties of the components and validated experimentally to ensure both sealing and low contact resistance. Under-compression may result in gas leaks or poor electronic contact, whereas over-compression risks damaging the MEA or deforming the PTL. A calibrated torque wrench should always be used, and a uniform tightening sequence (commonly a star pattern) should be followed to avoid uneven loading.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Conditioning Protocols */}
          <section id="conditioning-protocols">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-6">3. Conditioning Protocols and Long-Term Stability</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground font-serif mb-6">
                Electrolyzer cells are assembled at ambient temperature but are typically operated at elevated temperatures (60–80 °C or higher, depending on the design). Initial conditioning is required to activate the electrocatalysts, hydrate the membrane, and stabilize interfacial contact.
              </p>
              
              <p className="text-muted-foreground font-serif mb-6">
                Standard conditioning protocols may include stepwise increases in current density, controlled temperature ramping, and intermittent operation to allow material relaxation. During long-term testing, thermal cycling caused by repeated startup and shutdown can relax the mechanical compression, leading to increased resistance or minor leakage. Therefore, periodic re-torque of tie rods is required to maintain sealing integrity and electrical performance. The frequency of re-torque should be established based on operational data and manufacturer recommendations.
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

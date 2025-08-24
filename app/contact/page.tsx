import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Nernst Solution LLC",
  description: "Contact Nernst Solution LLC for technical support, product information, quote requests, and partnership opportunities. Expert support for electrolyzer research hardware.",
  keywords: [
    "contact Nernst Solution",
    "electrolyzer support",
    "technical support",
    "quote request",
    "product information",
    "partnership opportunities",
    "research hardware support",
    "electrolyzer consultation"
  ],
  openGraph: {
    title: "Contact Us - Get in Touch | Nernst Solution LLC",
    description: "Contact our team for technical support, product information, and quote requests. Expert guidance for electrolyzer research hardware.",
    url: "https://nernstsolution.com/contact",
    images: [
      {
        url: "/images/nernst-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Nernst Solution LLC",
      },
    ],
  },
  twitter: {
    title: "Contact Us - Get in Touch | Nernst Solution LLC",
    description: "Contact our team for technical support, product information, and quote requests.",
    images: ["/images/nernst-logo.png"],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Get in touch with our team of electrolyzer experts. We're here to help with your research and development
            needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contact@nernstsolution.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (302) 316-5188</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Newark, Delaware
                      <br />
                      USA
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Why Choose Nernst Solution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Industry Expertise</p>
                    <p className="text-sm text-muted-foreground">
                      Over 10 years of experience in electrolyzer technology and research equipment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Dedicated Support</p>
                    <p className="text-sm text-muted-foreground">
                      Our technical team provides ongoing support throughout your research journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Custom Solutions</p>
                    <p className="text-sm text-muted-foreground">
                      We work with you to develop customized equipment for your specific research needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold font-sans mb-2 text-accent-foreground">Quick Response Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 24 hours during business days. For urgent technical
                support, please call our direct line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}

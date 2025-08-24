import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { CartProvider } from "@/contexts/cart-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Nernst Solution LLC - Water Electrolyzer Research Hardware",
  description:
    "Professional water electrolyzer research hardware and test stands for research institutes, universities, and industrial companies.",
  keywords: [
    "electrolyzer",
    "test stand", 
    "research hardware",
    "PEM electrolyzer",
    "AEM electrolyzer",
    "hydrogen production",
    "water electrolysis",
    "electrochemical research",
    "membrane electrode assembly",
    "MEA",
    "single cell hardware",
    "multi-cell hardware",
    "electrolyzer testing",
    "research equipment",
    "laboratory hardware",
    "electrochemistry",
    "green hydrogen",
    "renewable energy research"
  ],
  authors: [{ name: "Nernst Solution LLC" }],
  creator: "Nernst Solution LLC",
  publisher: "Nernst Solution LLC",
  icons: {
    icon: "/images/nernst-logo-simple.png",
    shortcut: "/images/nernst-logo-simple.png",
    apple: "/images/nernst-logo-simple.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nernstsolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nernstsolution.com",
    siteName: "Nernst Solution LLC",
    title: "Nernst Solution LLC - Professional Electrolyzer Research Hardware",
    description: "High-quality water electrolyzer research equipment and test stands for research institutes, universities, and industrial companies. PEM and AEM electrolyzer testing solutions.",
    images: [
      {
        url: "/images/nernst-logo.png",
        width: 1200,
        height: 630,
        alt: "Nernst Solution LLC - Electrolyzer Research Hardware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nernst Solution LLC - Electrolyzer Research Hardware",
    description: "Professional water electrolyzer research equipment and test stands for research institutes, universities, and industrial companies.",
    images: ["/images/nernst-logo.png"],
    creator: "@nernstsolution",
    site: "@nernstsolution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Electrolyzer Research Hardware",
  generator: "v0.app",
}

// Structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nernst Solution LLC",
  "url": "https://nernstsolution.com",
  "logo": "https://nernstsolution.com/images/nernst-logo.png",
  "description": "Professional water electrolyzer research hardware and test stands for research institutes, universities, and industrial companies.",
  "foundingDate": "2024",
  "industry": "Electrolyzer Research Hardware",
  "slogan": "Professional water electrolyzer research hardware and test stands",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://linkedin.com/company/nernst-solution",
    "https://twitter.com/nernstsolution"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Electrolyzer Research Hardware",
    "availability": "https://schema.org/InStock"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

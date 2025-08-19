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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

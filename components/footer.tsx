import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Image
              src="/images/nernst-logo.png"
              alt="Nernst Solution LLC"
              width={200}
              height={40}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 font-serif mb-4">
              Leading provider of water electrolyzer research hardware and test stands for scientific and industrial
              applications.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">NernstSolution@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Research Park, Innovation District</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-sans mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/test-stands" className="hover:text-accent transition-colors">
                  Test Stands
                </Link>
              </li>
              <li>
                <Link href="/products/cell-hardware" className="hover:text-accent transition-colors">
                  Cell Hardware
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className="hover:text-accent transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-sans mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-accent transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="hover:text-accent transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">© 2024 Nernst Solution LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

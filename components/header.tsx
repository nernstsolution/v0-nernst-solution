"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, ChevronDown, BookOpen, FileText } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useState, useRef, useEffect } from "react"

export function Header() {
  const { itemCount } = useCart()
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsResourcesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false)
    }, 150) // Small delay to prevent flickering
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/nernst-logo.png"
            alt="Nernst Solution LLC"
            width={200}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </Link>
          
          {/* Resources Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/resources"
              className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer outline-none"
              tabIndex={0}
              onClick={(e) => {
                // Allow navigation on click
                setIsResourcesOpen(false)
              }}
              onMouseDown={(e) => {
                // Prevent focus loss on click for accessibility
                e.preventDefault()
              }}
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </Link>
            
            {isResourcesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Learning Center */}
                <div className="px-4 py-2">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Learning Center
                  </h3>
                  <div className="space-y-1">
                    <Link 
                      href="/resources/cell-build-guide" 
                      className="flex items-center space-x-2 px-2 py-1 text-sm hover:bg-accent rounded transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Cell Build Guide</span>
                    </Link>
                    <Link 
                      href="/resources/test-equipment-maintenance-tips" 
                      className="flex items-center space-x-2 px-2 py-1 text-sm hover:bg-accent rounded transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Test Stand Tips</span>
                    </Link>
                    <Link 
                      href="/resources/hardware-maintenance" 
                      className="flex items-center space-x-2 px-2 py-1 text-sm hover:bg-accent rounded transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Hardware Maintenance</span>
                    </Link>
                  </div>
                </div>
                
                <div className="border-t my-2"></div>
                
                {/* Documentation */}
                <div className="px-4 py-2">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Documentation
                  </h3>
                  <div className="space-y-1">
                    <Link 
                      href="/contact" 
                      className="flex items-center space-x-2 px-2 py-1 text-sm hover:bg-accent rounded transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Brochures</span>
                    </Link>
                  </div>
                </div>

                {/* View All Resources Link */}
                <div className="border-t mt-2 pt-2 px-4">
                  <Link 
                    href="/resources" 
                    className="flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded transition-colors"
                  >
                    <span>View All Resources</span>
                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-accent text-xs font-medium flex items-center justify-center text-accent-foreground">
                  {itemCount}
                </span>
              )}
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <div
              className="absolute right-4 top-16 w-56 bg-background border rounded-lg shadow-lg py-4 px-4 flex flex-col space-y-4"
              onClick={e => e.stopPropagation()}
            >
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Products
              </Link>
              <Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Resources
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

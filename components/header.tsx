"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-lavender-light/95 backdrop-blur-sm border-b border-gray-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/castle-keys-logo.jpg"
              alt="Castle Keys Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-serif text-xl font-semibold text-purple-dark hidden sm:block">
              Castle Keys of Texas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-purple-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="tel:281-380-2128" 
              className="flex items-center gap-2 text-sm font-medium text-purple-dark hover:text-purple-cta transition-colors"
            >
              <Phone className="h-4 w-4" />
              281-380-2128
            </Link>
            <Button 
              asChild
              className="bg-purple-cta hover:bg-purple-dark text-white rounded-full px-6"
            >
              <Link href="#contact">Request Property Review</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-purple-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-base font-medium text-charcoal hover:text-purple-dark transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-border space-y-3">
              <Link 
                href="tel:281-380-2128" 
                className="flex items-center gap-2 py-2 text-base font-medium text-purple-dark"
              >
                <Phone className="h-5 w-5" />
                281-380-2128
              </Link>
              <Button 
                asChild
                className="w-full bg-purple-cta hover:bg-purple-dark text-white rounded-full"
              >
                <Link href="#contact">Request Property Review</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

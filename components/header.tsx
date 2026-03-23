"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { HashSectionLink } from "@/components/hash-section-link"
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
            <span className="font-serif text-base sm:text-xl font-semibold text-purple-dark">
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
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-lavender/40 hover:bg-lavender/70 text-purple-dark transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-sm border-t border-gray-border shadow-xl">
          <nav className="px-4 pt-3 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center py-3 text-base font-medium text-charcoal hover:text-purple-dark border-b border-gray-border/50 last:border-0 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pt-2 pb-5 space-y-3">
            <Link
              href="tel:281-380-2128"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-purple-dark text-purple-dark font-semibold text-base hover:bg-purple-dark hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              281-380-2128
            </Link>
            <Button
              asChild
              className="w-full bg-purple-cta hover:bg-purple-dark text-white rounded-full py-3 text-base font-semibold shadow-lg shadow-purple-cta/20"
            >
              <HashSectionLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Request Property Review
              </HashSectionLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { SectionLink } from "@/components/section-link"
import { HashSectionLink } from "@/components/hash-section-link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { navSectionLinks, PAYMENT_PAGE_PATH } from "@/lib/site"

const primaryCtaClassName =
  "bg-purple-cta hover:bg-purple-dark text-white rounded-full shadow-lg shadow-purple-cta/20"

/** Same outline style as hero “Call 281-380-2128” (components/hero.tsx) */
const outlineCtaButtonClassName =
  "border-2 border-purple-ink text-purple-ink hover:bg-purple-dark hover:text-white rounded-full shadow-none"

/** Mobile menu: matches phone link (Call 281-380-2128 row) */
const mobileOutlineLinkClassName =
  "flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-purple-ink text-purple-ink font-semibold text-base hover:bg-purple-dark hover:text-white transition-colors"

const desktopPhoneClassName =
  "inline-flex items-center gap-2.5 text-base xl:text-lg font-semibold tabular-nums tracking-tight text-purple-ink hover:text-purple-cta transition-colors shrink-0"

const navLinksMain = navSectionLinks.slice(0, -1)
const contactNavLink = navSectionLinks[navSectionLinks.length - 1]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header className="sticky top-0 z-50 w-full bg-lavender-light/95 backdrop-blur-sm border-b border-gray-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 py-3 lg:py-2 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/castle-keys-logo.jpg"
              alt="Castle Keys Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-serif text-base sm:text-xl font-semibold text-purple-ink">
              Castle Keys of Texas
            </span>
          </Link>

          {/* Desktop: nav · Contact · phone (centered) · CTAs */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-8 min-w-0 ml-6">
            <nav className="flex items-center gap-8 shrink-0">
              {navLinksMain.map((link) => (
                <SectionLink
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-charcoal hover:text-purple-ink transition-colors"
                >
                  {link.label}
                </SectionLink>
              ))}
            </nav>

            <div className="flex flex-1 items-center justify-end min-w-0 max-w-3xl">
              <SectionLink
                href={contactNavLink.href}
                className="text-sm font-medium text-charcoal hover:text-purple-ink transition-colors shrink-0"
              >
                {contactNavLink.label}
              </SectionLink>

              <div className="flex flex-1 items-center justify-center px-6 sm:px-8 min-w-[10rem]">
                <Link href="tel:281-380-2128" className={desktopPhoneClassName}>
                  <Phone className="h-5 w-5 xl:h-6 xl:w-6 shrink-0" aria-hidden />
                  <span>281-380-2128</span>
                </Link>
              </div>

              <div className="flex items-center gap-2 shrink-0">
              <div className="flex flex-col gap-2 items-stretch shrink-0">
                <Button asChild className={`${primaryCtaClassName} px-5 text-sm h-9`}>
                  {isHome ? (
                    <HashSectionLink href="#contact">Request Property Review</HashSectionLink>
                  ) : (
                    <Link href="/#contact">Request Property Review</Link>
                  )}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={`${outlineCtaButtonClassName} px-5 text-sm font-semibold h-9 whitespace-nowrap`}
                >
                  <Link href={PAYMENT_PAGE_PATH}>Tenant Payment Portal</Link>
                </Button>
              </div>
              <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile: theme + menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-lavender/40 hover:bg-lavender/70 text-purple-ink transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface/98 backdrop-blur-sm border-t border-gray-border shadow-xl">
          <nav className="px-4 pt-3 pb-2">
            {navSectionLinks.map((link) => (
              <SectionLink
                key={link.href}
                href={link.href}
                className="flex items-center py-3 text-base font-medium text-charcoal hover:text-purple-ink border-b border-gray-border/50 last:border-0 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </SectionLink>
            ))}
          </nav>
          <div className="px-4 pt-2 pb-5 space-y-3">
            <Link
              href="tel:281-380-2128"
              className={mobileOutlineLinkClassName}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              281-380-2128
            </Link>
            <Button
              asChild
              className={`w-full ${primaryCtaClassName} py-3 text-base font-semibold`}
            >
              {isHome ? (
                <HashSectionLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Request Property Review
                </HashSectionLink>
              ) : (
                <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                  Request Property Review
                </Link>
              )}
            </Button>
            <Link
              href={PAYMENT_PAGE_PATH}
              className={mobileOutlineLinkClassName}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tenant Payment Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

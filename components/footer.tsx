import Link from "next/link"
import Image from "next/image"
import { HashSectionLink } from "@/components/hash-section-link"
import { Phone, MapPin } from "lucide-react"

const quickLinks: { href: `#${string}`; label: string }[] = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

const serviceAreas = [
  "Houston",
  "Spring",
  "The Woodlands",
  "Conroe",
  "Tomball",
  "Surrounding Areas",
]

export function Footer() {
  return (
    <footer className="bg-purple-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-12 lg:gap-y-0">
          {/* Brand + contact */}
          <div className="flex flex-col items-center text-center lg:col-span-2 lg:items-start lg:text-left">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/castle-keys-logo.jpg"
                alt="Castle Keys Logo"
                width={40}
                height={40}
                className="h-11 w-11 object-contain bg-white rounded-xl p-1 shadow-lg shadow-black/20"
              />
              <span className="font-serif text-xl font-semibold tracking-tight">
                Castle Keys of Texas
              </span>
            </Link>
            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed max-w-md">
              Helping property owners in the Greater Houston Area lease their homes through a tailored master lease structure.
            </p>

            <div className="mt-6 w-full max-w-md space-y-4 rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-inner shadow-black/10 backdrop-blur-sm lg:max-w-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
              <a
                href="tel:281-380-2128"
                className="flex items-center justify-center gap-3 text-base font-medium text-white/90 transition-colors hover:text-white lg:justify-start"
              >
                <Phone className="h-5 w-5 flex-shrink-0 text-lavender" />
                <span>281-380-2128</span>
              </a>
              <div className="flex items-start justify-center gap-3 text-left text-white/80 lg:justify-start lg:text-white/80">
                <MapPin className="h-5 w-5 flex-shrink-0 text-lavender mt-0.5" />
                <span className="text-sm leading-relaxed">
                  330 Rayford Rd., #146, Spring, TX 77386
                </span>
              </div>
            </div>
          </div>

          {/* Quick links + service: 2-col on mobile, grid siblings on lg */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:contents">
            <div className="rounded-2xl border border-white/12 bg-white/[0.05] p-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-lavender mb-4 lg:text-lg lg:normal-case lg:tracking-normal lg:text-white lg:mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 lg:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <HashSectionLink
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white lg:text-base"
                    >
                      {link.label}
                    </HashSectionLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/12 bg-white/[0.05] p-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-lavender mb-4 lg:text-lg lg:normal-case lg:tracking-normal lg:text-white lg:mb-4">
                Service Area
              </h3>
              <ul className="space-y-2 text-sm text-white/80 lg:space-y-2 lg:text-base lg:text-white/70">
                {serviceAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/15">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} Castle Keys of Texas LLC. All rights reserved.
            </p>
          </div>
          <p className="mt-6 rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-center text-xs leading-relaxed text-white/50 sm:text-left lg:max-w-3xl">
            Information on this website is for general informational purposes only and does not constitute legal or tax advice. Please consult with appropriate professionals for advice specific to your situation.
          </p>
        </div>
      </div>
    </footer>
  )
}

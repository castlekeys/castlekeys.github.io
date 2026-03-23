import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-purple-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/castle-keys-logo.jpg"
                alt="Castle Keys Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain bg-white rounded-lg p-1"
              />
              <span className="font-serif text-xl font-semibold">
                Castle Keys of Texas
              </span>
            </Link>
            <p className="mt-4 text-white/70 leading-relaxed max-w-md">
              Helping property owners in the Greater Houston Area lease their homes through a tailored master lease structure.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-5 w-5 text-lavender" />
                <a href="tel:281-380-2128" className="hover:text-white transition-colors">
                  281-380-2128
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="h-5 w-5 text-lavender flex-shrink-0 mt-0.5" />
                <span>330 Rayford Rd., #146, Spring, TX 77386</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Area</h3>
            <ul className="space-y-2 text-white/70">
              <li>Houston</li>
              <li>Spring</li>
              <li>The Woodlands</li>
              <li>Conroe</li>
              <li>Tomball</li>
              <li>Surrounding Areas</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} Castle Keys of Texas LLC. All rights reserved.
            </p>
          </div>
          <p className="mt-4 text-xs text-white/50 leading-relaxed max-w-3xl">
            Information on this website is for general informational purposes only and does not constitute legal or tax advice. Please consult with appropriate professionals for advice specific to your situation.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Shield, Users, MapPin } from "lucide-react"

const trustIndicators = [
  { icon: Users, text: "Highly screened occupant tenants" },
  { icon: Shield, text: "Tailored lease terms" },
  { icon: MapPin, text: "Serving the Greater Houston Area" },
]

export function Hero() {
  return (
    <section id="home" className="relative bg-lavender-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B2E83' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-dark leading-tight text-balance">
              Rent Your House To Us Today
            </h1>
            <p className="mt-6 text-xl text-charcoal/80 font-medium">
              A safer, smarter way to lease your property in the Greater Houston Area.
            </p>
            <p className="mt-4 text-base text-charcoal/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Castle Keys of Texas helps property owners lease their homes through a tailored master lease structure designed for long-term occupancy and highly screened occupant tenants.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-purple-cta hover:bg-purple-dark text-white rounded-full px-8 text-base shadow-lg shadow-purple-cta/25"
              >
                <Link href="#contact">Get a Free Rental Analysis</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-purple-dark text-purple-dark hover:bg-purple-dark hover:text-white rounded-full px-8 text-base"
              >
                <Link href="tel:281-380-2128" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 281-380-2128
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-dark/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doorsteps-qU9HZGfYG5IiMJD0Xkvc6vemaBp5o9.jpg"
                alt="Welcoming home entrance with craftsman door"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/20 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lavender/30 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-cta/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {trustIndicators.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-border"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-lavender-light rounded-lg flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-purple-dark" />
                </div>
                <span className="text-sm font-medium text-charcoal">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

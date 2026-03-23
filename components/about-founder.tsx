import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export function AboutFounder() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[2/3] max-h-[min(85vh,720px)] mx-auto lg:mx-0">
              <Image
                src="/images/benita-stanford-founder.jpg"
                alt="Benita Stanford, founder of Castle Keys of Texas"
                width={800}
                height={1200}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
            {/* Quote Card */}
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-white rounded-xl shadow-lg p-5 max-w-xs border border-gray-border">
              <Quote className="h-8 w-8 text-lavender mb-2" />
              <p className="text-sm text-charcoal/80 italic leading-relaxed">
                &ldquo;Experience taught me that better systems create better outcomes for everyone.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-purple-dark">Benita Stanford</p>
              <p className="text-xs text-charcoal/60">Founder, Castle Keys of Texas</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-dark text-balance">
              Meet the Founder
            </h2>
            <div className="mt-6 space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                Benita Stanford has been investing in real estate since 2005. After learning the realities of tenant management the hard way through evictions and property damage, she looked for a better system for managing single-family rental properties.
              </p>
              <p>
                She improved her results through better tenant incentives, stronger lease structures, and highly selective occupant screening. Master leasing became the framework that aligned best with her long-term approach.
              </p>
              <p>
                Today, Castle Keys of Texas uses that experience to help owners create a smarter leasing structure with carefully screened occupant tenants. Our approach is built on real-world lessons learned over nearly two decades of hands-on property ownership.
              </p>
            </div>

            <div className="mt-8">
              <Button 
                asChild
                size="lg"
                className="bg-purple-cta hover:bg-purple-dark text-white rounded-full px-8"
              >
                <Link href="#contact">Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

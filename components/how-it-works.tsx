import Image from "next/image"
import { HashSectionLink } from "@/components/hash-section-link"
import { Button } from "@/components/ui/button"
import { Send, Search, FileCheck, Key } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Submit Your Property",
    description: "Fill out our simple property submission form with basic details about your house and your goals as an owner.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Review Your Property",
    description: "Our team evaluates your property and discusses your specific needs, timeline, and desired lease terms.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Receive a Tailored Proposal",
    description: "We propose a customized master lease structure designed around your property and ownership goals.",
  },
  {
    number: "04",
    icon: Key,
    title: "We Lease & Place Tenants",
    description: "Once agreed, we become the master tenant and place highly screened occupant tenants in your property.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-lavender-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hand%20with%20keys-kA59firuqjGm6Gio6MTbbeWlKWNtqh.jpg"
                alt="Hand holding house keys"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-purple-cta/10 rounded-2xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-dark text-balance">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              Our simple four-step process makes it easy to get started with a master lease arrangement.
            </p>

            {/* Steps */}
            <div className="mt-10 space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-border">
                      <step.icon className="h-6 w-6 text-purple-cta" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-lavender">{step.number}</span>
                      <h3 className="text-lg font-semibold text-purple-dark">{step.title}</h3>
                    </div>
                    <p className="mt-1 text-charcoal/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-purple-cta hover:bg-purple-dark text-white rounded-full px-8"
              >
                <HashSectionLink href="#contact">Get Started Today</HashSectionLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

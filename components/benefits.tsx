import Image from "next/image"
import { Check } from "lucide-react"

const benefits = [
  "Tailored lease structures based on your specific needs",
  "Predictable monthly income structure",
  "Reduced vacancy through long-term occupancy focus",
  "Careful occupant screening process",
  "Proactive property oversight",
  "Less day-to-day landlord stress",
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-lavender-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-dark text-balance">
              Benefits for Property Owners
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              Our master lease structure is designed with property owners in mind, providing peace of mind and consistent returns.
            </p>

            {/* Benefits List */}
            <div className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-cta rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-charcoal leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/keys%20and%20house%20model%20in%20background-t2NvUiwzvc18LsggWhBkVnQvoOOq32.jpg"
                alt="Keys with house model in background"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-border">
              <div className="text-3xl font-bold text-purple-dark">3+</div>
              <div className="text-sm text-charcoal/70">Year minimum<br />lease structure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

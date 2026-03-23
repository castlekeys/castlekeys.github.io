import { Shield, Sliders, TrendingUp, Clock, UserCheck, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "A Safer, Smarter Way to Rent",
    description: "Our master lease structure provides an extra layer of protection between you and typical landlord headaches.",
  },
  {
    icon: Sliders,
    title: "No One-Size-Fits-All Structure",
    description: "Every property and owner is different. We tailor lease terms to fit your specific situation and goals.",
  },
  {
    icon: TrendingUp,
    title: "More Consistent Monthly Income",
    description: "Our structure is designed to provide reliable, predictable rental income month after month.",
  },
  {
    icon: Clock,
    title: "Long-Term Occupancy Focus",
    description: "We prioritize stability and longer-term occupancy that can help reduce turnover and vacancy.",
  },
  {
    icon: UserCheck,
    title: "Highly Screened Occupant Tenants",
    description: "We select occupant tenants on a best-qualified basis with thorough income, employment, and background checks.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurial Problem Solving",
    description: "We approach every challenge with creative, business-minded solutions that benefit all parties.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-dark text-balance">
            Why Choose Castle Keys
          </h2>
          <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
            We understand the challenges property owners face. Our approach is built on experience, trust, and a commitment to your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 lg:p-8 bg-lavender-light/50 rounded-2xl border border-gray-border hover:border-lavender hover:shadow-lg hover:shadow-lavender/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-purple-cta group-hover:shadow-purple-cta/25 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-purple-dark group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-purple-dark">
                {feature.title}
              </h3>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is a master lease?",
    answer: "A master lease is an arrangement where Castle Keys of Texas leases your property directly from you, becoming your tenant. We then sublease the property to carefully screened occupant tenants. This structure provides you with a single, reliable tenant (us) while we handle the day-to-day tenant relationship.",
  },
  {
    question: "Who pays the rent to the property owner?",
    answer: "Castle Keys of Texas LLC pays rent directly to you, the property owner. Rent is generally deposited by the 5th of each month and guaranteed by the 10th of each month, providing you with predictable, reliable income.",
  },
  {
    question: "How are repairs handled?",
    answer: "Minor repairs up to $75 are handled by the occupant tenant using an approved contractor list we provide. For emergency repairs, Castle Keys may approve expenses up to $500. Larger repairs are coordinated with you, the property owner, to ensure proper authorization and quality work.",
  },
  {
    question: "Who is the master tenant?",
    answer: "Castle Keys of Texas LLC is the master tenant. We sign the lease directly with you and become responsible for the property and rent payments. This gives you a single point of contact and accountability rather than dealing with individual tenants directly.",
  },
  {
    question: "Who is the occupant tenant?",
    answer: "The occupant tenant is the person or family who actually lives in and cares for the property day-to-day. They have a sublease agreement with Castle Keys of Texas and are carefully vetted through our screening process.",
  },
  {
    question: "How are occupant tenants selected?",
    answer: "We select occupant tenants on a best-qualified basis, not first-come, first-served. Our thorough screening process includes income verification, employment verification, and comprehensive criminal background checks to ensure quality, responsible tenants for your property.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-dark text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
            Get answers to common questions about our master lease structure and how we work with property owners.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-lavender-light/50 rounded-xl border border-gray-border px-6 data-[state=open]:bg-lavender-light"
              >
                <AccordionTrigger className="text-left font-semibold text-purple-dark hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowItWorks } from "@/components/how-it-works"
import { AboutFounder } from "@/components/about-founder"
import { Benefits } from "@/components/benefits"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <AboutFounder />
      <Benefits />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}

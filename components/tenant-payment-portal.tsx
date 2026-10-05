import Link from "next/link"
import { CreditCard, ExternalLink, Lock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SWIPESIMPLE_PAYMENT_URL } from "@/lib/site"

const paymentNotes = [
  "Use the email and name on your lease when completing payment.",
  "Enter your rental amount in the amount field before continuing.",
  "Payments are processed securely through SwipeSimple.",
]

export function TenantPaymentPortal() {
  return (
    <section className="py-20 lg:py-28 bg-lavender-light relative overflow-hidden min-h-[calc(100vh-5rem)]">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B2E83' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-ink text-balance">
              Tenant Payment Portal
            </h1>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              Submit your rental payment securely online. You will complete checkout on our
              SwipeSimple payment page. Castle Keys of Texas does not store card details on
              this website.
            </p>

            <ul className="mt-10 space-y-4">
              {paymentNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-cta rounded-full flex items-center justify-center mt-0.5">
                    <Shield className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-charcoal/80">{note}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-sm text-charcoal/60">
              Questions about your payment? Call{" "}
              <a
                href="tel:281-380-2128"
                className="font-medium text-purple-cta hover:text-purple-ink transition-colors"
              >
                281-380-2128
              </a>
              .
            </p>
          </div>

          <div className="bg-surface rounded-2xl shadow-xl shadow-purple-dark/10 border border-gray-border p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-lavender-light rounded-xl flex items-center justify-center border border-gray-border">
                <CreditCard className="h-7 w-7 text-purple-cta" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-purple-ink">Make a Payment</h2>
                <p className="text-sm text-charcoal/60 mt-1">Castle Keys of Texas: Rental Payments</p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-xl bg-lavender-light/80 border border-gray-border p-4">
              <Lock className="h-5 w-5 text-purple-cta flex-shrink-0 mt-0.5" />
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Continue to SwipeSimple to enter your payment amount, contact details, and
                card information on a PCI-compliant checkout page.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-8 w-full bg-purple-cta hover:bg-purple-dark text-white rounded-full py-6 text-base font-semibold shadow-lg shadow-purple-cta/25"
            >
              <a
                href={SWIPESIMPLE_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                Open Secure Payment Form
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>

            <p className="mt-4 text-center text-xs text-charcoal/50">
              Prefer to stay on this tab?{" "}
              <Link
                href={SWIPESIMPLE_PAYMENT_URL}
                className="text-purple-cta hover:text-purple-ink font-medium underline-offset-2 hover:underline"
              >
                Open payment form here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

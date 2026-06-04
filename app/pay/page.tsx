import type { Metadata } from "next"
import { Header } from "@/components/header"
import { TenantPaymentPortal } from "@/components/tenant-payment-portal"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Tenant Payment Portal | Castle Keys of Texas",
  description:
    "Pay rent securely online for Castle Keys of Texas properties through our SwipeSimple payment portal.",
}

export default function PayPage() {
  return (
    <main>
      <Header />
      <TenantPaymentPortal />
      <Footer />
    </main>
  )
}

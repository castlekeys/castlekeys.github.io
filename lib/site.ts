export const SWIPESIMPLE_PAYMENT_URL =
  "https://swipesimple.com/links/lnk_c7bd5a73ead289abaac1460d186cddf0"

export const PAYMENT_PAGE_PATH = "/pay"

export const navSectionLinks = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const

export type NavSectionHref = (typeof navSectionLinks)[number]["href"]

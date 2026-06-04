"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HashSectionLink } from "@/components/hash-section-link"
import type { NavSectionHref } from "@/lib/site"

type Props = Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: NavSectionHref
}

/** Hash links on the home page; `/#section` when on other routes (e.g. /pay). */
export function SectionLink({ href, ...props }: Props) {
  const pathname = usePathname()

  if (pathname === "/") {
    return <HashSectionLink href={href} {...props} />
  }

  return <Link href={`/${href}`} {...props} />
}

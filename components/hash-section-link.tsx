"use client"

import Link from "next/link"
import { forwardRef } from "react"

type Props = Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: `#${string}`
}

/**
 * Same-page hash links: native behavior does not scroll again if the URL
 * already has that hash. This always scrolls the target into view on click.
 */
export const HashSectionLink = forwardRef<HTMLAnchorElement, Props>(
  function HashSectionLink({ href, onClick, ...props }, ref) {
    const id = href.slice(1)
    return (
      <Link
        ref={ref}
        href={href}
        scroll={false}
        {...props}
        onClick={(e) => {
          onClick?.(e)
          if (e.defaultPrevented) return
          const el = document.getElementById(id)
          if (el) {
            e.preventDefault()
            el.scrollIntoView({ behavior: "smooth", block: "start" })
            window.history.replaceState(null, "", href)
          }
        }}
      />
    )
  }
)

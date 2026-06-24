"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links = [
  { href: "/animals", label: "Animals" },
  { href: "/blog", label: "Blog" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-linen/95 backdrop-blur-sm border-b border-cotton">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5 group">
          <span className="font-display italic text-2xl font-semibold text-ink group-hover:text-sage transition-colors">
            Jinx
          </span>
          <span className="font-sans text-sm font-medium text-ink/60 ml-1.5 tracking-wide">
            Pet Hub
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden sm:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-sans text-sm tracking-wide transition-colors hover:text-sage ${
                  pathname.startsWith(href) ? "text-sage font-medium" : "text-ink/60"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="sm:hidden p-2 text-ink/60 hover:text-ink transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-linen border-t border-cotton px-5 pb-5">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 text-sm font-sans transition-colors hover:text-sage ${
                    pathname.startsWith(href) ? "text-sage font-medium" : "text-ink/60"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

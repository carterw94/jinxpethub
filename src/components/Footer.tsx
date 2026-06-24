import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-ink text-linen/70 mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="font-display italic text-xl font-semibold text-linen">Jinx</span>
              <span className="font-sans text-xs font-medium text-linen/50 ml-1">Pet Hub</span>
            </div>
            <p className="text-sm leading-relaxed text-linen/50 max-w-xs">
              Education and care for small animals, with love.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-gold/80 tracking-widest uppercase mb-4">Explore</p>
            <ul className="space-y-2.5">
              {[
                { href: "/animals/cats", label: "Cats" },
                { href: "/animals/hamsters", label: "Hamsters" },
                { href: "/animals/guinea-pigs", label: "Guinea Pigs" },
                { href: "/animals/rabbits", label: "Rabbits" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-linen/50 hover:text-linen transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs text-gold/80 tracking-widest uppercase mb-4">More</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className="text-sm text-linen/50 hover:text-linen transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/animals" className="text-sm text-linen/50 hover:text-linen transition-colors">
                  All Animals
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-linen/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-linen/30">
            © {new Date().getFullYear()} Jinx Pet Hub
          </p>
          <p className="font-mono text-xs text-linen/20">jinxpethub.wiki</p>
        </div>
      </div>
    </footer>
  )
}

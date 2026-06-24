import Link from "next/link"
import { animals } from "@/data/animals"

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-lg" aria-hidden="true">🐾</span>
              <span className="font-display text-lg font-semibold text-ink">Jinx Pet Hub</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Education and care for small animals.
            </p>
          </div>
          <div>
            <p className="font-display font-semibold text-ink mb-4">Animals</p>
            <ul className="space-y-2">
              {animals.map((a) => (
                <li key={a.id}>
                  <Link
                    href={`/animals/${a.slug}`}
                    className="text-sm text-muted hover:text-ink transition-colors flex items-center gap-1.5"
                  >
                    <span>{a.emoji}</span> {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display font-semibold text-ink mb-4">More</p>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted hover:text-ink transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/animals" className="text-sm text-muted hover:text-ink transition-colors">
                  All Animals
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-border text-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Jinx Pet Hub · jinxpethub.us
          </p>
        </div>
      </div>
    </footer>
  )
}

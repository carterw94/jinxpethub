import { AnimalLink } from "@/types"

export default function LinkCard({ link }: { link: AnimalLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 py-4 border-b border-cotton last:border-0 hover:bg-paper -mx-2 px-2 rounded transition-colors"
    >
      <div className="mt-0.5 flex-shrink-0 w-5 h-5 text-sage/40 group-hover:text-sage transition-colors">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
      <div>
        <p className="text-sm font-medium text-ink group-hover:text-sage transition-colors leading-snug">
          {link.title}
        </p>
        <p className="text-xs text-ink/45 mt-0.5 leading-relaxed">{link.description}</p>
      </div>
    </a>
  )
}

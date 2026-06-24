import { AnimalLink } from "@/types"

export default function LinkCard({ link, accentColor }: { link: AnimalLink; accentColor?: string }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 p-4 rounded-xl bg-white border border-border hover:border-[#7C5CFC]/30 hover:shadow-sm transition-all"
    >
      <div
        className="mt-0.5 w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-xs font-bold transition-opacity group-hover:opacity-90"
        style={{ backgroundColor: accentColor ?? "#7C5CFC" }}
        aria-hidden="true"
      >
        ↗
      </div>
      <div>
        <p className="text-sm font-semibold text-ink group-hover:text-[#7C5CFC] transition-colors">
          {link.title}
        </p>
        <p className="text-xs text-muted mt-0.5 leading-relaxed">{link.description}</p>
      </div>
    </a>
  )
}

import Link from "next/link"
import { Animal } from "@/types"

interface Props {
  animal: Animal
  index?: number
}

export default function AnimalCard({ animal, index = 0 }: Props) {
  return (
    <Link href={`/animals/${animal.slug}`} className="group block">
      <article
        className="card-hover relative overflow-hidden rounded-xl bg-paper border border-cotton h-full"
        style={{ animationDelay: `${index * 70}ms` }}
      >
        {/* Big emoji watermark */}
        <div
          className="absolute bottom-0 right-0 text-[120px] leading-none opacity-[0.07] translate-x-4 translate-y-4 select-none pointer-events-none group-hover:opacity-[0.11] transition-opacity"
          aria-hidden="true"
        >
          {animal.emoji}
        </div>

        <div className="relative p-6 flex flex-col h-full">
          {/* Top: label */}
          <span className="font-mono text-[10px] tracking-[0.18em] text-ink/30 uppercase mb-5 block">
            Companion Animal
          </span>

          {/* Name */}
          <h3 className="font-display text-3xl font-semibold text-ink mb-1 leading-tight group-hover:text-sage transition-colors">
            {animal.name}
          </h3>

          {/* Scientific name */}
          <p className="font-mono text-[11px] text-earth/70 italic mb-4">
            {animal.scientificName}
          </p>

          {/* Tagline */}
          <p className="text-sm text-ink/60 leading-relaxed mb-6">
            {animal.tagline}
          </p>

          {/* Bottom row */}
          <div className="mt-auto flex items-center justify-between">
            {animal.subcategories ? (
              <span className="font-mono text-[10px] text-ink/35 tracking-wide">
                {animal.subcategories.length} breeds
              </span>
            ) : (
              <span />
            )}
            <span className="text-sage text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

import Link from "next/link"
import { Subcategory } from "@/types"

interface Props {
  subcategory: Subcategory
  animalSlug: string
  accentColor: string
  index?: number
}

export default function SubcategoryCard({ subcategory, animalSlug, accentColor, index = 0 }: Props) {
  return (
    <Link href={`/animals/${animalSlug}/${subcategory.slug}`} className="group block">
      <article
        className="card-hover rounded-lg bg-paper border border-cotton p-5"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {/* Colored top bar */}
        <div
          className="h-0.5 w-8 rounded-full mb-4 group-hover:w-full transition-all duration-300"
          style={{ backgroundColor: accentColor }}
          aria-hidden="true"
        />

        <h3 className="font-display text-xl font-semibold text-ink mb-2 leading-tight group-hover:text-sage transition-colors">
          {subcategory.name}
        </h3>
        <p className="text-[13px] text-ink/55 leading-relaxed line-clamp-2">
          {subcategory.description.split(".")[0]}.
        </p>
        <p className="mt-3 font-mono text-[10px] text-sage/70 tracking-wide">
          Learn more →
        </p>
      </article>
    </Link>
  )
}

import Link from "next/link"
import { Subcategory } from "@/types"

interface Props {
  subcategory: Subcategory
  animalSlug: string
  accentColor: string
  index?: number
}

export default function SubcategoryCard({ subcategory, animalSlug, accentColor }: Props) {
  return (
    <Link href={`/animals/${animalSlug}/${subcategory.slug}`} className="group block">
      <article className="card-lift rounded-xl bg-canvas border border-border p-5 h-full">
        {/* Colored top accent bar */}
        <div
          className="h-1 w-10 rounded-full mb-4 group-hover:w-16 transition-all duration-300"
          style={{ backgroundColor: accentColor }}
          aria-hidden="true"
        />
        <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-[#7C5CFC] transition-colors">
          {subcategory.name}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {subcategory.description.split(".")[0]}.
        </p>
        <p
          className="mt-3 text-xs font-bold"
          style={{ color: accentColor }}
        >
          Learn more →
        </p>
      </article>
    </Link>
  )
}

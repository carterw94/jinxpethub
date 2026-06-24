import Link from "next/link"
import { Animal } from "@/types"
import AnimalPhoto from "./AnimalPhoto"

interface Props {
  animal: Animal
  index?: number
}

export default function AnimalCard({ animal }: Props) {
  return (
    <Link href={`/animals/${animal.slug}`} className="group block">
      <article className="card-lift rounded-2xl overflow-hidden bg-white border border-border h-full flex flex-col">
        {/* Photo + colored overlay */}
        <div
          className="h-44 relative overflow-hidden"
          style={{ backgroundColor: animal.color }}
        >
          {animal.image && (
            <AnimalPhoto
              src={animal.image}
              alt={animal.name}
              className="object-cover"
            />
          )}
          {/* Color overlay so the emoji is always readable */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: animal.color + "88" }}
            aria-hidden="true"
          />
          <span
            className="absolute inset-0 flex items-center justify-center text-7xl select-none drop-shadow-md group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          >
            {animal.emoji}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display text-2xl font-semibold text-ink mb-1 group-hover:text-[#7C5CFC] transition-colors">
            {animal.name}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{animal.tagline}</p>
          <div className="flex items-center justify-between mt-auto">
            {animal.subcategories ? (
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: animal.color + "22", color: animal.color }}
              >
                {animal.subcategories.length} breeds
              </span>
            ) : <span />}
            <span
              className="text-sm font-bold group-hover:translate-x-1 transition-transform inline-block"
              style={{ color: animal.color }}
            >
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

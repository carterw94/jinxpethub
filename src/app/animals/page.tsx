import type { Metadata } from "next"
import AnimalCard from "@/components/AnimalCard"
import { animals } from "@/data/animals"

export const metadata: Metadata = {
  title: "Animals",
  description: "Cats, hamsters, guinea pigs, and rabbits — breeds, history, and care.",
}

export default function AnimalsPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-3">
          Animals 🐾
        </h1>
        <p className="text-muted text-lg">
          Pick an animal to explore breeds, history, and care guides.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {animals.map((animal, i) => (
          <AnimalCard key={animal.id} animal={animal} index={i} />
        ))}
      </div>

      <p className="text-center text-sm text-muted mt-12">
        More animals coming soon!
      </p>
    </div>
  )
}

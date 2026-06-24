import type { Metadata } from "next"
import AnimalCard from "@/components/AnimalCard"
import { animals } from "@/data/animals"

export const metadata: Metadata = {
  title: "Animals",
  description: "Explore cats, hamsters, guinea pigs, and rabbits — breeds, history, and care.",
}

export default function AnimalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink relative overflow-hidden">
        <div className="sci-name-ghost absolute bottom-0 right-0 text-[clamp(3rem,10vw,7rem)] translate-x-4 translate-y-4" aria-hidden="true">
          Animalia
        </div>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold/50 mb-6">
            Jinx Pet Hub · Encyclopedia
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light italic text-linen leading-tight">
            Animals
          </h1>
          <p className="text-linen/50 text-sm mt-3 max-w-sm font-sans">
            Select an animal to explore its breeds, history, and care needs.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {animals.map((animal, i) => (
            <AnimalCard key={animal.id} animal={animal} index={i} />
          ))}
        </div>

        <div className="mt-16 py-8 border-t border-cotton">
          <p className="font-mono text-[10px] text-ink/30 tracking-widest uppercase text-center">
            More species coming soon
          </p>
        </div>
      </section>
    </>
  )
}

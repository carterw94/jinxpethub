import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { animals, getAnimal } from "@/data/animals"
import SubcategoryCard from "@/components/SubcategoryCard"
import LinkCard from "@/components/LinkCard"

interface Props {
  params: Promise<{ animal: string }>
}

export async function generateStaticParams() {
  return animals.map((a) => ({ animal: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { animal: slug } = await params
  const animal = getAnimal(slug)
  if (!animal) return {}
  return { title: animal.name, description: animal.description }
}

export default async function AnimalPage({ params }: Props) {
  const { animal: slug } = await params
  const animal = getAnimal(slug)
  if (!animal) notFound()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-ink relative overflow-hidden">
        {/* SIGNATURE ELEMENT: scientific name ghost watermark */}
        <div
          className="sci-name-ghost absolute -bottom-4 right-0 text-[clamp(3.5rem,11vw,8.5rem)] tracking-tight"
          aria-hidden="true"
        >
          {animal.scientificName}
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20">
          {/* Breadcrumb */}
          <nav className="font-mono text-[9px] tracking-[0.18em] uppercase text-linen/30 mb-8 flex items-center gap-2">
            <Link href="/animals" className="hover:text-gold/70 transition-colors">Animals</Link>
            <span>/</span>
            <span className="text-linen/50">{animal.name}</span>
          </nav>

          {/* Name */}
          <h1 className="font-display text-[clamp(3rem,9vw,6rem)] font-light italic text-linen leading-none mb-3">
            {animal.name}
          </h1>

          {/* Scientific name as readable label */}
          <p className="font-mono text-xs text-gold/50 italic tracking-wide mb-6">
            {animal.scientificName}
          </p>

          <p className="font-sans text-linen/55 text-base leading-relaxed max-w-lg">
            {animal.tagline}
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* ── Content ──────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main column */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <section>
              <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-4">Overview</p>
              <p className="text-ink/75 leading-relaxed text-[15px]">{animal.description}</p>
            </section>

            {/* Divider */}
            <div className="h-px bg-cotton" />

            {/* History */}
            <section>
              <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-4">History</p>
              <p className="text-ink/75 leading-relaxed text-[15px]">{animal.history}</p>
            </section>

            {/* Care */}
            {animal.care && (
              <>
                <div className="h-px bg-cotton" />
                <section>
                  <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-4">Care Summary</p>
                  <div className="bg-ink text-linen/75 rounded-xl p-6 text-[14px] leading-relaxed border border-ink-light">
                    {animal.care}
                  </div>
                </section>
              </>
            )}

            {/* Breeds/types */}
            {animal.subcategories && animal.subcategories.length > 0 && (
              <>
                <div className="h-px bg-cotton" />
                <section>
                  <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-2">
                    Breeds & Types
                  </p>
                  <p className="text-sm text-ink/40 font-sans mb-6">
                    Select a card to dive deeper.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {animal.subcategories.map((sub, i) => (
                      <SubcategoryCard
                        key={sub.id}
                        subcategory={sub}
                        animalSlug={animal.slug}
                        accentColor={animal.color}
                        index={i}
                      />
                    ))}
                  </div>
                </section>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-24">
              <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-5">
                Helpful Resources
              </p>
              <div>
                {animal.links.map((link) => (
                  <LinkCard key={link.url} link={link} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

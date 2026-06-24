import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { animals, getAnimal, getSubcategory } from "@/data/animals"
import LinkCard from "@/components/LinkCard"

interface Props {
  params: Promise<{ animal: string; subcategory: string }>
}

export async function generateStaticParams() {
  const paths: { animal: string; subcategory: string }[] = []
  for (const animal of animals) {
    for (const sub of animal.subcategories ?? []) {
      paths.push({ animal: animal.slug, subcategory: sub.slug })
    }
  }
  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { animal: animalSlug, subcategory: subSlug } = await params
  const sub = getSubcategory(animalSlug, subSlug)
  if (!sub) return {}
  return { title: sub.name, description: sub.description }
}

export default async function SubcategoryPage({ params }: Props) {
  const { animal: animalSlug, subcategory: subSlug } = await params
  const animal = getAnimal(animalSlug)
  const sub = getSubcategory(animalSlug, subSlug)
  if (!animal || !sub) notFound()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-ink relative overflow-hidden">
        <div
          className="sci-name-ghost absolute -bottom-2 right-0 text-[clamp(3rem,9vw,7rem)]"
          aria-hidden="true"
        >
          {sub.name}
        </div>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-18">
          <nav className="font-mono text-[9px] tracking-[0.18em] uppercase text-linen/30 mb-8 flex items-center gap-2 flex-wrap">
            <Link href="/animals" className="hover:text-gold/70 transition-colors">Animals</Link>
            <span>/</span>
            <Link href={`/animals/${animal.slug}`} className="hover:text-gold/70 transition-colors">
              {animal.name}
            </Link>
            <span>/</span>
            <span className="text-linen/50">{sub.name}</span>
          </nav>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-light italic text-linen leading-none mb-3">
            {sub.name}
          </h1>
          <p className="font-mono text-xs text-gold/40 tracking-wide italic">
            {animal.name} · {animal.scientificName}
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* ── Content ──────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">

            <section>
              <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-4">About</p>
              <p className="text-ink/75 leading-relaxed text-[15px]">{sub.description}</p>
            </section>

            <div className="h-px bg-cotton" />

            <section>
              <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-4">History</p>
              <p className="text-ink/75 leading-relaxed text-[15px]">{sub.history}</p>
            </section>

            {(sub.temperament || sub.care) && (
              <>
                <div className="h-px bg-cotton" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sub.temperament && (
                    <div className="bg-paper border border-cotton rounded-xl p-5">
                      <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-3">
                        Temperament
                      </p>
                      <p className="text-[13px] text-ink/65 leading-relaxed">{sub.temperament}</p>
                    </div>
                  )}
                  {sub.care && (
                    <div className="bg-paper border border-cotton rounded-xl p-5">
                      <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-3">
                        Care Notes
                      </p>
                      <p className="text-[13px] text-ink/65 leading-relaxed">{sub.care}</p>
                    </div>
                  )}
                </div>
              </>
            )}

            {sub.funFact && (
              <>
                <div className="h-px bg-cotton" />
                <blockquote className="border-l-2 border-gold pl-6">
                  <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-3">
                    Did you know
                  </p>
                  <p className="font-display text-xl italic font-light text-ink leading-relaxed">
                    {sub.funFact}
                  </p>
                </blockquote>
              </>
            )}

            <div className="pt-2">
              <Link
                href={`/animals/${animal.slug}`}
                className="font-mono text-[10px] tracking-widest uppercase text-ink/35 hover:text-sage transition-colors"
              >
                ← Back to {animal.name}
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-24 space-y-8">
              <div>
                <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-5">
                  Resources
                </p>
                {sub.links.map((link) => (
                  <LinkCard key={link.url} link={link} />
                ))}
              </div>

              {animal.subcategories && animal.subcategories.length > 1 && (
                <div>
                  <p className="font-mono text-[9px] text-gold/70 tracking-[0.2em] uppercase mb-4">
                    Other {animal.name} Breeds
                  </p>
                  <ul className="space-y-2">
                    {animal.subcategories
                      .filter((s) => s.slug !== sub.slug)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/animals/${animal.slug}/${s.slug}`}
                            className="text-sm text-ink/50 hover:text-sage transition-colors font-sans"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

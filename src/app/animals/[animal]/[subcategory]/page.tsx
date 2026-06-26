import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { animals, getAnimal, getSubcategory } from "@/data/animals"
import LinkCard from "@/components/LinkCard"
import Image from "next/image"

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
      <section
        className="py-16 text-center"
        style={{ backgroundColor: animal.color + "22" }}
      >
        <div className="text-5xl mb-3 select-none" aria-hidden="true">{animal.emoji}</div>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-2">
          {sub.name}
        </h1>
        <nav className="flex items-center justify-center gap-1.5 text-xs font-semibold text-muted flex-wrap mt-3">
          <Link href="/animals" className="hover:text-ink transition-colors">Animals</Link>
          <span>/</span>
          <Link href={`/animals/${animal.slug}`} className="hover:text-ink transition-colors">
            {animal.name}
          </Link>
          <span>/</span>
          <span className="text-ink">{sub.name}</span>
        </nav>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-3">About</h2>
              <p className="text-muted leading-relaxed">{sub.description}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-3">History</h2>
              <p className="text-muted leading-relaxed">{sub.history}</p>
            </section>

            {(sub.temperament || sub.care) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sub.temperament && (
                  <div
                    className="rounded-xl p-5 text-sm leading-relaxed"
                    style={{ backgroundColor: animal.color + "18" }}
                  >
                    <p className="font-display font-semibold text-ink mb-2">🧠 Temperament</p>
                    <p className="text-muted">{sub.temperament}</p>
                  </div>
                )}
                {sub.care && (
                  <div
                    className="rounded-xl p-5 text-sm leading-relaxed"
                    style={{ backgroundColor: animal.color + "18" }}
                  >
                    <p className="font-display font-semibold text-ink mb-2">🏠 Care Notes</p>
                    <p className="text-muted">{sub.care}</p>
                  </div>
                )}
              </div>
            )}

            {sub.funFact && (
              <div
                className="rounded-2xl p-6 border-2"
                style={{ borderColor: animal.color, backgroundColor: animal.color + "10" }}
              >
                <p className="font-display font-semibold text-ink mb-2">✨ Fun Fact</p>
                <p className="text-muted leading-relaxed">{sub.funFact}</p>
              </div>
            )}

            <Link
              href={`/animals/${animal.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-muted hover:text-ink transition-colors"
            >
              ← Back to {animal.name}
            </Link>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-24 space-y-6">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink mb-3">Resources</h2>
                <div className="space-y-2">
                  {sub.links.map((link) => (
                    <LinkCard key={link.url} link={link} accentColor={animal.color} />
                  ))}
                </div>
              </div>

              {animal.subcategories && animal.subcategories.length > 1 && (
                <div>
                  <h3 className="font-display font-semibold text-ink mb-3">
                    Other {animal.name} breeds
                  </h3>
                  <ul className="space-y-2">
                    {animal.subcategories
                      .filter((s) => s.slug !== sub.slug)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/animals/${animal.slug}/${s.slug}`}
                            className="text-sm text-muted hover:text-ink transition-colors font-semibold"
                          >
                            {s.name} →
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              {/* Photo(s) */}
              {sub.image && (
                <div className="relative h-48 rounded-2xl overflow-hidden border-2 border-border">
                  <Image
                    src={sub.image}
                    alt={sub.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

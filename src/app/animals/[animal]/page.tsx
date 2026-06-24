import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { animals, getAnimal } from "@/data/animals"
import SubcategoryCard from "@/components/SubcategoryCard"
import LinkCard from "@/components/LinkCard"
import AnimalPhoto from "@/components/AnimalPhoto"

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
      {/* ── Colorful hero ──────────────────────────────── */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{ backgroundColor: animal.color }}
      >
        {/* Background photo */}
        {animal.image && (
          <AnimalPhoto
            src={animal.image}
            alt={animal.name}
            className="object-cover opacity-20"
            priority
          />
        )}
        {/* Big emoji — the hero */}
        <div className="relative z-10 text-[6rem] sm:text-[8rem] leading-none mb-4 select-none" aria-hidden="true">
          {animal.emoji}
        </div>
        <h1 className="relative z-10 font-display text-4xl sm:text-5xl font-semibold text-white mb-2">
          {animal.name}
        </h1>
        <p className="relative z-10 text-white/75 text-base max-w-md mx-auto px-5">
          {animal.tagline}
        </p>

        {/* Breadcrumb */}
        <nav className="relative z-10 mt-6 flex items-center justify-center gap-1.5 text-white/50 text-xs font-semibold">
          <Link href="/animals" className="hover:text-white transition-colors">
            Animals
          </Link>
          <span>/</span>
          <span className="text-white/80">{animal.name}</span>
        </nav>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-3">Overview</h2>
              <p className="text-muted leading-relaxed">{animal.description}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-3">History</h2>
              <p className="text-muted leading-relaxed">{animal.history}</p>
            </section>

            {animal.care && (
              <section>
                <h2 className="font-display text-2xl font-semibold text-ink mb-3">Care</h2>
                <div
                  className="rounded-2xl p-5 text-sm leading-relaxed text-ink/80"
                  style={{ backgroundColor: animal.color + "18" }}
                >
                  {animal.care}
                </div>
              </section>
            )}

            {animal.subcategories && animal.subcategories.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-semibold text-ink mb-2">
                  Breeds & Types
                </h2>
                <p className="text-sm text-muted mb-5">Tap any card to learn more.</p>
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
            )}
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-24">
              <h2 className="font-display text-xl font-semibold text-ink mb-4">Resources</h2>
              <div className="space-y-2">
                {animal.links.map((link) => (
                  <LinkCard key={link.url} link={link} accentColor={animal.color} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

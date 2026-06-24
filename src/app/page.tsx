import Link from "next/link"
import AnimalCard from "@/components/AnimalCard"
import BlogCard from "@/components/BlogCard"
import { animals } from "@/data/animals"
import { getPosts } from "@/lib/posts"

export default function HomePage() {
  const posts = getPosts().slice(0, 3)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* Scientific name ghost watermark */}
        <div
          className="sci-name-ghost absolute bottom-0 right-0 text-[clamp(4rem,14vw,10rem)] leading-none translate-x-4 translate-y-6"
          aria-hidden="true"
        >
          Mesocricetus auratus
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          {/* Eyebrow */}
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-8">
            Pet Education Hub · jinxpethub.wiki
          </p>

          {/* Headline */}
          <h1 className="font-display text-[clamp(3rem,8vw,5.5rem)] font-light italic text-linen leading-[1.05] mb-6 max-w-3xl">
            Know your pet.{" "}
            <span className="text-gold not-italic font-semibold">Love them better.</span>
          </h1>

          <p className="font-sans text-linen/55 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            Education and care for cats, hamsters, guinea pigs, and rabbits — plus a personal
            blog from Jinx the hamster's corner of the world.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/animals"
              className="inline-flex items-center gap-2 bg-sage text-linen text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-sage-light transition-colors"
            >
              Explore Animals
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-linen/20 text-linen/70 text-sm font-medium px-5 py-2.5 rounded-lg hover:border-linen/50 hover:text-linen transition-colors"
            >
              Read the Blog
            </Link>
          </div>

          {/* Animal chips */}
          <div className="flex flex-wrap gap-2 mt-12">
            {animals.map((a) => (
              <Link
                key={a.id}
                href={`/animals/${a.slug}`}
                className="font-mono text-[10px] tracking-widest uppercase text-linen/30 border border-linen/10 px-3 py-1.5 rounded hover:text-gold/80 hover:border-gold/30 transition-colors"
              >
                {a.emoji} {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gold divider ─────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* ── Animals Grid ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-18">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold italic text-ink">
              Animals
            </h2>
            <p className="font-sans text-sm text-ink/45 mt-1">
              Breeds, history, and care — all in one place.
            </p>
          </div>
          <Link
            href="/animals"
            className="hidden sm:block font-mono text-[10px] text-sage/70 tracking-widest uppercase hover:text-sage transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {animals.map((animal, i) => (
            <AnimalCard key={animal.id} animal={animal} index={i} />
          ))}
        </div>
      </section>

      {/* ── Feature strip ────────────────────────────────── */}
      <section className="bg-ink/5 border-y border-cotton">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              label: "Education",
              title: "Grounded in science",
              body: "Species histories, behavioral research, and evidence-backed care for every animal we cover.",
            },
            {
              label: "Resources",
              title: "Curated links",
              body: "Hand-picked links to veterinary universities, welfare organizations, and trusted breed clubs.",
            },
            {
              label: "Blog",
              title: "Life with Jinx",
              body: "A personal blog following Jinx the Syrian hamster — photos, updates, and small-animal musings.",
            },
          ].map(({ label, title, body }) => (
            <div key={title}>
              <p className="font-mono text-[9px] text-gold tracking-[0.2em] uppercase mb-3">{label}</p>
              <h3 className="font-display text-xl font-semibold italic text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink/55 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────── */}
      {posts.length > 0 && (
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-18">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold italic text-ink">
                From the Blog
              </h2>
              <p className="font-sans text-sm text-ink/45 mt-1">
                Adventures with Jinx.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:block font-mono text-[10px] text-sage/70 tracking-widest uppercase hover:text-sage transition-colors"
            >
              All posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

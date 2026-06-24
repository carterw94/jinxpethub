import Link from "next/link"
import AnimalCard from "@/components/AnimalCard"
import BlogCard from "@/components/BlogCard"
import { animals } from "@/data/animals"
import { getPosts } from "@/lib/posts"

export default function HomePage() {
  const posts = getPosts().slice(0, 3)

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-20 text-center">
        {/* Animal emoji row — the visual thesis */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
          {animals.map((a) => (
            <Link
              key={a.id}
              href={`/animals/${a.slug}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: a.color }}
            >
              <span>{a.emoji}</span>
              {a.name}
            </Link>
          ))}
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink leading-tight mb-5">
          Jinx{" "}
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #ff6b6b, #ffab40, #4dd9ac, #b39ddb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Pet Hub
          </span>
        </h1>

        <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed mb-8">
          A sactuary for pet lovers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/animals"
            className="bg-surface text-ink font-bold px-6 py-3 rounded-full hover:bg-border transition-colors text-sm"
          >
            Explore Animals →
          </Link>
          <Link
            href="/blog"
            className="bg-surface text-ink font-bold px-6 py-3 rounded-full hover:bg-border transition-colors text-sm"
          >
            Read the Blog
          </Link>
        </div>
      </section>

      {/* ── Animals Grid ─────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-display text-3xl font-semibold text-ink">Animals</h2>
            <Link href="/animals" className="text-sm font-bold text-muted hover:text-ink transition-colors">
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {animals.map((animal, i) => (
              <AnimalCard key={animal.id} animal={animal} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature strip ────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              emoji: "📚",
              color: "#FF6B6B",
              title: "Real education",
              body: "Species histories, behavioral research, and veterinary-backed care info.",
            },
            {
              emoji: "🔗",
              color: "#FFAB40",
              title: "Trusted links",
              body: "Curated picks from Cornell, RSPCA, House Rabbit Society, and more.",
            },
            {
              emoji: "🐹",
              color: "#4DD9AC",
              title: "Life with Jinx",
              body: "A personal blog following Jinx the hamster — photos, updates, and fun.",
            },
          ].map(({ emoji, color, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border p-6 bg-canvas"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: color + "22" }}
                aria-hidden="true"
              >
                {emoji}
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────── */}
      {posts.length > 0 && (
        <section className="bg-surface py-16">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-display text-3xl font-semibold text-ink">From the Blog</h2>
              <Link href="/blog" className="text-sm font-bold text-muted hover:text-ink transition-colors">
                All posts →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

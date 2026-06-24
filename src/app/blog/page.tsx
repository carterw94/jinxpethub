import type { Metadata } from "next"
import { getPosts } from "@/lib/posts"
import BlogCard from "@/components/BlogCard"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates, photos, and adventures from Jinx the hamster.",
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <>
      {/* Hero */}
      <section className="bg-ink relative overflow-hidden">
        <div className="sci-name-ghost absolute bottom-0 right-0 text-[clamp(3rem,9vw,7rem)] translate-y-4" aria-hidden="true">
          Mesocricetus auratus
        </div>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold/50 mb-6">
            Jinx Pet Hub · Journal
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-light italic text-linen leading-none mb-3">
            The Blog
          </h1>
          <p className="font-sans text-linen/45 text-sm mt-3 max-w-sm">
            Adventures, photos, and updates from Jinx and friends.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Posts */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        {posts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-3xl italic text-ink/30 mb-3">Nothing here yet.</p>
            <p className="font-mono text-[10px] text-ink/25 tracking-widest uppercase">
              Posts will appear here once added to data/posts.json
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

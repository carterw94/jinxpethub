import type { Metadata } from "next"
import { getPosts } from "@/lib/posts"
import BlogCard from "@/components/BlogCard"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates and photos from Jinx the hamster.",
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
      <div className="mb-10">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-3">
          Blog 🐹
        </h1>
        <p className="text-muted text-lg">Adventures and updates from Jinx and friends.</p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-border py-24 text-center">
          <p className="text-5xl mb-4">✏️</p>
          <p className="font-display text-2xl font-semibold text-ink mb-2">No posts yet</p>
          <p className="text-sm text-muted">
            Add entries to <code className="bg-surface px-1.5 py-0.5 rounded text-xs">data/posts.json</code> to get started.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}

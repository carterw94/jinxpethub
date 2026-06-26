import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getPosts, getPost } from "@/lib/posts"

export const dynamic = "force-dynamic"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const all = getPosts()
  const idx = all.findIndex((p) => p.slug === slug)
  const prev = all[idx + 1]
  const next = all[idx - 1]

  return (
    <article className="max-w-2xl mx-auto px-5 sm:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs font-semibold text-muted mb-8">
        <Link href="/blog" className="hover:text-ink transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-ink truncate max-w-[200px]">{post.title}</span>
      </nav>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: "#FFAB40" }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink leading-snug mb-4">
        {post.title}
      </h1>
      <time className="text-sm text-muted font-semibold block mb-10" dateTime={post.date}>
        {date}
      </time>

      {/* Hero image */}
      {post.imagePath && (
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-surface mb-10">
          <Image
            src={post.imagePath}
            alt={post.title}
            fill
            sizes="(max-width: 672px) 100vw, 672px"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="prose-post">
        {post.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Post nav */}
      <div className="mt-14 pt-8 border-t border-border">
        <div className="flex items-start justify-between gap-6">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group flex-1">
              <p className="text-xs font-bold text-muted mb-1">← Previous</p>
              <p className="font-display text-lg font-semibold text-ink group-hover:text-[#7C5CFC] transition-colors line-clamp-2">
                {prev.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}

          {next && (
            <Link href={`/blog/${next.slug}`} className="group flex-1 text-right">
              <p className="text-xs font-bold text-muted mb-1">Next →</p>
              <p className="font-display text-lg font-semibold text-ink group-hover:text-[#7C5CFC] transition-colors line-clamp-2">
                {next.title}
              </p>
            </Link>
          )}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="text-sm font-bold text-muted hover:text-ink transition-colors"
          >
            ← All posts
          </Link>
        </div>
      </div>
    </article>
  )
}

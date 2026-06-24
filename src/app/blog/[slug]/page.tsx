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
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const all = getPosts()
  const idx = all.findIndex((p) => p.slug === slug)
  const prev = all[idx + 1]
  const next = all[idx - 1]

  return (
    <>
      {/* Hero */}
      <section className="bg-ink relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-16">
          <nav className="font-mono text-[9px] tracking-[0.18em] uppercase text-linen/30 mb-8 flex items-center gap-2">
            <Link href="/blog" className="hover:text-gold/60 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-linen/40 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-widest uppercase text-gold/60 border border-gold/20 px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-light italic text-linen leading-tight mb-5">
            {post.title}
          </h1>

          <time className="font-mono text-[10px] text-linen/30 tracking-widest" dateTime={post.date}>
            {date}
          </time>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Body */}
      <article className="max-w-2xl mx-auto px-5 sm:px-8 py-14">
        {/* Hero image */}
        {post.imagePath && (
          <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-cotton mb-12">
            <Image
              src={post.imagePath}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose-article">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Post nav */}
        <div className="mt-16 pt-8 border-t border-cotton">
          <div className="flex items-start justify-between gap-6">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="group flex-1">
                <p className="font-mono text-[9px] tracking-widest uppercase text-ink/30 mb-1">← Previous</p>
                <p className="font-display text-lg italic text-ink group-hover:text-sage transition-colors leading-snug line-clamp-2">
                  {prev.title}
                </p>
              </Link>
            ) : <div className="flex-1" />}

            {next && (
              <Link href={`/blog/${next.slug}`} className="group flex-1 text-right">
                <p className="font-mono text-[9px] tracking-widest uppercase text-ink/30 mb-1">Next →</p>
                <p className="font-display text-lg italic text-ink group-hover:text-sage transition-colors leading-snug line-clamp-2">
                  {next.title}
                </p>
              </Link>
            )}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="font-mono text-[10px] text-ink/30 tracking-widest uppercase hover:text-sage transition-colors"
            >
              ← All posts
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

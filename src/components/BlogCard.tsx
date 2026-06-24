import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/types"

interface Props {
  post: BlogPost
  index?: number
}

export default function BlogCard({ post, index = 0 }: Props) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="card-hover rounded-xl overflow-hidden bg-paper border border-cotton"
        style={{ animationDelay: `${index * 70}ms` }}
      >
        {/* Image */}
        <div className="relative h-52 bg-cotton/60 overflow-hidden">
          {post.imagePath ? (
            <Image
              src={post.imagePath}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-15 select-none" aria-hidden="true">🐹</span>
            </div>
          )}
        </div>

        <div className="p-5">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.tags.map((tag) => (
                <span key={tag} className="font-mono text-[9px] tracking-widest uppercase text-earth/70 bg-cotton/60 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-display text-xl font-semibold text-ink leading-snug mb-2 group-hover:text-sage transition-colors">
            {post.title}
          </h3>
          <p className="text-[13px] text-ink/55 leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <time className="font-mono text-[10px] text-ink/30 tracking-wide" dateTime={post.date}>
            {date}
          </time>
        </div>
      </article>
    </Link>
  )
}

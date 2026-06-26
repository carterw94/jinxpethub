import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/types"

const TAG_COLORS: Record<string, string> = {
  hamster: "#FFAB40",
  jinx: "#FFAB40",
  cat: "#FF6B6B",
  cats: "#FF6B6B",
  rabbit: "#B39DDB",
  rabbits: "#B39DDB",
  "guinea pig": "#4DD9AC",
  welcome: "#7C5CFC",
}

function tagColor(tag: string) {
  return TAG_COLORS[tag.toLowerCase()] ?? "#7C5CFC"
}

export default function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="card-lift rounded-2xl overflow-hidden bg-canvas border border-border h-full flex flex-col"
        style={{ animationDelay: `${index * 60}ms` }}
      >
        {/* Image */}
        <div className="relative h-48 bg-surface overflow-hidden flex-shrink-0">
          {post.imagePath ? (
            <Image
              src={post.imagePath}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-20 select-none" aria-hidden="true">🐹</span>
            </div>
          )}
        </div>

        <div className="p-5 flex flex-col flex-1">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: tagColor(tag) }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-display text-xl font-semibold text-ink mb-2 leading-snug group-hover:text-[#7C5CFC] transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-2 flex-1 mb-3">
            {post.excerpt}
          </p>
          <time className="text-xs text-muted/60 font-semibold" dateTime={post.date}>
            {date}
          </time>
        </div>
      </article>
    </Link>
  )
}

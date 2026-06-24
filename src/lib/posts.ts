import fs from "fs"
import path from "path"
import { BlogPost } from "@/types"

const POSTS_FILE = path.join(process.cwd(), "data", "posts.json")

export function getPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(POSTS_FILE)) return []
    const posts: BlogPost[] = JSON.parse(fs.readFileSync(POSTS_FILE, "utf-8"))
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch {
    return []
  }
}

export function getPost(slug: string): BlogPost | undefined {
  return getPosts().find((p) => p.slug === slug)
}

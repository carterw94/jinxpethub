export interface AnimalLink {
  title: string
  url: string
  description: string
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  description: string
  history: string
  temperament?: string
  care?: string
  image: string
  funFact?: string
  links: AnimalLink[]
}

export interface Animal {
  id: string
  name: string
  slug: string
  emoji: string
  scientificName: string
  tagline: string
  description: string
  history: string
  care?: string
  image: string
  color: string
  links: AnimalLink[]
  subcategories?: Subcategory[]
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  imagePath?: string | null
  tags?: string[]
}

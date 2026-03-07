import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { calculateReadingTime } from './utils'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export interface ArticleMeta {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  readingTime: number
  tags?: string[]
  featured?: boolean
}

export interface Article extends ArticleMeta {
  content: string
}

function getFileSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const readingTime =
    typeof data.readingTime === 'number'
      ? data.readingTime
      : calculateReadingTime(content)

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    category: data.category ?? 'Général',
    excerpt: data.excerpt ?? '',
    readingTime,
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    content,
  }
}

export function getAllArticles(): Article[] {
  return getFileSlugs()
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllArticlesMeta(): ArticleMeta[] {
  return getAllArticles().map(({ content: _content, ...meta }) => meta)
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticlesMeta().filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  )
}

export function getRelatedArticles(
  currentSlug: string,
  category: string,
  limit = 3
): ArticleMeta[] {
  return getAllArticlesMeta()
    .filter((a) => a.slug !== currentSlug && a.category === category)
    .slice(0, limit)
}

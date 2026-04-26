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
  parentTag?: string
  excerpt: string
  readingTime: number
  tags?: string[]
  featured?: boolean
  draft?: boolean
}

export interface Article extends ArticleMeta {
  content: string
}

function getFileSlugs(locale: 'fr' | 'en'): string[] {
  const dir = path.join(CONTENT_DIR, locale)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getArticleBySlug(slug: string, locale: 'fr' | 'en' = 'fr'): Article | null {
  // Try requested locale first, fall back to 'fr'
  const locales: Array<'fr' | 'en'> = locale === 'fr' ? ['fr'] : ['en', 'fr']
  for (const l of locales) {
    const filePath = path.join(CONTENT_DIR, l, `${slug}.mdx`)
    if (!fs.existsSync(filePath)) continue

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
      parentTag: data.parentTag,
      excerpt: data.excerpt ?? '',
      readingTime,
      tags: data.tags ?? [],
      featured: data.featured ?? false,
      draft: data.draft ?? false,
      content,
    }
  }
  return null
}

export function getAllArticles(locale: 'fr' | 'en' = 'fr'): Article[] {
  return getFileSlugs(locale)
    .map((slug) => getArticleBySlug(slug, locale))
    .filter((article): article is Article => article !== null && !article.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllArticlesMeta(locale: 'fr' | 'en' = 'fr'): ArticleMeta[] {
  return getAllArticles(locale).map(({ content: _content, ...meta }) => meta)
}

export function getArticlesByCategory(category: string, locale: 'fr' | 'en' = 'fr'): ArticleMeta[] {
  return getAllArticlesMeta(locale).filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  )
}

export function getRelatedArticles(
  currentSlug: string,
  category: string,
  locale: 'fr' | 'en' = 'fr',
  limit = 3
): ArticleMeta[] {
  return getAllArticlesMeta(locale)
    .filter((a) => a.slug !== currentSlug && a.category === category)
    .slice(0, limit)
}

export function getSeriesNeighbors(
  currentSlug: string,
  seriesCategory: string,
  locale: 'fr' | 'en' = 'fr'
): { prev: ArticleMeta | null; next: ArticleMeta | null; index: number; total: number } {
  const episodes = getAllArticlesMeta(locale)
    .filter((a) =>
      Array.isArray(a.category) ? a.category.includes(seriesCategory) : a.category === seriesCategory
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const index = episodes.findIndex((a) => a.slug === currentSlug)
  if (index === -1) return { prev: null, next: null, index: -1, total: episodes.length }

  return {
    prev: index > 0 ? episodes[index - 1] : null,
    next: index < episodes.length - 1 ? episodes[index + 1] : null,
    index,
    total: episodes.length,
  }
}

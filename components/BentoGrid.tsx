'use client'

import Link from 'next/link'
import type { ArticleMeta } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import ReadingTime from './ReadingTime'

interface BentoGridProps {
  articlesFr: ArticleMeta[]
  articlesEn: ArticleMeta[]
}

export default function BentoGrid({ articlesFr = [], articlesEn = [] }: BentoGridProps) {
  const { t, locale } = useTranslation()
  const articles = locale === 'en' ? articlesEn : articlesFr
  const featuredIndex = articles.findIndex((a) => a.featured)
  const featured = featuredIndex >= 0 ? articles[featuredIndex] : articles[0]
  const rest = featuredIndex >= 0
    ? [...articles.slice(0, featuredIndex), ...articles.slice(featuredIndex + 1)]
    : articles.slice(1)
  const others = rest.slice(0, 2)

  if (!featured) return null

  return (
    <section id="ressources" className="section" style={{ background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--c2)',
                marginBottom: '0.4rem',
              }}
            >
              Blog
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
                {t.blog.latestTitle}
            </h2>
          </div>
          <Link href="/blog" className="btn-ghost">
            {t.blog.allArticles}
          </Link>
        </div>

        {/* Liste numérotée */}
        <div>
          {[featured, ...others].map((article, i) => {
            const isFeatured = i === 0
            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="article-row"
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  gap: '0.5rem 1.25rem',
                  padding: '1.1rem 1rem',
                  margin: '0 -1rem',
                  borderTop: '1px solid var(--border)',
                  borderBottom: i === 2 ? '1px solid var(--border)' : 'none',
                  background: isFeatured ? '#e1f2fd' : 'transparent',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-lora), Georgia, serif',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--c2)',
                    width: '2.5rem',
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{ flex: '1 1 280px', minWidth: 0 }}>
                  <span
                    style={{
                      display: 'block',
                      background: 'var(--grad)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.25rem',
                      width: 'fit-content',
                    }}
                  >
                    {Array.isArray(article.category) ? article.category.join(' · ') : article.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-lora), Georgia, serif',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: 'var(--ink)',
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {article.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                  <time
                    dateTime={article.date}
                    style={{ fontSize: '0.78rem', color: 'var(--muted)' }}
                  >
                    {formatDate(article.date, locale)}
                  </time>
                  <ReadingTime minutes={article.readingTime} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

    </section>
  )
}

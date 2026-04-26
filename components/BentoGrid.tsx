'use client'

import Link from 'next/link'
import type { ArticleMeta } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import ReadingTime from './ReadingTime'

interface BentoGridProps {
  articles: ArticleMeta[]
}

export default function BentoGrid({ articles }: BentoGridProps) {
  const { t, locale } = useTranslation()
  const featuredIndex = articles.findIndex((a) => a.featured)
  const featured = featuredIndex >= 0 ? articles[featuredIndex] : articles[0]
  const rest = featuredIndex >= 0
    ? [...articles.slice(0, featuredIndex), ...articles.slice(featuredIndex + 1)]
    : articles.slice(1)
  const others = rest.slice(0, 4)

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

        {/* Bento grid */}
        <div
          className="bento-grid-inner"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: 0,
            border: '1px solid var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {/* Featured article — spans 2 rows */}
          <Link
            href={`/blog/${featured.slug}`}
            style={{ textDecoration: 'none', gridRow: 'span 2' }}
          >
            <article
              style={{
                height: '100%',
                background: 'var(--ink)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'background 0.3s ease',
              }}
              className="bento-featured"
            >
              {/* Glow effect */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-40%',
                  right: '-20%',
                  width: '320px',
                  height: '320px',
                  background: 'radial-gradient(circle, rgba(77,255,214,0.18) 0%, rgba(24,176,232,0.1) 50%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <span
                style={{
                  display: 'inline-block',
                  background: 'var(--grad)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {Array.isArray(featured.category) ? featured.category.join(' · ') : featured.category}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-lora), Georgia, serif',
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  color: 'white',
                  lineHeight: 1.35,
                  margin: 0,
                  flex: 1,
                }}
              >
                {featured.title}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {featured.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <time dateTime={featured.date} style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
                  {formatDate(featured.date, locale)}
                </time>
                <ReadingTime minutes={featured.readingTime} />
              </div>
              <span
                style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--c1)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                }}
              >
                {t.blog.readArticle}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </article>
          </Link>

          {/* 4 other articles */}
          {others.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{
                textDecoration: 'none',
                borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                borderLeft: '1px solid var(--border)',
              }}
            >
              <article
                style={{
                  padding: '1.5rem',
                  background: 'white',
                  height: '100%',
                  transition: 'background 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
                className="bento-card"
              >
                <span
                  style={{
                    display: 'inline-block',
                    background: 'var(--grad)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {Array.isArray(article.category) ? article.category.join(' · ') : article.category}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-lora), Georgia, serif',
                    fontWeight: 700,
                    fontSize: '0.975rem',
                    color: 'var(--ink)',
                    lineHeight: 1.4,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {article.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  <time dateTime={article.date} style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                    {formatDate(article.date, locale)}
                  </time>
                  <ReadingTime minutes={article.readingTime} />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}

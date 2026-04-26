'use client'

import Link from 'next/link'
import type { ArticleMeta } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import ReadingTime from './ReadingTime'

interface ArticleCardProps {
  article: ArticleMeta
  compact?: boolean
}

export default function ArticleCard({ article, compact = false }: ArticleCardProps) {
  const { t, locale } = useTranslation()

  const categoryDisplay = Array.isArray(article.category)
    ? article.category.join(' · ')
    : article.category === 'Copilot de A à Z'
    ? t.blog.categories.serieCard
    : article.category

  return (
    <Link
      href={`/blog/${article.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
      className={`card${!compact && article.category === 'Copilot de A à Z' ? ' card-series' : ''}`}
    >
      <article style={{ padding: '1.5rem' }}>
        {/* Category badge */}
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
            letterSpacing: '0.05em',
            marginBottom: '0.6rem',
          }}
        >
          {categoryDisplay}
        </span>

        <h3
          style={{
            fontFamily: 'var(--font-lora), Georgia, serif',
            fontWeight: 700,
            fontSize: '1.05rem',
            color: 'var(--ink)',
            lineHeight: 1.4,
            marginBottom: '0.6rem',
          }}
        >
          {article.title}
        </h3>

        {!compact && (
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--muted)',
              lineHeight: 1.6,
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {article.excerpt}
          </p>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <time
            dateTime={article.date}
            style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 500 }}
          >
            {formatDate(article.date, locale)}
          </time>
          <ReadingTime minutes={article.readingTime} />
        </div>
      </article>
    </Link>
  )
}

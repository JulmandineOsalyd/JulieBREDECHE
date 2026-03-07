import Link from 'next/link'
import type { ArticleMeta } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import ReadingTime from './ReadingTime'

interface ArticleCardProps {
  article: ArticleMeta
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
      className="card"
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
          {article.category}
        </span>

        <h3
          style={{
            fontFamily: 'Lora, serif',
            fontWeight: 700,
            fontSize: '1.05rem',
            color: 'var(--ink)',
            lineHeight: 1.4,
            marginBottom: '0.6rem',
          }}
        >
          {article.title}
        </h3>

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
            {formatDate(article.date)}
          </time>
          <ReadingTime minutes={article.readingTime} />
        </div>
      </article>
    </Link>
  )
}

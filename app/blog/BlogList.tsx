'use client'

import { useState } from 'react'
import type { ArticleMeta } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'
import { useTranslation } from '@/lib/i18n'

const CATEGORY_KEYS = ['Tous', 'Copilot de A à Z', 'SharePoint', 'Power Automate', 'PowerApps', 'Copilot Studio'] as const

export default function BlogList({ articles }: { articles: ArticleMeta[] }) {
  const [active, setActive] = useState('Tous')
  const { t } = useTranslation()

  // Map fr category key → display label
  const categoryLabel = (key: string) => {
    if (key === 'Tous') return t.blog.categories.all
    if (key === 'Copilot de A à Z') return t.blog.categories.serie
    return key
  }

  const filtered = (() => {
    const list =
      active === 'Tous'
        ? articles
        : articles.filter((a) =>
            Array.isArray(a.category) ? a.category.includes(active) : a.category === active
          )

    if (active === 'Copilot de A à Z') {
      return [...list].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }

    return list
  })()

  return (
    <>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.6rem' }}>
          {t.blog.label}
        </p>
        <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1rem' }}>
          {t.blog.title}
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '600px' }}>
          {t.blog.description}
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {CATEGORY_KEYS.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            style={
              cat === 'Copilot de A à Z'
                ? {
                    padding: '0.45rem 1.1rem',
                    borderRadius: '99px',
                    border: '1.5px solid transparent',
                    background: active === cat
                      ? 'var(--grad)'
                      : 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5ceae8 0%, #18b0e8 45%, #0f5fad 100%) border-box',
                    color: active === cat ? 'white' : 'var(--ink)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }
                : {
                    padding: '0.45rem 1.1rem',
                    borderRadius: '99px',
                    border: active === cat ? 'none' : '1.5px solid var(--border)',
                    background: active === cat ? 'var(--grad)' : 'white',
                    color: active === cat ? 'white' : 'var(--ink)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }
            }
          >
            {cat === 'Copilot de A à Z' ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '99px',
                  background: active === cat ? 'rgba(255,255,255,0.25)' : 'linear-gradient(135deg, #5ceae8 0%, #18b0e8 45%, #0f5fad 100%)',
                  color: 'white',
                  lineHeight: 1.4,
                }}>{t.blog.categories.serieLabel}</span>
                {categoryLabel(cat)}
              </span>
            ) : categoryLabel(cat)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '3rem 0' }}>
          {t.blog.empty}
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
          className="blog-grid"
        >
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </>
  )
}

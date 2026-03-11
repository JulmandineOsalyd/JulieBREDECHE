'use client'

import { useState } from 'react'
import type { ArticleMeta } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'

const categories = ['Tous', 'Copilot de A à Z','SharePoint', 'Power Automate', 'PowerApps', 'Copilot Studio']

export default function BlogList({ articles }: { articles: ArticleMeta[] }) {
  const [active, setActive] = useState('Tous')

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
      {/* Filters */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {categories.map((cat) => (
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
                }}>SÉRIE</span>
                {cat}
              </span>
            ) : cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '3rem 0' }}>
          Aucun article dans cette catégorie pour l&apos;instant.
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

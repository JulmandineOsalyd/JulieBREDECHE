'use client'

import { useState } from 'react'
import type { ArticleMeta } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'

const categories = ['Tous', 'SharePoint', 'Power Automate', 'Copilot Studio', 'PowerApps']

interface BlogPageClientProps {
  articles: ArticleMeta[]
}

function BlogPageClient({ articles }: BlogPageClientProps) {
  const [active, setActive] = useState('Tous')

  const filtered = active === 'Tous'
    ? articles
    : articles.filter((a) => a.category === active)

  return (
    <>
      {/* Filters */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: '99px',
              border: active === cat ? 'none' : '1.5px solid var(--border)',
              background: active === cat ? 'var(--grad)' : 'white',
              color: active === cat ? 'white' : 'var(--ink)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '3rem 0' }}>
          Aucun article dans cette catégorie pour l&apos;instant.
        </p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="blog-grid">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

// Re-export as a server + client hybrid
export { BlogPageClient }
export default BlogPageClient

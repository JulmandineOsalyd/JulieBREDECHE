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
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-2">
          {t.blog.label}
        </p>
        <h1 className="font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(2rem,4vw,2.8rem)] text-[var(--ink)] leading-tight mb-4">
          {t.blog.title}
        </h1>
        <p className="text-base text-[var(--muted)] leading-relaxed max-w-[600px]">
          {t.blog.description}
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-10">
        {CATEGORY_KEYS.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className="py-[0.45rem] px-[1.1rem] rounded-full text-[0.85rem] cursor-pointer transition-all duration-200 ease-in-out"
            style={
              cat === 'Copilot de A à Z'
                ? {
                    border: '1.5px solid transparent',
                    background: active === cat
                      ? 'var(--grad)'
                      : 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5ceae8 0%, #18b0e8 45%, #0f5fad 100%) border-box',
                    color: active === cat ? 'white' : 'var(--ink)',
                    fontWeight: 700,
                  }
                : {
                    border: active === cat ? 'none' : '1.5px solid var(--border)',
                    background: active === cat ? 'var(--grad)' : 'white',
                    color: active === cat ? 'white' : 'var(--ink)',
                    fontWeight: 600,
                  }
            }
          >
            {cat === 'Copilot de A à Z' ? (
              <span className="flex items-center gap-[0.4rem]">
                <span
                  className="text-[0.65rem] font-extrabold tracking-tight py-[0.1rem] px-[0.4rem] rounded-full text-white leading-snug"
                  style={{
                    background: active === cat ? 'rgba(255,255,255,0.25)' : 'linear-gradient(135deg, #5ceae8 0%, #18b0e8 45%, #0f5fad 100%)',
                  }}
                >{t.blog.categories.serieLabel}</span>
                {categoryLabel(cat)}
              </span>
            ) : categoryLabel(cat)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-[var(--muted)] text-center py-12">
          {t.blog.empty}
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-5 blog-grid">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </>
  )
}

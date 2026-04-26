'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import type { ArticleMeta } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'
import { useTranslation } from '@/lib/i18n'
import { formatDate } from '@/lib/utils'

const SERIE_KEY = 'Copilot de A à Z'
const RECENT_LIMIT = 3

// Ordre des sections dans les archives. Une section regroupe les articles
// dont category OU parentTag matche le nom.
const SECTIONS = ['SharePoint', 'Power Automate', 'PowerApps', 'Copilot'] as const

function hasCategory(article: ArticleMeta, cat: string): boolean {
  return Array.isArray(article.category)
    ? article.category.includes(cat)
    : article.category === cat
}

function categoryLabel(article: ArticleMeta): string {
  if (Array.isArray(article.category)) return article.category.join(' · ')
  return article.category
}

function articleBelongsToSection(article: ArticleMeta, section: string): boolean {
  if (article.parentTag === section) return true
  if (article.parentTag) return false
  return hasCategory(article, section)
}

export default function BlogList({ articles }: { articles: ArticleMeta[] }) {
  const { t, locale } = useTranslation()
  const [query, setQuery] = useState('')
  const serieGroupRef = useRef<HTMLDetailsElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const serieEpisodes = useMemo(
    () =>
      articles
        .filter((a) => hasCategory(a, SERIE_KEY))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [articles]
  )

  const recentArticles = useMemo(() => articles.slice(0, RECENT_LIMIT), [articles])

  const groupedArticles = useMemo(() => {
    return SECTIONS.map((section) => ({
      section,
      articles: articles
        .filter((a) => articleBelongsToSection(a, section))
        .sort((a, b) => {
          const labelCompare = categoryLabel(a).localeCompare(categoryLabel(b), locale)
          if (labelCompare !== 0) return labelCompare
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        }),
    })).filter((g) => g.articles.length > 0)
  }, [articles, locale])

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return groupedArticles
    return groupedArticles
      .map((g) => ({
        section: g.section,
        articles: g.articles.filter(
          (a) =>
            a.title.toLowerCase().includes(q) ||
            a.excerpt.toLowerCase().includes(q) ||
            categoryLabel(a).toLowerCase().includes(q) ||
            (a.tags ?? []).some((tag) => tag.toLowerCase().includes(q))
        ),
      }))
      .filter((g) => g.articles.length > 0)
  }, [groupedArticles, query])

  const flatResults = useMemo(() => {
    const seen = new Set<string>()
    return filteredGroups
      .flatMap((g) => g.articles)
      .filter((a) => {
        if (seen.has(a.slug)) return false
        seen.add(a.slug)
        return true
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [filteredGroups])

  const totalResults = flatResults.length
  const isSearching = query.trim().length > 0

  const scrollByCard = (dir: 1 | -1) => {
    const el = carouselRef.current
    if (!el) return
    const card = el.querySelector('.serie-card') as HTMLElement | null
    const step = card ? card.offsetWidth + 14 : el.clientWidth * 0.8
    el.scrollBy({ left: step * dir, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    const updateArrows = () => {
      setCanScrollLeft(el.scrollLeft > 4)
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    }
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)

    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [serieEpisodes.length])

  const handleViewSerie = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = serieGroupRef.current
    if (!el) return
    el.open = true
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    el.style.transition = 'background 0.4s'
    el.style.background = 'rgba(24,176,232,0.08)'
    window.setTimeout(() => {
      el.style.background = ''
    }, 1200)
  }

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
        <p className="text-base text-[var(--muted)] leading-relaxed whitespace-pre-line">
          {t.blog.description}
        </p>
      </div>

      {/* DISCOVER */}
      <div className={isSearching ? 'blog-discover dimmed' : 'blog-discover'}>
        {/* Série */}
        {serieEpisodes.length > 0 && (
          <section className="mb-12">
            <div className="serie-head">
              <h2 className="serie-title">
                <span className="serie-badge">{t.blog.categories.serieLabel}</span>
                {t.blog.categories.serie}
              </h2>
              <a href="#group-serie" onClick={handleViewSerie} className="serie-link">
                {t.blog.serieViewAll(serieEpisodes.length)}
              </a>
            </div>

            <div className="serie-carousel">
              <div className="serie-track" ref={carouselRef}>
                {serieEpisodes.map((ep, i) => (
                  <Link
                    key={ep.slug}
                    href={`/blog/${ep.slug}`}
                    className="serie-card"
                    aria-label={`Épisode ${i + 1} : ${ep.title}`}
                  >
                    <span className="ep-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="ep-title">{ep.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="serie-nav">
              <button
                type="button"
                className="serie-nav-arrow"
                onClick={() => scrollByCard(-1)}
                aria-label="Précédent"
                disabled={!canScrollLeft}
              >
                ‹
              </button>
              <button
                type="button"
                className="serie-nav-arrow"
                onClick={() => scrollByCard(1)}
                aria-label="Suivant"
                disabled={!canScrollRight}
              >
                ›
              </button>
            </div>

          </section>
        )}

        {/* Derniers articles en cards */}
        <section className="mb-4">
          <h2 className="recent-title">{t.blog.recentTitle}</h2>
          <div className="grid grid-cols-3 gap-5 blog-grid">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} compact />
            ))}
          </div>
        </section>
      </div>

      {/* DIVIDER */}
      <div className="archives-divider">
        <span>{t.blog.archivesDivider}</span>
      </div>

      {/* SEARCH + ARCHIVES */}
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.blog.searchPlaceholder}
          aria-label={t.blog.searchPlaceholder}
        />
        <span className="search-results">
          {isSearching ? t.blog.searchResults(totalResults) : t.blog.searchCount(articles.length)}
        </span>
      </div>

      {isSearching && totalResults === 0 ? (
        <p className="search-empty">{t.blog.searchEmpty}</p>
      ) : isSearching ? (
        <ul className="tag-list">
          {flatResults.map((a) => (
            <li key={a.slug}>
              <Link href={`/blog/${a.slug}`}>
                <span className="tag-list-date">{formatDate(a.date, locale)}</span>
                <span className="tag-list-subtag">{categoryLabel(a)}</span>
                <span className="tag-list-title">{a.title}</span>
                <span className="tag-list-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          {filteredGroups.map((group) => {
            const isCopilot = group.section === 'Copilot'
            const isOpen = group.section === 'SharePoint'

            return (
              <details
                key={group.section}
                className="tag-group"
                open={isOpen}
                ref={isCopilot ? serieGroupRef : undefined}
                id={isCopilot ? 'group-serie' : undefined}
              >
                <summary>
                  <span className="tag-name">{group.section}</span>
                  <span className="tag-count">{t.blog.tagCount(group.articles.length)}</span>
                </summary>
                <ul className="tag-list">
                  {group.articles.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/blog/${a.slug}`}>
                        <span className="tag-list-date">{formatDate(a.date, locale)}</span>
                        <span className="tag-list-subtag">{categoryLabel(a)}</span>
                        <span className="tag-list-title">{a.title}</span>
                        <span className="tag-list-arrow" aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            )
          })}
        </div>
      )}
    </>
  )
}

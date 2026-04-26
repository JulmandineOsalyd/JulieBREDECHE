import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getArticleBySlug, getAllArticlesMeta, getSeriesNeighbors } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import ReadingProgress from '@/components/ReadingProgress'
import ReadingTime from '@/components/ReadingTime'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import { fr } from '@/lib/i18n/fr'
import { en } from '@/lib/i18n/en'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  // Slugs are identical across FR and EN, so fetching one locale is sufficient
  const articles = getAllArticlesMeta('fr')
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cookieStore = cookies()
  const locale = (cookieStore.get('locale')?.value ?? 'fr') as 'fr' | 'en'
  const article = getArticleBySlug(params.slug, locale)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://juliebredeche.pro/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      authors: ['Julie Bredeche'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const cookieStore = cookies()
  const locale = (cookieStore.get('locale')?.value ?? 'fr') as 'fr' | 'en'
  const ui = locale === 'en' ? en : fr

  const article = getArticleBySlug(params.slug, locale)
  if (!article) notFound()

  const isSeries = article.category === 'Copilot de A à Z'
  const seriesNav = isSeries ? getSeriesNeighbors(article.slug, 'Copilot de A à Z', locale) : null

  return (
    <>
      <ReadingProgress />

      {/* Breadcrumb */}
      <div style={{ padding: '1.25rem 6% 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{ui.blog.article.home}</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
          <span>/</span>
          <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{article.title}</span>
        </div>
      </div>

      <div style={{ padding: '2.5rem 6% 5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }} className="article-layout">
          {/* Main content */}
          <article>
            {/* Header */}
            <header style={{ marginBottom: '2.5rem' }}>
              <span style={{ display: 'inline-block', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                {Array.isArray(article.category)
                  ? article.category.join(' · ')
                  : article.category === 'Copilot de A à Z'
                  ? ui.blog.categories.serieCard
                  : article.category}
              </span>
              <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', color: 'var(--ink)', lineHeight: 1.25, marginBottom: '1rem' }}>
                {article.title}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {article.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                    <Image src="/images/JBR.png" alt="Julie Bredeche" width={32} height={32} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--ink)' }}>Julie Bredeche</span>
                </div>
                <time dateTime={article.date} style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                  {formatDate(article.date, locale)}
                </time>
                <ReadingTime minutes={article.readingTime} />
              </div>
            </header>

            {/* Separator */}
            <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

            {/* MDX content */}
            <div className="prose-article">
              <MDXRemote
                source={article.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
                  },
                }}
              />
            </div>

            {/* Series navigation */}
            {seriesNav && (seriesNav.prev || seriesNav.next) && (
              <nav className="series-nav" aria-label={ui.blog.article.seriesNavTitle}>
                <div className="series-nav-row">
                  {seriesNav.prev ? (
                    <Link href={`/blog/${seriesNav.prev.slug}`} className="series-nav-link series-nav-prev">
                      <span className="series-nav-direction">← {ui.blog.article.seriesPrev}</span>
                      <span className="series-nav-title">{seriesNav.prev.title}</span>
                    </Link>
                  ) : (
                    <span className="series-nav-link series-nav-empty" aria-hidden="true" />
                  )}
                  {seriesNav.next ? (
                    <Link href={`/blog/${seriesNav.next.slug}`} className="series-nav-link series-nav-next">
                      <span className="series-nav-direction">{ui.blog.article.seriesNext} →</span>
                      <span className="series-nav-title">{seriesNav.next.title}</span>
                    </Link>
                  ) : (
                    <span className="series-nav-link series-nav-empty" aria-hidden="true" />
                  )}
                </div>
              </nav>
            )}

          </article>
        </div>

      </div>

    </>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getArticleBySlug, getAllArticlesMeta, getRelatedArticles } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import ReadingProgress from '@/components/ReadingProgress'
import ReadingTime from '@/components/ReadingTime'
import ArticleCard from '@/components/ArticleCard'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const articles = getAllArticlesMeta()
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
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
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = getRelatedArticles(article.slug, article.category)

  return (
    <>
      <ReadingProgress />

      {/* Breadcrumb */}
      <div style={{ padding: '1.25rem 6% 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
          <span>/</span>
          <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{article.title}</span>
        </div>
      </div>

      <div style={{ padding: '2.5rem 6% 5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem', alignItems: 'start' }} className="article-layout">
          {/* Main content */}
          <article>
            {/* Header */}
            <header style={{ marginBottom: '2.5rem' }}>
              <span style={{ display: 'inline-block', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
                {article.category}
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
                  {formatDate(article.date)}
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

          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: '80px' }}>
            {/* Author card */}
            <div className="card" style={{ padding: '1.25rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                  <Image src="/images/JBR.png" alt="Julie Bredeche" width={40} height={40} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--ink)', margin: 0 }}>Julie Bredeche</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', margin: 0 }}>Consultante M365</p>
                </div>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                Spécialiste SharePoint, Power Platform et Copilot Studio depuis 2016.
              </p>
              <Link href="/a-propos" className="btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}>
                En savoir plus
              </Link>
            </div>

            {/* Offres card */}
            <div style={{ background: 'linear-gradient(160deg, #f0f8ff 0%, #e6f4fd 100%)', border: '1.5px solid var(--border)', borderRadius: '16px', padding: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>
                Un projet Microsoft 365 ?
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                SharePoint, Power Platform, Copilot Studio — je vous accompagne de l&apos;analyse à la mise en production.
              </p>
              <Link href="/services" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
                Voir mes offres →
              </Link>
            </div>
          </aside>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div style={{ maxWidth: '1200px', margin: '4rem auto 0' }}>
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>
              Articles similaires
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="related-grid">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        )}
      </div>

    </>
  )
}

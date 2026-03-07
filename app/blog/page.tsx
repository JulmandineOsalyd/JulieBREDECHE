import type { Metadata } from 'next'
import { getAllArticlesMeta } from '@/lib/mdx'
import BlogList from './BlogList'

export const metadata: Metadata = {
  title: 'Blog — Julie Bredeche',
  description:
    'Articles sur SharePoint, Power Automate, Copilot Studio et PowerApps. Conseils pratiques pour tirer le meilleur parti de Microsoft 365.',
  openGraph: {
    title: 'Blog — Julie Bredeche',
    description: 'Articles SharePoint, Power Platform et Copilot Studio.',
    url: 'https://juliebredeche.pro/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  const articles = getAllArticlesMeta()

  return (
    <section style={{ padding: '5rem 6%', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.6rem' }}>
            Ressources
          </p>
          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1rem' }}>
            Blog
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '600px' }}>
            Tutoriels, retours d&apos;expérience et analyses sur SharePoint, Power Platform et Copilot Studio. Pour les équipes Microsoft 365 qui veulent aller plus loin.
          </p>
        </div>

        <BlogList articles={articles} />
      </div>
    </section>
  )
}

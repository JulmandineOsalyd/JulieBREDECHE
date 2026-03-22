import type { Metadata } from 'next'
import { cookies } from 'next/headers'
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
  const cookieStore = cookies()
  const locale = (cookieStore.get('locale')?.value ?? 'fr') as 'fr' | 'en'
  const articles = getAllArticlesMeta(locale)

  return (
    <section style={{ padding: '5rem 6%', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <BlogList articles={articles} />
      </div>
    </section>
  )
}

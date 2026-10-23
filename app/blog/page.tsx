import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getAllArticlesMeta } from '@/lib/mdx'
import BlogList from './BlogList'

export const metadata: Metadata = {
  title: 'Blog Microsoft 365 : SharePoint, Power Platform, Copilot',
  description:
    "Articles, retours d'expérience et conseils pratiques sur SharePoint, Power Automate, Power Apps et Copilot Studio par une consultante indépendante.",
  openGraph: {
    title: 'Blog Microsoft 365 : SharePoint, Power Platform, Copilot',
    description:
      "Articles, retours d'expérience et conseils pratiques sur SharePoint, Power Automate, Power Apps et Copilot Studio par une consultante indépendante.",
    url: 'https://juliebredeche.pro/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  const cookieStore = cookies()
  const locale = (cookieStore.get('locale')?.value ?? 'fr') as 'fr' | 'en'
  const articles = getAllArticlesMeta(locale)

  return (
    <BlogList articles={articles} />
  )
}

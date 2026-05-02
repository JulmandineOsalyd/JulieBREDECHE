import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import HeroHome from '@/components/HeroHome'
import BentoGrid from '@/components/BentoGrid'
import OffresSection from '@/components/OffresSection'
import { getAllArticlesMeta } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Julie BREDECHE — Consultante SharePoint & Power Platform',
  description:
    'Consultante Microsoft 365 indépendante. SharePoint, Power Platform, Copilot Studio. Projets sur mesure pour TPE, PME et grands comptes.',
  openGraph: {
    title: 'Julie BREDECHE — Consultante SharePoint & Power Platform',
    description:
      'Consultante Microsoft 365 indépendante. SharePoint, Power Platform, Copilot Studio. Projets sur mesure pour TPE, PME et grands comptes.',
    url: 'https://juliebredeche.pro',
    type: 'website',
  },
}

export default function HomePage() {
  const cookieStore = cookies()
  const locale = (cookieStore.get('locale')?.value ?? 'fr') as 'fr' | 'en'
  const articles = getAllArticlesMeta(locale)

  return (
    <>
      <HeroHome lastArticle={articles[0]} />
      <BentoGrid articles={articles} />
      <OffresSection />
    </>
  )
}

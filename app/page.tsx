import type { Metadata } from 'next'
import HeroHome from '@/components/HeroHome'
import BentoGrid from '@/components/BentoGrid'
import OffresSection from '@/components/OffresSection'
import { getAllArticlesMeta } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Julie BREDECHE — Consultante SharePoint & Power Platform',
  description:
    'Consultante Microsoft 365 indépendante. SharePoint, Power Platform, Copilot Studio. Projets sur mesure pour PME et grands comptes.',
  openGraph: {
    title: 'Julie BREDECHE — Consultante SharePoint & Power Platform',
    description:
      'Consultante Microsoft 365 indépendante. SharePoint, Power Platform, Copilot Studio. Projets sur mesure pour PME et grands comptes.',
    url: 'https://juliebredeche.pro',
    type: 'website',
  },
}

export default function HomePage() {
  const articlesFr = getAllArticlesMeta('fr')
  const articlesEn = getAllArticlesMeta('en')

  return (
    <>
      <HeroHome />
      <BentoGrid articlesFr={articlesFr} articlesEn={articlesEn} />
      <OffresSection />
    </>
  )
}

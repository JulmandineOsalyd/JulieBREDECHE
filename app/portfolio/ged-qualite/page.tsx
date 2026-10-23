import type { Metadata } from 'next'
import UseCasePage from '@/components/UseCasePage'

export const metadata: Metadata = {
  title: 'GED Qualité SharePoint : 33 sites industriels, zéro document obsolète',
  description:
    "Cas d'usage : GED Qualité sur Microsoft 365 pour 33 sites industriels. SharePoint, Power Apps, Power Automate et recherche Powell. Démonstration vidéo et résultats.",
  alternates: { canonical: 'https://juliebredeche.pro/portfolio/ged-qualite' },
  openGraph: {
    title: 'GED Qualité SharePoint : 33 sites industriels, zéro document obsolète',
    description:
      "Cas d'usage : GED Qualité sur Microsoft 365 pour 33 sites industriels. SharePoint, Power Apps, Power Automate et recherche Powell. Démonstration vidéo et résultats.",
    url: 'https://juliebredeche.pro/portfolio/ged-qualite',
    type: 'article',
    images: ['/portfolio/GED/GED-demo-poster.jpg'],
  },
}

export default function GedQualitePage() {
  return <UseCasePage index={0} />
}

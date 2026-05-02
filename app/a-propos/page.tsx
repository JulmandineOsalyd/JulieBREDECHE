import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'Mon parcours - Julie BREDECHE, consultante M365',
  description:
    'Consultante SharePoint et Power Platform depuis plus de 10 ans. Découvrez mon parcours, ma méthode de travail et les valeurs qui guident mes projets.',
  openGraph: {
    title: 'Mon parcours - Julie BREDECHE, consultante M365',
    description:
      'Consultante SharePoint et Power Platform depuis plus de 10 ans. Découvrez mon parcours, ma méthode de travail et les valeurs qui guident mes projets.',
    url: 'https://juliebredeche.pro/a-propos',
    type: 'profile',
  },
}

export default function QuiSuisJePage() {
  return <AboutContent />
}

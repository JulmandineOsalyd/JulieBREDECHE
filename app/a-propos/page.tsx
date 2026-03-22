import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'A propos — Julie BREDECHE',
  description:
    'Consultante Microsoft 365 indépendante depuis 5 ans. Spécialiste SharePoint, Power Platform et Copilot Studio. Découvrez mon parcours et mes valeurs.',
  openGraph: {
    title: 'A propos — Julie BREDECHE',
    description: 'Consultante Microsoft 365 indépendante depuis 6 ans.',
    url: 'https://juliebredeche.pro/a-propos',
    type: 'profile',
  },
}

export default function QuiSuisJePage() {
  return <AboutContent />
}

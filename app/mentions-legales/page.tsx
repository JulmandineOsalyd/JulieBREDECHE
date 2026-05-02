import type { Metadata } from 'next'
import LegalContent from './LegalContent'

export const metadata: Metadata = {
  title: 'Mentions légales & Confidentialité — Julie BREDECHE',
  description:
    'Mentions légales du site juliebredeche.pro et politique de protection des données personnelles (RGPD).',
  openGraph: {
    title: 'Mentions légales & Confidentialité — Julie BREDECHE',
    description:
      'Mentions légales du site juliebredeche.pro et politique de protection des données personnelles.',
    url: 'https://juliebredeche.pro/mentions-legales',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegalPage() {
  return <LegalContent />
}

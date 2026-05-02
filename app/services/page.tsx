import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Services SharePoint, Power Platform & Copilot Studio',
  description:
    'Développement PowerApps, automatisations Power Automate, agents Copilot Studio, coaching et audit Microsoft 365. Découvrez ma méthode et mes offres.',
  openGraph: {
    title: 'Services SharePoint, Power Platform & Copilot Studio',
    description:
      'Développement PowerApps, automatisations Power Automate, agents Copilot Studio, coaching et audit Microsoft 365. Découvrez ma méthode et mes offres.',
    url: 'https://juliebredeche.pro/services',
    type: 'website',
  },
}

export default function OffresPage() {
  return <ServicesContent />
}

import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Mes services — Julie Bredeche',
  description:
    'Applications PowerApps, automatisations Power Automate, agents Copilot Studio, coaching et audit Microsoft 365. Découvrez mes services et ma méthode.',
  openGraph: {
    title: 'Mes services — Julie Bredeche',
    description: 'Applications PowerApps, Power Automate, agents Copilot Studio, coaching et audit M365.',
    url: 'https://juliebredeche.pro/services',
    type: 'website',
  },
}

export default function OffresPage() {
  return <ServicesContent />
}

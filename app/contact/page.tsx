import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Julie Bredeche',
  description:
    'Vous avez un projet Microsoft 365 ? Contactez Julie Bredeche, consultante SharePoint, Power Platform et Copilot Studio. Réponse sous 24h.',
  openGraph: {
    title: 'Contact — Julie Bredeche',
    description: 'Contactez Julie Bredeche pour vos projets Microsoft 365.',
    url: 'https://juliebredeche.pro/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactContent />
}

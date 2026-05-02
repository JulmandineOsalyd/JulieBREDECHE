import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Me contacter — Julie BREDECHE, consultante M365',
  description:
    'Un projet SharePoint, Power Platform ou Copilot Studio ? Contactez-moi pour échanger sur votre besoin. Réponse sous 24h.',
  openGraph: {
    title: 'Me contacter — Julie BREDECHE, consultante M365',
    description:
      'Un projet SharePoint, Power Platform ou Copilot Studio ? Contactez-moi pour échanger sur votre besoin. Réponse sous 24h.',
    url: 'https://juliebredeche.pro/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactContent />
}

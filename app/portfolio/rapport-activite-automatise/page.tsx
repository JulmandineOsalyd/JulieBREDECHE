import type { Metadata } from 'next'
import UseCasePage from '@/components/UseCasePage'

export const metadata: Metadata = {
  title: "Rapport d'activité automatisé : 30 min gagnées par jour",
  description:
    "Cas d'usage : un flux Power Automate lit l'agenda Outlook et les mails, AI Builder résume la journée et le rapport arrive dans un calendrier SharePoint partagé avec le client, avec export Excel.",
  alternates: { canonical: 'https://juliebredeche.pro/portfolio/rapport-activite-automatise' },
  openGraph: {
    title: "Rapport d'activité automatisé : 30 min gagnées par jour",
    description:
      "Cas d'usage : un flux Power Automate lit l'agenda Outlook et les mails, AI Builder résume la journée et le rapport arrive dans un calendrier SharePoint partagé avec le client, avec export Excel.",
    url: 'https://juliebredeche.pro/portfolio/rapport-activite-automatise',
    type: 'article',
    images: ['/portfolio/DailyReport/DailyReport-demo-poster.jpg'],
  },
}

export default function RapportActiviteAutomatisePage() {
  return <UseCasePage index={4} />
}

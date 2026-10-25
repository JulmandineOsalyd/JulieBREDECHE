import type { Metadata } from 'next'
import UseCasePage from '@/components/UseCasePage'

export const metadata: Metadata = {
  title: 'Réservation de voyages pour le staff : train et hôtel dans une seule application',
  description:
    "Cas d'usage : une application Power Apps pour réserver train et hôtel, avec validation automatique Power Automate et back-office SharePoint pour 200 professeurs sur 2 campus.",
  alternates: { canonical: 'https://juliebredeche.pro/portfolio/reservation-voyages-staff' },
  openGraph: {
    title: 'Réservation de voyages pour le staff : train et hôtel dans une seule application',
    description:
      "Cas d'usage : une application Power Apps pour réserver train et hôtel, avec validation automatique Power Automate et back-office SharePoint pour 200 professeurs sur 2 campus.",
    url: 'https://juliebredeche.pro/portfolio/reservation-voyages-staff',
    type: 'article',
    images: ['/portfolio/MyBooking/MyBooking-demo-poster.jpg'],
  },
}

export default function ReservationVoyagesStaffPage() {
  return <UseCasePage index={2} />
}

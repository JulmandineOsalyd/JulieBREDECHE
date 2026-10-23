import type { Metadata } from 'next'
import OutilsContent from './OutilsContent'

export const metadata: Metadata = {
  title: 'Outils SharePoint et Power Platform',
  description:
    'Des outils créés à partir des cas rencontrés chez mes clients : OneDrive Path Checker pour détecter les chemins trop longs, et un quiz pour choisir entre SharePoint et Power Apps.',
  openGraph: {
    title: 'Outils SharePoint et Power Platform',
    description:
      'OneDrive Path Checker et quiz SharePoint ou Power Apps : des outils créés à partir de missions Microsoft 365.',
    url: 'https://juliebredeche.pro/outils',
    type: 'website',
  },
}

export default function OutilsPage() {
  return <OutilsContent />
}

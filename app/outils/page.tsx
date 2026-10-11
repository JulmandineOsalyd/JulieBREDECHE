import type { Metadata } from 'next'
import OutilsContent from './OutilsContent'

export const metadata: Metadata = {
  title: 'Outils gratuits SharePoint et Power Platform',
  description:
    'Deux outils gratuits nés de mes missions : OneDrive Path Checker pour détecter les chemins trop longs, et un quiz pour choisir entre SharePoint et Power Apps.',
  openGraph: {
    title: 'Outils gratuits SharePoint et Power Platform',
    description:
      'OneDrive Path Checker et quiz SharePoint ou Power Apps : deux outils gratuits issus de missions Microsoft 365.',
    url: 'https://juliebredeche.pro/outils',
    type: 'website',
  },
}

export default function OutilsPage() {
  return <OutilsContent />
}

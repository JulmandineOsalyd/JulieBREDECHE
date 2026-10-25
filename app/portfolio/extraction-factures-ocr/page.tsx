import type { Metadata } from 'next'
import UseCasePage from '@/components/UseCasePage'

export const metadata: Metadata = {
  title: 'Extraction des n° de commande : 10 000 factures PDF lues automatiquement',
  description:
    "Cas d'usage : extraire automatiquement les numéros de commande de milliers de factures PDF avec Power Automate, AI Builder (OCR), SharePoint et Office Scripts.",
  alternates: { canonical: 'https://juliebredeche.pro/portfolio/extraction-factures-ocr' },
  openGraph: {
    title: 'Extraction des n° de commande : 10 000 factures PDF lues automatiquement',
    description:
      "Cas d'usage : extraire automatiquement les numéros de commande de milliers de factures PDF avec Power Automate, AI Builder (OCR), SharePoint et Office Scripts.",
    url: 'https://juliebredeche.pro/portfolio/extraction-factures-ocr',
    type: 'article',
    images: ['/portfolio/LecturePDF/LecturePDF-demo-poster.jpg'],
  },
}

export default function ExtractionFacturesOcrPage() {
  return <UseCasePage index={1} />
}

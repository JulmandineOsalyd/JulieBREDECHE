import type { Metadata } from 'next'
import UseCasePage from '@/components/UseCasePage'

export const metadata: Metadata = {
  title: 'Extraction de factures PDF par OCR : Power Automate et AI Builder',
  description:
    "Cas d'usage : extraire automatiquement les numéros de commande de milliers de factures PDF avec Power Automate, AI Builder (OCR), SharePoint et Office Scripts.",
  alternates: { canonical: 'https://juliebredeche.pro/portfolio/extraction-factures-ocr' },
  openGraph: {
    title: 'Extraction de factures PDF par OCR : Power Automate et AI Builder',
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

import type { Metadata } from 'next'
import UseCasePage from '@/components/UseCasePage'

export const metadata: Metadata = {
  title: 'Gestion des contrats : zéro renouvellement oublié',
  description:
    "Cas d'usage : un bouton SharePoint ouvre un formulaire de métadonnées, puis classe le contrat dans une contrathèque avec recherche avancée et alertes Teams pour un service Achats.",
  alternates: { canonical: 'https://juliebredeche.pro/portfolio/gestion-contrats' },
  openGraph: {
    title: 'Gestion des contrats : zéro renouvellement oublié',
    description:
      "Cas d'usage : un bouton SharePoint ouvre un formulaire de métadonnées, puis classe le contrat dans une contrathèque avec recherche avancée et alertes Teams pour un service Achats.",
    url: 'https://juliebredeche.pro/portfolio/gestion-contrats',
    type: 'article',
  },
}

export default function GestionContratsPage() {
  return <UseCasePage index={3} />
}

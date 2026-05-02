import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Portfolio - Réalisations PowerApps & Power Automate',
  description:
    "Sélection de projets SharePoint, PowerApps et Power Automate réalisés pour des TPE, PME et grands comptes. Cas concrets et captures d'écran.",
  openGraph: {
    title: 'Portfolio - Réalisations PowerApps & Power Automate',
    description:
      "Sélection de projets SharePoint, PowerApps et Power Automate réalisés pour des TPE, PME et grands comptes. Cas concrets et captures d'écran.",
    url: 'https://juliebredeche.pro/portfolio',
    type: 'website',
  },
}

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children
}

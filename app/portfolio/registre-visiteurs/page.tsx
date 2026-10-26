import type { Metadata } from 'next'
import UseCasePage from '@/components/UseCasePage'

export const metadata: Metadata = {
  title: 'Registre des visiteurs : liste des présents à jour en temps réel',
  description:
    "Cas d'usage : une application Power Apps sur tablette, bilingue, remplace le registre papier. Le visiteur s'enregistre, choisit la personne visitée et indique sa sortie en un clic, avec une liste SharePoint des présents.",
  alternates: { canonical: 'https://juliebredeche.pro/portfolio/registre-visiteurs' },
  openGraph: {
    title: 'Registre des visiteurs : liste des présents à jour en temps réel',
    description:
      "Cas d'usage : une application Power Apps sur tablette, bilingue, remplace le registre papier. Le visiteur s'enregistre, choisit la personne visitée et indique sa sortie en un clic, avec une liste SharePoint des présents.",
    url: 'https://juliebredeche.pro/portfolio/registre-visiteurs',
    type: 'article',
    images: ['/portfolio/RegistreVisiteurs/Registre-demo-poster.jpg'],
  },
}

export default function RegistreVisiteursPage() {
  return <UseCasePage index={5} />
}

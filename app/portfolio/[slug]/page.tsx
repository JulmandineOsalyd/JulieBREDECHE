import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectFr, projectSlugs, stripMd } from '@/lib/portfolio'
import CaseStudy from './CaseStudy'

export const dynamicParams = false

export function generateStaticParams() {
  return projectSlugs.map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectFr(params.slug)
  if (!project) return {}
  const description = stripMd(project.context)
  return {
    // absolute : le layout /portfolio fixe un titre simple qui coupe le modèle « %s | Julie Bredeche »
    title: { absolute: `${project.title} | Julie Bredeche` },
    description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: project.title,
      description,
      url: `https://juliebredeche.pro/portfolio/${project.slug}`,
      type: 'article',
    },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  if (!getProjectFr(params.slug)) notFound()
  return <CaseStudy slug={params.slug} />
}

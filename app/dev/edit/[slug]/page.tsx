import { notFound } from 'next/navigation'
import ArticleEditor from './ArticleEditor'

interface Props {
  params: { slug: string }
}

export const metadata = { title: 'Édition locale', robots: { index: false, follow: false } }

// Local editing page: never available in production
export default function EditPage({ params }: Props) {
  if (process.env.NODE_ENV !== 'development') notFound()
  return <ArticleEditor slug={params.slug} />
}

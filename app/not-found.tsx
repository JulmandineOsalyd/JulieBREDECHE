'use client'

import Link from 'next/link'
import { useTranslation } from '@/lib/i18n'

export default function NotFound() {
  const { t } = useTranslation()
  const n = t.notFound

  return (
    <section style={{ padding: '8rem 6%', background: '#ffffff', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '540px', margin: '0 auto' }}>
        <div
          style={{
            fontFamily: 'var(--font-lora), Georgia, serif',
            fontWeight: 800,
            fontSize: '6rem',
            lineHeight: 1,
            background: 'var(--grad)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
          }}
        >
          404
        </div>
        <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '1rem' }}>
          {n.title}
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
          {n.description}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">{n.home}</Link>
          <Link href="/blog" className="btn-outline">{n.blog}</Link>
        </div>
      </div>
    </section>
  )
}

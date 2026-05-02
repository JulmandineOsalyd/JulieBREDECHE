'use client'

import Link from 'next/link'
import { useTranslation } from '@/lib/i18n'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer style={{ background: 'var(--off)', borderTop: '1px solid var(--border)' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.25rem 6%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
          &copy; 2026 Julie Bredeche · Osalyd Consulting
        </span>
        <a
          href="https://linkedin.com/in/juliebredeche"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.footer.linkedinLabel}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--c3)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.8rem',
            transition: 'color 0.2s ease',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
        <Link
          href="/mentions-legales"
          style={{
            fontSize: '0.8rem',
            color: 'var(--muted)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
        >
          {t.footer.legal}
        </Link>
      </div>
    </footer>
  )
}

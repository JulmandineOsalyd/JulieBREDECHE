'use client'

import { useTranslation } from '@/lib/i18n'

interface ReadingTimeProps {
  minutes: number
}

export default function ReadingTime({ minutes }: ReadingTimeProps) {
  const { t } = useTranslation()
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3rem',
        fontSize: '0.78rem',
        fontWeight: 500,
        color: 'var(--muted)',
        background: 'var(--off)',
        padding: '0.2rem 0.6rem',
        borderRadius: '99px',
        border: '1px solid var(--border)',
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
      {minutes} {t.blog.readingMin}
    </span>
  )
}

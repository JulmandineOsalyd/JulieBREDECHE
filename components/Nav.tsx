'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslation, type Locale } from '@/lib/i18n'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, locale, setLocale } = useTranslation()

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/a-propos', label: t.nav.about },
    { href: '/blog', label: t.nav.blog },
    { href: '/services', label: t.nav.services },
    { href: '/portfolio', label: t.nav.portfolio },
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(0,145,213,.12)',
        height: '64px',
      }}
      className="animate-slideDown"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '100%',
          padding: '0 6%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}
          aria-label={t.nav.homeLabel}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <Image src="/images/JBR.png" alt="Julie Bredeche" width={40} height={40} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', fontFamily: 'var(--font-lora), Georgia, serif' }}>
              Julie BREDECHE
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 400 }} className="hidden md:block">
              Osalyd Consulting
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label={t.nav.mainNav}
          style={{ gap: '1.75rem', alignItems: 'center' }}
          className="hidden md:flex"
        >
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link${active ? ' active' : ''}`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* CTA + language switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Language switcher */}
          <div
            className="hidden md:flex"
            style={{
              alignItems: 'center',
              gap: '2px',
              background: 'var(--off)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '2px',
            }}
          >
            {(['fr', 'en'] as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                aria-label={lang === 'fr' ? 'Passer en français' : 'Switch to English'}
                style={{
                  padding: '0.2rem 0.55rem',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  transition: 'all 0.15s ease',
                  background: locale === lang ? 'var(--grad)' : 'transparent',
                  color: locale === lang ? 'white' : 'var(--muted)',
                }}
              >
                {lang}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
          >
            {t.nav.contact}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.4rem',
              color: 'var(--ink)',
            }}
          >
            {menuOpen ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(18px)',
            borderBottom: '1px solid var(--border)',
            padding: '1rem 6%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
          className="md:hidden animate-fadeUp"
        >
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '0.6rem 0',
                  fontWeight: active ? 700 : 500,
                  color: active ? 'var(--c3)' : 'var(--ink)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                  fontSize: '0.95rem',
                }}
              >
                {label}
              </Link>
            )
          })}

          {/* Mobile language switcher */}
          <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.25rem' }}>
            {(['fr', 'en'] as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => { setLocale(lang); setMenuOpen(false) }}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '8px',
                  border: '1.5px solid',
                  borderColor: locale === lang ? 'transparent' : 'var(--border)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  background: locale === lang ? 'var(--grad)' : 'white',
                  color: locale === lang ? 'white' : 'var(--muted)',
                }}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

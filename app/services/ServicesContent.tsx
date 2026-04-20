'use client'

import Link from 'next/link'
import { useTranslation } from '@/lib/i18n'

export default function ServicesContent() {
  const { t } = useTranslation()
  const s = t.services

  return (
    <>
      {/* Hero */}
      <section className="py-20 px-[6%] bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-3">
            {s.hero.label}
          </p>
          <h1 className="font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(2rem,4vw,2.7rem)] text-[var(--ink)] leading-snug mb-5 mt-4">
            {s.hero.h1.before}{' '}
            <span className="gradient-text">
              {s.hero.h1.highlight}
            </span>
            {s.hero.h1.after}
          </h1>
          <p className="text-base text-[var(--muted)] leading-[1.75]">
            {s.hero.description}
          </p>
        </div>
      </section>

      {/* Offre 1 — Développement */}
      <section className="py-12 px-[6%] bg-[var(--off)] border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-12 items-start offre-grid">
            <div>
              <span className="inline-block bg-[var(--grad)] text-white text-[0.72rem] font-bold py-1 px-3 rounded-full uppercase tracking-tight mb-4">
                {s.offer1.badge}
              </span>
              <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[1.6rem] text-[var(--ink)] leading-tight mb-4">
                {s.offer1.title}
              </h2>
              <p className="text-[0.975rem] text-[var(--muted)] leading-[1.75] mb-5">
                {s.offer1.p1}
              </p>
              <p
                className="text-[0.975rem] text-[var(--muted)] leading-[1.75] mb-7"
                // SAFETY: content is static i18n strings
                dangerouslySetInnerHTML={{ __html: s.offer1.p2 }}
              />
              <Link href="#contact" className="btn-primary">{s.offer1.cta}</Link>
            </div>
            <div className="offre-list-col">
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {s.offer1.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-[0.65rem]">
                    <span className="w-5 h-5 rounded-full bg-[var(--grad)] flex items-center justify-center shrink-0 mt-px">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-[var(--ink)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offre 2 & 3 */}
      <section className="py-12 px-[6%] bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-6 offre-grid">
          {/* Coaching */}
          <div className="card p-8 bg-white">
            <span className="inline-block bg-[var(--off)] border border-[var(--border)] rounded-full text-[0.72rem] font-bold py-[0.2rem] px-[0.65rem] text-[var(--c3)] uppercase tracking-tight mb-4">
              {s.coaching.badge}
            </span>
            <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[1.4rem] text-[var(--ink)] leading-tight mb-3">
              {s.coaching.title}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
              {s.coaching.description}
            </p>
            <ul className="list-none p-0 mb-6 flex flex-col gap-2">
              {(s.coaching.bullets).map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-[var(--ink)]">
                  <span className="text-[var(--c2)] font-bold shrink-0">·</span>{b}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-outline w-full justify-center">
              {s.coaching.cta}
            </Link>
          </div>

          {/* Audit */}
          <div className="card p-8 bg-white">
            <span className="inline-block bg-[var(--off)] border border-[var(--border)] rounded-full text-[0.72rem] font-bold py-[0.2rem] px-[0.65rem] text-[var(--c3)] uppercase tracking-tight mb-4">
              {s.audit.badge}
            </span>
            <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[1.4rem] text-[var(--ink)] leading-tight mb-3">
              {s.audit.title}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
              {s.audit.description}
            </p>
            <ul className="list-none p-0 mb-6 flex flex-col gap-2">
              {(s.audit.bullets).map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-[var(--ink)]">
                  <span className="text-[var(--c2)] font-bold shrink-0">·</span>{b}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-outline w-full justify-center">
              {s.audit.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Ma méthode */}
      <section className="py-16 px-[6%] bg-[var(--off)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-2">
              {s.method.label}
            </p>
            <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(1.6rem,3vw,2rem)] text-[var(--ink)] m-0">
              {s.method.title}
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5 method-grid">
            {(s.method.steps as unknown as { n: string; title: string; text: string }[]).map(({ n, title, text }) => (
              <div key={n} className="card p-6 bg-white relative overflow-hidden">
                <div className="absolute top-4 right-4 font-[var(--font-lora),Georgia,serif] font-extrabold text-[2.5rem] text-[rgba(24,176,232,0.1)] leading-none">{n}</div>
                <div className="font-[var(--font-lora),Georgia,serif] font-bold text-base text-[var(--ink)] mb-2">{title}</div>
                <p className="text-sm text-[var(--muted)] leading-relaxed m-0">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog/methode-infaillible-projets-power-platform" className="btn-outline inline-flex gap-2 items-center">
              {s.method.readMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Outil — OneDrive Path Checker */}
      <section className="py-16 px-[6%] bg-white border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-2">
              {s.tool.label}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 items-center offre-grid">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[linear-gradient(135deg,rgba(96,198,255,0.15)_0%,rgba(24,176,232,0.15)_100%)] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 3v18h17v-3H7V3z" />
                    <line x1="7" y1="7" x2="10" y2="7" />
                    <line x1="7" y1="11" x2="10" y2="11" />
                    <line x1="7" y1="15" x2="10" y2="15" />
                    <line x1="11" y1="18" x2="11" y2="15" />
                    <line x1="15" y1="18" x2="15" y2="15" />
                    <line x1="19" y1="18" x2="19" y2="15" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-lora),Georgia,serif] font-bold text-[1.3rem] text-[var(--ink)] m-0">
                  {s.tool.title}
                </h3>
              </div>
              <p
                className="text-[0.975rem] text-[var(--muted)] leading-[1.75] mb-2"
                // SAFETY: content is static i18n strings
                dangerouslySetInnerHTML={{ __html: s.tool.p1 }}
              />
              <p
                className="text-[0.975rem] text-[var(--muted)] leading-[1.75] mb-7"
                // SAFETY: content is static i18n strings
                dangerouslySetInnerHTML={{ __html: s.tool.p2 }}
              />
              <Link href="https://onedrivepathchecker.com/" target="_blank" rel="noopener noreferrer" className="btn-dark inline-flex py-[0.6rem] px-[1.3rem] text-sm">
                {s.tool.cta}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {(s.tool.features as unknown as { title: string; text: string }[]).map(({ title, text }, i) => {
                const icons = [
                  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
                  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c2)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></svg>,
                  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
                  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c2)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
                ]
                return (
                  <div key={title} className="card p-5 bg-[var(--off)]">
                    <div className="w-10 h-10 rounded-[10px] bg-white flex items-center justify-center mb-2 border border-[var(--border)]">{icons[i]}</div>
                    <div className="font-bold text-sm text-[var(--ink)] mb-1">{title}</div>
                    <p className="text-xs text-[var(--muted)] leading-normal m-0">{text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section id="contact" className="py-20 px-[6%] bg-[var(--off)] text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(1.5rem,3vw,2rem)] text-[var(--ink)] mb-4">
            {s.cta.title}
          </h2>
          <p className="text-[var(--muted)] text-base leading-relaxed mb-8">
            {s.cta.description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">
              {s.cta.contact}
            </Link>
            <a href="https://linkedin.com/in/juliebredeche" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              {s.cta.linkedin}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

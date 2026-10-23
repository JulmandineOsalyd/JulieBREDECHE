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
          <h1 className="font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(2rem,4vw,2.8rem)] text-[var(--ink)] leading-snug mb-5 mt-4">
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

      {/* Offre principale — Solutions Power Apps, Power Automate & Agents Copilot */}
      <section className="py-12 px-[6%] bg-[var(--off)] border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="card p-10 bg-white offre-card-main">
            <div className="grid grid-cols-2 gap-12 items-start offre-grid">
              {/* Colonne gauche : intro + Pour qui / Format / Charge */}
              <div>
                <span className="inline-block bg-grad text-white text-[0.72rem] font-bold py-1 px-3 rounded-full uppercase tracking-tight mb-4">
                  {s.offer1.badge}
                </span>
                <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[1.7rem] text-[var(--ink)] leading-tight mb-4">
                  {s.offer1.title}
                </h2>
                <p
                  className="text-[0.975rem] text-[var(--muted)] leading-[1.75] mb-6"
                  // SAFETY: content is static i18n strings
                  dangerouslySetInnerHTML={{ __html: s.offer1.description }}
                />

                <dl className="m-0 flex flex-col gap-4">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-1">
                      {s.offer1.forWhomLabel}
                    </dt>
                    <dd className="text-sm text-[var(--ink)] leading-relaxed m-0">
                      {s.offer1.forWhom}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-1">
                      {s.offer1.formatLabel}
                    </dt>
                    <dd className="text-sm text-[var(--ink)] leading-relaxed m-0">
                      {s.offer1.format}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">{s.offer1.cta}</Link>
                </div>
              </div>

              {/* Colonne droite : livrables (4 catégories en bullets cochés) */}
              <div className="lg:pt-[2.75rem]">
                <ul className="list-none p-0 m-0 flex flex-col gap-4">
                  {(s.offer1.deliverables as unknown as { title: string; text: string }[]).map(({ title, text }) => (
                    <li key={title} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-grad flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-bold text-[0.95rem] text-[var(--ink)] mb-0.5 leading-snug">{title}</div>
                        <p className="text-sm text-[var(--muted)] leading-relaxed m-0">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <a href="#methode" className="text-sm font-bold text-[var(--c3)] hover:text-[var(--c2)] transition-colors">
                    {s.offer1.methodLink}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit SharePoint + Coaching Power Automate (côte à côte, format carte) */}
      <section className="py-12 px-[6%] bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-6 offre-grid">
          {/* Audit SharePoint */}
          <div className="card p-8 bg-white flex flex-col">
            <span className="inline-block bg-[var(--off)] border border-[var(--border)] rounded-full text-[0.72rem] font-bold py-[0.2rem] px-[0.65rem] text-[var(--c3)] uppercase tracking-tight mb-4 self-start">
              {s.audit.badge}
            </span>
            <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[1.4rem] text-[var(--ink)] leading-tight mb-3">
              {s.audit.title}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
              {s.audit.description}
            </p>

            <dl className="m-0 mb-5 flex flex-col gap-3">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-1">
                  {s.audit.forWhomLabel}
                </dt>
                <dd className="text-sm text-[var(--ink)] leading-relaxed m-0">
                  {s.audit.forWhom}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-1">
                  {s.audit.formatLabel}
                </dt>
                <dd className="text-sm text-[var(--ink)] leading-relaxed m-0">
                  {s.audit.format}
                </dd>
              </div>
            </dl>

            <div className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-2">
              {s.audit.deliverablesLabel}
            </div>
            <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2.5">
              {(s.audit.deliverables as unknown as { title: string; text: string }[]).map(({ title, text }) => (
                <li key={title} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-grad flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span><strong className="text-[var(--ink)]">{title}</strong> <span className="text-[var(--muted)]">{text}</span></span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn-outline w-full justify-center mt-auto">
              {s.audit.cta}
            </Link>
          </div>

          {/* Coaching Power Automate */}
          <div className="card p-8 bg-white flex flex-col">
            <span className="inline-block bg-[var(--off)] border border-[var(--border)] rounded-full text-[0.72rem] font-bold py-[0.2rem] px-[0.65rem] text-[var(--c3)] uppercase tracking-tight mb-4 self-start">
              {s.coaching.badge}
            </span>
            <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[1.4rem] text-[var(--ink)] leading-tight mb-3">
              {s.coaching.title}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
              {s.coaching.description}
            </p>

            <dl className="m-0 mb-5 flex flex-col gap-3">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-1">
                  {s.coaching.forWhomLabel}
                </dt>
                <dd className="text-sm text-[var(--ink)] leading-relaxed m-0">
                  {s.coaching.forWhom}
                </dd>
              </div>
            </dl>

            <div className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-2">
              {s.coaching.formatLabel}
            </div>
            {(() => {
              const items = s.coaching.format as unknown as string[]
              const [first, ...rest] = items
              return (
                <>
                  {first && (
                    <p className="text-sm font-bold text-[var(--ink)] leading-relaxed mb-3">
                      {first}
                    </p>
                  )}
                  <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-3">
                    {rest.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-[var(--ink)] leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-grad flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )
            })()}

            <Link href="/contact" className="btn-outline w-full justify-center mt-auto">
              {s.coaching.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Ma méthode (condensée) */}
      <section id="methode" className="py-14 px-[6%] bg-white scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-2">
              {s.method.label}
            </p>
            <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(1.6rem,3vw,2rem)] text-[var(--ink)] m-0">
              {s.method.title}
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-7 method-grid">
            {(s.method.steps as unknown as { n: string; title: string; text: string }[]).map(({ n, title, text }) => (
              <div key={n} className="border-t-2 border-[var(--border)] pt-4">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-[var(--font-lora),Georgia,serif] font-bold text-[1.1rem] text-[var(--c2)]">{n}</span>
                  <span className="font-[var(--font-lora),Georgia,serif] font-bold text-base text-[var(--ink)]">{title}</span>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed m-0">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog/methode-projet-power-platform" className="btn-outline inline-flex gap-2 items-center">
              {s.method.readMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Lien vers les réalisations */}
      <section className="py-12 px-[6%] bg-[var(--off)] border-t border-[var(--border)] text-center">
        <p className="text-base text-[var(--muted)] mb-5 mt-0">{s.realisations.text}</p>
        <Link href="/portfolio" className="btn-primary">
          {s.realisations.cta}
        </Link>
      </section>

    </>
  )
}

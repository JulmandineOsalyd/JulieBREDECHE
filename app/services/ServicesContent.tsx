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

      {/* Offre principale — Solutions PowerApps, Power Automate & Agents Copilot */}
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

      {/* Témoignages */}
      <section className="py-16 px-[6%] bg-[var(--off)] border-t border-[var(--border)]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-2">
              {s.testimonials.label}
            </p>
            <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(1.6rem,3vw,2rem)] text-[var(--ink)] m-0">
              {s.testimonials.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 testimonials-grid">
            {(s.testimonials.items as unknown as { quote: string; author: string; role: string }[]).map((item, i) => (
              <div key={i} className="card p-7 bg-white relative">
                <svg
                  className="absolute top-5 left-5 opacity-30"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="var(--c2)"
                  aria-hidden="true"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                {item.quote ? (
                  <>
                    <p className="text-[0.95rem] text-[var(--ink)] leading-[1.75] italic mb-4 mt-8">
                      “{item.quote}”
                    </p>
                    <div className="text-sm font-bold text-[var(--ink)]">{item.author}</div>
                    {item.role && (
                      <div className="text-xs text-[var(--muted)] mt-0.5">{item.role}</div>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-[var(--muted)] italic m-0 mt-8">
                    Témoignage à venir
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ma méthode */}
      <section id="methode" className="py-16 px-[6%] bg-white scroll-mt-24">
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
              <div key={n} className="card p-6 bg-[var(--off)] relative overflow-hidden">
                <div className="absolute top-4 right-4 font-[var(--font-lora),Georgia,serif] font-extrabold text-[2.5rem] text-[rgba(24,176,232,0.1)] leading-none">{n}</div>
                <div className="font-[var(--font-lora),Georgia,serif] font-bold text-base text-[var(--ink)] mb-2">{title}</div>
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

      {/* Outil — OneDrive Path Checker */}
      <section className="py-16 px-[6%] bg-[var(--off)] border-t border-[var(--border)]">
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
                  <div key={title} className="card p-5 bg-white">
                    <div className="w-10 h-10 rounded-[10px] bg-[var(--off)] flex items-center justify-center mb-2 border border-[var(--border)]">{icons[i]}</div>
                    <div className="font-bold text-sm text-[var(--ink)] mb-1">{title}</div>
                    <p className="text-xs text-[var(--muted)] leading-normal m-0">{text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

'use client'

import Link from 'next/link'
import { useTranslation } from '@/lib/i18n'

export default function PortfolioPage() {
  const { t } = useTranslation()
  const p = t.portfolio

  return (
    <div className="bg-white pt-20 pb-24 px-[6%]">
      <div className="max-w-[1040px] mx-auto flex flex-col gap-16">
        <header className="flex flex-col gap-5 max-w-[680px]">
          <span className="badge self-start">{p.title}</span>
          <h1 className="m-0 font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] text-[var(--ink)]">
            {p.listTitle}
          </h1>
          <p className="m-0 text-lg leading-[1.65] text-[var(--muted)]">{p.description}</p>
        </header>

        <section aria-label={p.listAriaLabel} className="flex flex-col border-t border-[var(--border)]">
          {p.projects.map((proj, i) => (
            <Link
              key={proj.slug}
              href={`/portfolio/${proj.slug}`}
              className="group flex flex-wrap items-center gap-x-12 gap-y-4 py-8 px-4 border-b border-[var(--border)] no-underline text-[var(--ink)] transition-colors duration-200 hover:bg-[var(--off)]"
            >
              <span className="flex-[0_0_40px] font-[var(--font-lora),Georgia,serif] text-[15px] font-semibold text-[var(--muted)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-[999_1_420px] min-w-0 flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-[0.08em] uppercase text-[var(--muted)]">
                  {proj.sector}
                </span>
                <span className="font-[var(--font-lora),Georgia,serif] text-2xl font-semibold leading-[1.3] text-[var(--ink)]">
                  {proj.title}
                </span>
              </span>
              <span className="flex-[1_0_180px] flex flex-col gap-[2px] text-right">
                <span className="font-[var(--font-lora),Georgia,serif] text-[32px] font-bold leading-[1.1] text-[#0f5fad]">
                  {proj.keyMetric.val}
                </span>
                <span className="text-[13px] leading-[1.4] text-[var(--muted)]">{proj.keyMetric.label}</span>
              </span>
              <span
                aria-hidden="true"
                className="flex flex-[0_0_24px] text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#0f5fad]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

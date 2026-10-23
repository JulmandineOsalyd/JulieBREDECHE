'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { useTranslation } from '@/lib/i18n'
import { md, projectTechs, projectVideos } from '@/lib/portfolio'

// Icônes des fonctionnalités clés, dans l'ordre de `features` (réutilisées en boucle au-delà de 6)
const featureIcons: ReactNode[] = [
  <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8" /><path d="M12 16v4" /></>,
  <><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></>,
  <><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="M8.5 6h7" /><path d="M7.2 8.2l3.6 7.6" /><path d="M16.8 8.2l-3.6 7.6" /></>,
  <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /><path d="M11 14l2 2 4-4" /></>,
  <><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></>,
  <><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /><path d="M12 8v4l3 2" /></>,
]

const serif = 'font-[var(--font-lora),Georgia,serif]'
const h2Class = `m-0 ${serif} font-bold text-[clamp(1.3rem,2.5vw,1.6rem)] leading-tight text-[var(--ink)]`

// Sépare « **Titre** suite » en titre et description
function splitFeature(text: string): { title: string; desc: string } {
  const m = text.match(/^\*\*(.*?)\*\*\s*(.*)$/)
  if (!m) return { title: text, desc: '' }
  return { title: m[1], desc: m[2].charAt(0).toUpperCase() + m[2].slice(1) }
}

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
    </svg>
  )
}

// Page dédiée d'un cas d'usage, générée depuis `t.portfolio.projects[index]`.
// Voir docs/modele-page-cas-usage.md
export default function UseCasePage({ index }: { index: number }) {
  const { t } = useTranslation()
  const p = t.portfolio
  const d = p.detail
  const project = p.projects[index]
  const techs = projectTechs[index]
  const video = projectVideos[index]
  const context = 'context' in project ? project.context : project.teaser
  const pairs = project.problem.map((before, i) => ({ before, after: project.benefits[i] }))

  return (
    <div className="bg-white text-[var(--ink)] [&_strong]:font-semibold [&_strong]:text-[var(--ink)]">
      {/* ── En-tête ── */}
      <section className="px-[6%] pt-12 pb-16">
        <header className="max-w-[880px] mx-auto flex flex-col gap-6">
          <Link
            href="/portfolio"
            className="self-start inline-flex items-center gap-2 py-3 text-[0.85rem] font-semibold text-[var(--c3)] no-underline hover:text-[var(--c3-deep,#0e4c89)]"
          >
            <Arrow className="rotate-180" />
            {d.back}
          </Link>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 bg-[var(--off)] border border-[var(--border)] rounded-2xl py-5 px-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">{d.sector}</span>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ink)]">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21V10l6 4V10l6 4V6l6 4v11z" /><path d="M3 21h18" />
                </svg>
                {project.sector}
              </span>
            </div>
            <div className="flex flex-col gap-2 flex-[999_1_320px]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">{d.technologies}</span>
              <div className="flex flex-wrap gap-2">
                {techs.map(tech => (
                  <span key={tech} className="text-[0.8rem] font-semibold text-[var(--c3)] bg-white border border-[var(--border)] rounded-full py-1.5 px-3.5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h1 className={`m-0 ${serif} font-bold text-[clamp(1.75rem,3.5vw,2.4rem)] leading-[1.25] text-[var(--ink)]`}>
            {project.title}
          </h1>
        </header>
      </section>

      <div className="px-[6%]">
        <div className="max-w-[880px] mx-auto flex flex-col gap-20">
          {/* ── Contexte ── */}
          <section aria-labelledby="s-contexte" className="flex flex-col gap-5">
            <h2 id="s-contexte" className={h2Class}>{d.context}</h2>
            <p className="m-0 text-base leading-[1.75] text-[var(--ink)]">{context}</p>
          </section>

          {/* ── Solution ── */}
          <section aria-labelledby="s-solution" className="flex flex-col gap-5">
            <h2 id="s-solution" className={h2Class}>{p.sections.solution}</h2>
            <p className="m-0 text-base leading-[1.75] text-[var(--ink)]" dangerouslySetInnerHTML={{ __html: md(project.solution) }} />
            {video && (
              <video
                src={video.src}
                poster={video.poster}
                aria-label={d.demo}
                controls
                playsInline
                preload="metadata"
                className="block w-full aspect-video mt-3 rounded-2xl bg-[var(--ink)] shadow-[0_12px_32px_rgba(15,95,173,0.12)]"
              />
            )}
          </section>
        </div>
      </div>

      {/* ── Fonctionnalités clés ── */}
      <section aria-labelledby="s-features" className="mt-20 px-[6%]">
        <div className="max-w-[880px] mx-auto flex flex-col gap-7">
          <h2 id="s-features" className={h2Class}>{p.sections.features}</h2>
          <ol className="list-none m-0 p-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
            {project.features.map((f, i) => {
              const { title, desc } = splitFeature(f)
              return (
                <li
                  key={i}
                  className="flex flex-col gap-4 rounded-2xl p-6 bg-[var(--off)] border border-[var(--border)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,95,173,0.1)]"
                >
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center [background:var(--grad)] shadow-[0_6px_18px_rgba(24,176,232,0.3)]">
                    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {featureIcons[i % featureIcons.length]}
                    </svg>
                  </span>
                  <span className={`${serif} font-bold text-base leading-snug text-[var(--ink)]`}>{title}</span>
                  {desc && <span className="text-[0.85rem] leading-relaxed text-[var(--muted)]">{desc}</span>}
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <div className="px-[6%] pt-20 pb-28">
        <div className="max-w-[880px] mx-auto flex flex-col gap-20">
          {/* ── Améliorations : avant → après ── */}
          <section aria-labelledby="s-ameliorations" className="flex flex-col gap-7">
            <h2 id="s-ameliorations" className={h2Class}>{d.improvements}</h2>
            <div className="flex flex-col gap-4">
              <div aria-hidden="true" className="hidden sm:grid grid-cols-[1fr_44px_1fr] gap-4 text-xs font-bold uppercase tracking-wider">
                <span className="text-[var(--muted)]">{d.before}</span>
                <span />
                <span className="text-[var(--c3)]">{d.after}</span>
              </div>
              {pairs.map(({ before, after }, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_44px_1fr] gap-3 sm:gap-4 items-stretch">
                  <div className="rounded-2xl border border-[var(--border)] p-5 text-[0.9rem] leading-relaxed text-[var(--muted)]">
                    <span className="sm:hidden block mb-1 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">{d.before}</span>
                    <span dangerouslySetInnerHTML={{ __html: md(before) }} />
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-11 h-11 rounded-full flex items-center justify-center [background:var(--grad)] text-white shadow-[0_4px_14px_rgba(15,95,173,0.25)]">
                      <Arrow className="rotate-90 sm:rotate-0" />
                    </span>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--off)] p-5 text-[0.9rem] leading-relaxed text-[var(--ink)]">
                    <span className="sm:hidden block mb-1 text-xs font-bold uppercase tracking-wider text-[var(--c3)]">{d.after}</span>
                    <span dangerouslySetInnerHTML={{ __html: md(after) }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── ROI ── */}
          <section aria-labelledby="s-roi" className="flex flex-col gap-7">
            <h2 id="s-roi" className={h2Class}>{p.sections.roi}</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
              {(project.roi as { val: string; label: string }[]).map((r, i) => (
                <div key={i} className="flex flex-col gap-2 rounded-2xl bg-[var(--off)] py-8 px-7">
                  <span className={`${serif} font-bold text-[2.1rem] leading-none text-[var(--c3)]`}>{r.val}</span>
                  <span className="text-[0.85rem] leading-normal text-[var(--muted)]">{r.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

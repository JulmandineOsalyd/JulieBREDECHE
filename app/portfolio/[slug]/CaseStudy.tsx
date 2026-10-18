'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/lib/i18n'
import { md, projectMedia, SHOW_BEFORE_AFTER } from '@/lib/portfolio'

const serif = 'font-[var(--font-lora),Georgia,serif]'
const eyebrow = 'text-xs font-semibold tracking-[0.08em] uppercase text-[var(--muted)]'
const h2 = `m-0 ${serif} text-[32px] leading-[1.25] font-bold text-[var(--ink)]`
const lead = 'm-0 text-xl leading-[1.6] text-[var(--ink)] [&_strong]:font-semibold'
const twoCols = 'grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-x-12'
const strong = '[&_strong]:font-semibold [&_strong]:text-[var(--ink)]'

function SectionHead({ num, id, title }: { num: number; id: string; title: string }) {
  return (
    <div className="flex flex-col gap-5">
      <span className={eyebrow}>{String(num).padStart(2, '0')}</span>
      <h2 id={id} className={h2}>{title}</h2>
    </div>
  )
}

export default function CaseStudy({ slug }: { slug: string }) {
  const { t } = useTranslation()
  const p = t.portfolio
  const project = p.projects.find(proj => proj.slug === slug)
  if (!project) return null

  const media = projectMedia[slug] ?? { screenshots: [] }
  const hasMedia = Boolean(media.video) || media.screenshots.length > 0
  const showBeforeAfter = SHOW_BEFORE_AFTER && project.problem.length > 0 && project.benefits.length > 0

  // Numérotation des sections selon celles affichées
  let n = 0
  const num = () => ++n

  return (
    <div className="bg-white pt-12 pb-28 px-[6%]">
      <div className="max-w-[880px] mx-auto flex flex-col gap-[88px]">
        {/* En-tête */}
        <header className="flex flex-col gap-6">
          <Link
            href="/portfolio"
            className="self-start inline-flex items-center gap-2 py-3 text-sm font-semibold text-[#0f5fad] no-underline hover:text-[var(--c3)]"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M11 6l-6 6 6 6" />
            </svg>
            {p.back}
          </Link>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 bg-[var(--off)] border border-[var(--border)] rounded-2xl py-5 px-6">
            <div className="flex flex-col gap-[6px]">
              <span className={eyebrow}>{p.sectorLabel}</span>
              <span className="text-lg font-bold text-[var(--ink)]">{project.sector}</span>
            </div>
            <div className="flex-[999_1_360px] flex flex-col gap-2">
              <span className={eyebrow}>{p.technologiesLabel}</span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-sm font-semibold text-[#0f5fad] bg-white border border-[var(--border)] rounded-full py-[6px] px-[14px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <h1 className={`m-0 ${serif} font-bold text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] text-[var(--ink)]`}>
            {project.title}
          </h1>
        </header>

        {/* Contexte */}
        <section aria-labelledby="s-contexte" className="flex flex-col gap-5">
          <SectionHead num={num()} id="s-contexte" title={p.sections.context} />
          <p className={lead} dangerouslySetInnerHTML={{ __html: md(project.context) }} />
          <ul className={`list-none m-0 p-0 border-t border-[var(--border)] ${twoCols}`}>
            {project.users.map((u, i) => (
              <li
                key={i}
                className={`py-4 border-b border-[var(--border)] text-base leading-[1.6] text-[var(--muted)] ${strong}`}
                dangerouslySetInnerHTML={{ __html: md(u) }}
              />
            ))}
          </ul>
        </section>

        {/* Solution */}
        <section aria-labelledby="s-solution" className="flex flex-col gap-5">
          <SectionHead num={num()} id="s-solution" title={p.sections.solution} />
          <p className={lead} dangerouslySetInnerHTML={{ __html: md(project.solution) }} />
        </section>

        {/* Vidéo, ou captures à défaut */}
        {hasMedia && (
          <section aria-labelledby="s-video" className="flex flex-col gap-5">
            <SectionHead num={num()} id="s-video" title={media.video ? p.sections.video : p.sections.screenshots} />
            {media.video ? (
              <video
                src={media.video.src}
                poster={media.video.poster}
                controls
                playsInline
                preload="metadata"
                className="block w-full aspect-video rounded-2xl bg-[var(--ink)]"
              />
            ) : (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
                {media.screenshots.map((src, i) => (
                  <figure key={src} className="m-0 flex flex-col gap-2">
                    <a href={src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-[10px] border border-[var(--border)]">
                      <Image
                        src={src}
                        alt={project.screenshots[i]?.title ?? ''}
                        width={640}
                        height={400}
                        sizes="(max-width: 880px) 100vw, 280px"
                        className="w-full h-auto object-cover"
                      />
                    </a>
                    <figcaption className="text-[13px] leading-[1.4] text-[var(--muted)]">
                      {project.screenshots[i]?.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Fonctionnalités clés */}
        <section aria-labelledby="s-features" className="flex flex-col gap-7">
          <SectionHead num={num()} id="s-features" title={p.sections.features} />
          <ol className={`list-none m-0 p-0 border-t border-[var(--border)] ${twoCols}`}>
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-5 py-6 border-b border-[var(--border)]">
                <span className={`${serif} font-semibold text-[#0f5fad] flex-[0_0_28px]`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`text-base leading-[1.65] text-[var(--muted)] ${strong}`}
                  dangerouslySetInnerHTML={{ __html: md(f) }}
                />
              </li>
            ))}
          </ol>
        </section>

        {/* Avant / après */}
        {showBeforeAfter && (
          <section aria-labelledby="s-avant-apres" className="flex flex-col gap-7">
            <SectionHead num={num()} id="s-avant-apres" title={p.sections.beforeAfter} />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-4">
              <div className="border border-[var(--border)] rounded-2xl p-7 flex flex-col gap-4">
                <span className={eyebrow}>{p.before}</span>
                <ul className={`m-0 pl-[18px] flex flex-col gap-3 text-base leading-[1.6] text-[var(--muted)] ${strong}`}>
                  {project.problem.map((line, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: md(line) }} />
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--off)] border border-[var(--border)] rounded-2xl p-7 flex flex-col gap-4">
                <span className={`${eyebrow} !text-[#0f5fad]`}>{p.after}</span>
                <ul className={`m-0 pl-[18px] flex flex-col gap-3 text-base leading-[1.6] text-[var(--ink)] ${strong}`}>
                  {project.benefits.map((line, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: md(line) }} />
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ROI */}
        <section aria-labelledby="s-roi" className="flex flex-col gap-7">
          <SectionHead num={num()} id="s-roi" title={p.sections.roi} />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
            {project.roi.map((r, i) => (
              <div key={i} className="bg-[var(--off)] rounded-2xl py-8 px-7 flex flex-col gap-2">
                <span className={`${serif} text-5xl font-bold leading-none text-[#0f5fad]`}>{r.val}</span>
                <span className="text-[15px] leading-[1.5] text-[var(--muted)]">{r.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <footer className="flex flex-wrap items-center justify-between gap-6 pt-10 border-t border-[var(--border)]">
          <p className={`m-0 ${serif} text-[22px] font-semibold leading-[1.3] text-[var(--ink)]`}>{p.ctaTitle}</p>
          <Link href="/contact" className="btn-primary">{p.ctaButton}</Link>
        </footer>
      </div>
    </div>
  )
}

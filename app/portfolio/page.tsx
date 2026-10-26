'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DM_Serif_Display } from 'next/font/google'
import { useTranslation } from '@/lib/i18n'
import { md, projectPages, projectTechs, projectThumbImages, projectVideos } from '@/lib/portfolio'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const screenshotUrls = [
  [], // GED : remplacé par la vidéo de démo
  [
    '/portfolio/LecturePDF/0.png',
    '/portfolio/LecturePDF/1.png',
    '/portfolio/LecturePDF/2.png',
    '/portfolio/LecturePDF/3.png',
  ],
  [
    '/portfolio/MyBooking/MyBooking-Home.png',
    '/portfolio/MyBooking/MyBooking-Form1.png',
    '/portfolio/MyBooking/MyBooking-Form2.png',
    '/portfolio/MyBooking/MyBooking-Form3.png',
    '/portfolio/MyBooking/MyBooking-MobileHome.png',
    '/portfolio/MyBooking/MyBooking-MobileForm.png',
    '/portfolio/MyBooking/MyBooking-BackOffice.png',
  ],
  [
    '/portfolio/Contratheque/Contratheque-BoutonEnvoi.png',
    '/portfolio/Contratheque/Contratheque-Form.png',
    '/portfolio/Contratheque/Contratheque-Classement.png',
    '/portfolio/Contratheque/Contratheque-Recherche.png',
  ],
  [
    '/portfolio/DailyReport/DailyReport-Calendar.png',
    '/portfolio/DailyReport/DailyReport-ListView.png',
    '/portfolio/DailyReport/DailyReport-Prompt.png',
  ],
  [], // Registre visiteurs : page dédiée avec vidéo (captures avec le nom du client)
]

// Dégradés des vignettes de cartes (design « Portfolio cas d'usage »)
const projectThumbs: [string, string][] = [
  ['#60c6ff', '#0f5fad'],
  ['#54e4d6', '#18b0e8'],
  ['#60c6ff', '#54e4d6'],
  ['#18b0e8', '#0e4c89'],
  ['#0f5fad', '#54e4d6'],
  ['#54e4d6', '#0f5fad'],
]

const projectMainTools =['SharePoint', 'Power Automate', 'Power Apps', 'Power Automate']

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#8a9ab0] whitespace-nowrap">
        {text}
      </span>
      <div className="flex-1 h-px bg-[#edf0f5]" />
    </div>
  )
}

export default function PortfolioPage() {
  const { t } = useTranslation()
  const p = t.portfolio
  const PROJECTS = p.projects

  const [open, setOpen] = useState<number | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [lbIndex, setLbIndex] = useState<number | null>(null)

  const project = open !== null ? PROJECTS[open] : null

  useEffect(() => {
    document.body.style.overflow = (open !== null || lbIndex !== null) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open, lbIndex])

  function openProject(i: number) { setOpen(i); setActiveSlide(0) }
  function closeModal() { setOpen(null); setActiveSlide(0) }
  function goPrev() { if (open !== null && open > 0) { setOpen(open - 1); setActiveSlide(0) } }
  function goNext() { if (open !== null && open < PROJECTS.length - 1) { setOpen(open + 1); setActiveSlide(0) } }
  function openLb(i: number) { setActiveSlide(i); setLbIndex(i) }
  function closeLb() { setLbIndex(null) }
  function prevLb() { setLbIndex(i => (i !== null && project ? (i - 1 + screenshotUrls[open!].length) % screenshotUrls[open!].length : null)) }
  function nextLb() { setLbIndex(i => (i !== null && project ? (i + 1) % screenshotUrls[open!].length : null)) }

  return (
    <div className={dmSerifDisplay.variable}>
      {/* Hero */}
      <section className="py-20 px-[6%] bg-white">
        <header className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-3">
            {p.label}
          </p>
          <h1 className="font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(2rem,4vw,2.8rem)] text-[var(--ink)] leading-tight mb-5">
            {p.title}
          </h1>
          <p className="text-base text-[var(--muted)] leading-[1.75]">
            {p.description}
          </p>
        </header>
      </section>

      {/* Cards grid */}
      <section aria-label={p.title} className="pb-24 px-[6%] bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-7">
          {PROJECTS.map((proj, i) => {
            const cardClass = 'group portfolio-card flex flex-col text-left cursor-pointer w-full p-0 bg-white border border-[var(--border)] rounded-2xl overflow-hidden text-[var(--ink)] no-underline shadow-[0_1px_2px_rgba(7,24,40,0.05)]'
            const cardInner = (
              <>
              <div
                className={`relative w-full aspect-[16/10] flex items-center justify-center overflow-hidden ${projectThumbImages[i] ? 'bg-white p-3 border-b border-[var(--border)]' : ''}`}
                style={projectThumbImages[i] ? undefined : { background: `linear-gradient(135deg, ${projectThumbs[i][0]}, ${projectThumbs[i][1]})` }}
              >
                {projectThumbImages[i] ? (
                  <span className="relative block w-full h-full">
                    <Image
                      src={projectThumbImages[i]!}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain"
                    />
                  </span>
                ) : (
                  <>
                    <svg aria-hidden="true" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                      <path d="M4 4h16v4H4z" /><path d="M4 11h7v9H4z" /><path d="M13 11h7v4h-7z" /><path d="M13 18h7v2h-7z" />
                    </svg>
                    <span className="absolute top-[14px] left-[14px] text-[0.72rem] font-bold tracking-[0.05em] uppercase text-white bg-[rgba(7,24,40,0.28)] rounded-full py-[5px] px-3 backdrop-blur-[2px]">
                      {proj.sector}
                    </span>
                  </>
                )}
              </div>
              <div className="flex flex-col gap-[14px] p-6 flex-1 w-full">
                <span className="font-[var(--font-lora),Georgia,serif] text-[1.05rem] font-bold leading-[1.4] text-[var(--ink)]">
                  {proj.title}
                </span>
                <div className="flex items-baseline justify-between gap-4 mt-auto pt-3 border-t border-[var(--border)]">
                  <span className="flex flex-col gap-[2px]">
                    <span className="font-[var(--font-lora),Georgia,serif] text-[1.4rem] font-bold leading-[1.1] text-[var(--c3)]">
                      {proj.keyMetric.val}
                    </span>
                    <span className="text-[0.78rem] font-medium leading-[1.4] text-[var(--muted)]">
                      {proj.keyMetric.label}
                    </span>
                  </span>
                  <span aria-hidden="true" className="flex self-end shrink-0 text-[var(--muted)] transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-[var(--c3)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
              </>
            )
            const href = projectPages[i]
            return href ? (
              <Link key={i} href={href} aria-label={`${proj.title} — ${p.viewProject}`} className={cardClass}>
                {cardInner}
              </Link>
            ) : (
              <button key={i} onClick={() => openProject(i)} aria-label={`${proj.title} — ${p.viewProject}`} className={cardClass}>
                {cardInner}
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Modal ── */}
      {open !== null && project && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-[200] bg-[rgba(10,18,28,0.82)] flex items-center justify-center p-[20px_16px]"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="animate-fadeUp bg-white rounded-2xl w-full max-w-[880px] max-h-[95vh] overflow-hidden flex flex-col"
          >
            {/* HEADER */}
            <div className="bg-[#0f2744] px-7 pt-6 pb-5 rounded-t-2xl shrink-0">
              <div className="flex items-start justify-between gap-3 mb-[6px]">
                <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#7db4e0] bg-[rgba(125,180,224,0.12)] border border-[rgba(125,180,224,0.2)] py-1 px-[10px] rounded-[20px]">
                  {project.sector}
                </span>
                <button
                  onClick={closeModal}
                  aria-label={p.close}
                  className="w-8 h-8 border border-[rgba(255,255,255,0.2)] rounded-full bg-transparent text-[rgba(255,255,255,0.7)] text-base cursor-pointer flex items-center justify-center shrink-0"
                >
                  ✕
                </button>
              </div>
              <h2 className="font-[var(--font-dm-serif),Georgia,serif] text-[22px] text-white font-normal leading-tight my-2 mb-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-[6px]">
                {projectTechs[open].map(tech => (
                  <span key={tech} className="text-[11px] font-medium text-[#a8c8f0] bg-[rgba(168,200,240,0.1)] border border-[rgba(168,200,240,0.15)] py-[3px] px-[10px] rounded-[20px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#d0d8e4_transparent]">
              {/* VIDEO */}
              {projectVideos[open] && (
                <div className="bg-[#e8f2fa] py-5 px-7">
                  <video
                    key={projectVideos[open]!.src}
                    src={projectVideos[open]!.src}
                    poster={projectVideos[open]!.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full aspect-video rounded-[12px] bg-[#0f2744] shadow-[0_8px_24px_rgba(15,39,68,0.18)]"
                  />
                </div>
              )}

              {/* SLIDER */}
              {screenshotUrls[open].length > 0 && (
              <div className="bg-[#e8f2fa] py-4 px-7">
                <div className="flex gap-[10px] overflow-x-auto [scroll-snap-type:x_mandatory] pb-1 [-ms-overflow-style:none] [scrollbar-width:none]">
                  {screenshotUrls[open].map((url, i) => (
                    <div
                      key={i}
                      onClick={() => openLb(i)}
                      className="shrink-0 w-[110px] h-[68px] rounded-md bg-[#c8dff0] [scroll-snap-align:start] cursor-pointer overflow-hidden transition-[border-color] duration-200"
                      style={{ border: `2px solid ${i === activeSlide ? '#4a9fd4' : 'transparent'}` }}
                    >
                      <Image src={url} alt={project.screenshots[i]?.title ?? ''} width={110} height={68} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              )}

              <div className="px-7 pb-6">
                {/* Avant / Après (fusion problem + benefits, sans label de section) */}
                <div className="py-[22px] border-b border-[#f0f3f7]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    {/* Avant */}
                    <div className="bg-[#f4f6fa] border border-[#e4eaf3] rounded-[10px] p-4">
                      <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#6e7d92] mb-3">
                        Avant
                      </div>
                      <ul className="flex flex-col gap-[10px] m-0 p-0 list-none">
                        {(project.problem).map((line, i) => (
                          <li key={i} className="flex items-start gap-[10px] text-[13px] text-[#2d3a4a] leading-[1.55]">
                            <span className="w-[18px] h-[18px] rounded-full bg-[#dde3ec] flex items-center justify-center text-[11px] text-[#6e7d92] shrink-0 mt-[1px]">✕</span>
                            <span dangerouslySetInnerHTML={{ __html: md(line) }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Après */}
                    <div className="bg-[#eef5fc] border border-[#cfe2f3] rounded-[10px] p-4">
                      <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#2a7db5] mb-3">
                        Après
                      </div>
                      <ul className="flex flex-col gap-[10px] m-0 p-0 list-none">
                        {(project.benefits).map((b, i) => (
                          <li key={i} className="flex items-start gap-[10px] text-[13px] text-[#2d3a4a] leading-[1.55]">
                            <span className="w-[18px] h-[18px] rounded-full bg-[#cfe2f3] flex items-center justify-center text-[11px] text-[#2a7db5] shrink-0 mt-[1px]">✓</span>
                            <span dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contexte (inline) */}
                <div className="py-[22px] border-b border-[#f0f3f7]">
                  <SectionLabel text={p.sections.context} />
                  <p className="text-[13px] text-[#4a5a70] leading-[1.7] m-0 inline-flex flex-wrap items-center gap-x-[10px] gap-y-[4px]">
                    {(project.users).map((u, i) => (
                      <span key={i} className="inline-flex items-center gap-x-[10px]">
                        <span className="text-[#0f2744]">{u}</span>
                        {i < project.users.length - 1 ? <span className="text-[#4a9fd4] text-[18px] font-bold leading-none">·</span> : null}
                      </span>
                    ))}
                  </p>
                </div>

                {/* Solution (encart dégradé) */}
                <div className="py-[22px] border-b border-[#f0f3f7]">
                  <SectionLabel text={p.sections.solution} />
                  <div
                    className="rounded-r-[10px] py-4 px-[18px] border-l-[4px] border-l-[#4a9fd4]"
                    style={{ background: 'linear-gradient(135deg, #f7fbff 0%, #eef5fc 100%)' }}
                  >
                    <div
                      className="text-sm text-[#2d3a4a] leading-[1.75] [&_strong]:text-[#0f2744]"
                      dangerouslySetInnerHTML={{ __html: md(project.solution) }}
                    />
                  </div>
                </div>

                {/* Fonctionnalités (2 colonnes) */}
                <div className="py-[22px] border-b border-[#f0f3f7]">
                  <SectionLabel text={p.sections.features} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[14px]">
                    {(project.features).map((f, i) => (
                      <div key={i} className="flex items-start gap-3 text-[13.5px] text-[#2d3a4a] leading-relaxed">
                        <div className="w-[18px] h-[18px] rounded-full bg-[#deeef9] border border-[#a8cfe8] flex items-center justify-center text-[10px] text-[#2a7db5] shrink-0 mt-px">✓</div>
                        <span dangerouslySetInnerHTML={{ __html: md(f) }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI */}
                <div className="py-[22px]">
                  <SectionLabel text={p.sections.roi} />
                  <div className="grid grid-cols-3 gap-[10px]">
                    {(project.roi as unknown as { val: string; label: string }[]).map((r, i) => (
                      <div
                        key={i}
                        className="border border-[#bcdcf3] rounded-[10px] py-[18px] px-3 text-center"
                        style={{ background: 'linear-gradient(135deg, #e8f2fa 0%, #dceefb 100%)' }}
                      >
                        <div className="font-[var(--font-dm-serif),Georgia,serif] text-[30px] text-[#0f5fad] font-normal leading-none mb-[6px]">{r.val}</div>
                        <div className="text-[11px] text-[#5a7a9b] leading-snug font-medium">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="bg-white border-t border-[#edf0f5] py-[14px] px-7 flex justify-between items-center rounded-b-2xl shrink-0">
              <button
                onClick={goPrev}
                disabled={open === 0}
                className="text-[13px] bg-transparent border border-[#d8e0eb] rounded-lg py-[7px] px-4 text-[#2d3a4a]"
                style={{ cursor: open === 0 ? 'default' : 'pointer', opacity: open === 0 ? 0.4 : 1 }}
              >
                {p.prev}
              </button>
              <span className="text-xs text-[#9aaabb]">{open + 1} / {PROJECTS.length}</span>
              <button
                onClick={goNext}
                disabled={open === PROJECTS.length - 1}
                className="text-[13px] rounded-lg py-[7px] px-4"
                style={{
                  background: open === PROJECTS.length - 1 ? 'none' : '#0f2744',
                  color: open === PROJECTS.length - 1 ? '#2d3a4a' : '#fff',
                  border: `1px solid ${open === PROJECTS.length - 1 ? '#d8e0eb' : '#0f2744'}`,
                  cursor: open === PROJECTS.length - 1 ? 'default' : 'pointer',
                  opacity: open === PROJECTS.length - 1 ? 0.4 : 1,
                }}
              >
                {p.next}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lbIndex !== null && project && open !== null && (
        <div
          onClick={closeLb}
          className="fixed inset-0 z-[300] bg-[rgba(5,21,37,0.95)] backdrop-blur-[8px] [-webkit-backdrop-filter:blur(8px)] flex flex-col items-center p-6 pb-4"
        >
          <div className="w-full max-w-[860px] flex justify-between items-center mb-3 shrink-0">
            <span className="text-[0.78rem] text-[rgba(255,255,255,0.5)] font-semibold">
              {lbIndex + 1} / {screenshotUrls[open].length}
            </span>
            <button
              onClick={closeLb}
              className="w-[34px] h-[34px] rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] text-white text-base cursor-pointer flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          <div onClick={e => e.stopPropagation()} className="flex-1 w-full max-w-[860px] flex items-center justify-center min-h-0">
            <Image
              src={screenshotUrls[open][lbIndex]}
              alt={project.screenshots[lbIndex]?.title ?? ''}
              width={860}
              height={600}
              sizes="(max-width: 860px) 100vw, 860px"
              className="max-h-full w-auto max-w-full object-contain rounded-[15px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
          </div>

          <p onClick={e => e.stopPropagation()} className="text-xs text-[rgba(255,255,255,0.55)] mt-[0.6rem] shrink-0">
            {project.screenshots[lbIndex]?.title}
          </p>

          <div onClick={e => e.stopPropagation()} className="flex gap-2 mt-[0.6rem] flex-wrap justify-center shrink-0">
            {screenshotUrls[open].map((url, i) => (
              <button
                key={i}
                onClick={() => setLbIndex(i)}
                className="w-12 h-[34px] rounded p-0 cursor-pointer overflow-hidden relative transition-opacity duration-200"
                style={{ border: i === lbIndex ? '2px solid #4a9fd4' : '2px solid transparent', opacity: i === lbIndex ? 1 : 0.5 }}
              >
                <Image src={url} alt="" fill sizes="48px" className="object-cover" />
              </button>
            ))}
          </div>

          <div onClick={e => e.stopPropagation()} className="flex gap-2 mt-[0.6rem] shrink-0">
            <button
              onClick={prevLb}
              disabled={lbIndex === 0}
              className="py-[0.3rem] px-[0.9rem] rounded-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.07)] text-white text-xs"
              style={{ cursor: lbIndex === 0 ? 'default' : 'pointer', opacity: lbIndex === 0 ? 0.3 : 1 }}
            >
              {p.prev}
            </button>
            <button
              onClick={nextLb}
              disabled={lbIndex === screenshotUrls[open].length - 1}
              className="py-[0.3rem] px-[0.9rem] rounded-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.07)] text-white text-xs"
              style={{ cursor: lbIndex === screenshotUrls[open].length - 1 ? 'default' : 'pointer', opacity: lbIndex === screenshotUrls[open].length - 1 ? 0.3 : 1 }}
            >
              {p.next}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

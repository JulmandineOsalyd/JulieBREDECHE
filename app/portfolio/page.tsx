'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { DM_Serif_Display } from 'next/font/google'
import { useTranslation } from '@/lib/i18n'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const screenshotUrls = [
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
    '/portfolio/LecturePDF/0.png',
    '/portfolio/LecturePDF/1.png',
    '/portfolio/LecturePDF/2.png',
    '/portfolio/LecturePDF/3.png',
  ],
  [
    '/portfolio/Contratheque/Contratheque-BoutonEnvoi.png',
    '/portfolio/Contratheque/Contratheque-Form.png',
    '/portfolio/Contratheque/Contratheque-Classement.png',
    '/portfolio/Contratheque/Contratheque-Recherche.png',
  ],
]

const projectTechs = [
  ['PowerApps', 'Power Automate', 'SharePoint', 'Outlook'],
  ['Power Automate', 'AI Builder', 'SharePoint'],
  ['SharePoint', 'Power Automate', 'Forms', 'Teams'],
]

const projectMainTools = ['PowerApps', 'Power Automate', 'Power Automate']

// SAFETY: only used with static i18n strings — sanitize with DOMPurify if dynamic content is ever passed
function md(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
}

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
      <section className="pt-20 pb-12 px-[6%] bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-3">
            {p.label}
          </p>
          <h1 className="font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(2rem,4vw,2.8rem)] text-[var(--ink)] leading-tight mb-4">
            {p.title}
          </h1>
          <div className="inline-flex items-center gap-[0.45rem] bg-[linear-gradient(135deg,rgba(77,255,214,0.12)_0%,rgba(24,176,232,0.12)_100%)] border border-[rgba(24,176,232,0.3)] rounded-full py-[0.3rem] px-[0.9rem] mb-5">
            <span className="w-[7px] h-[7px] rounded-full bg-[var(--grad)] inline-block shrink-0" />
            <span className="text-xs font-semibold bg-[var(--grad)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              {p.comingSoon}
            </span>
          </div>
          <p className="text-base text-[var(--muted)] leading-[1.75]">
            {p.description}
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="px-[6%] pb-20 bg-white">
        <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-5 portfolio-grid">
          {PROJECTS.map((proj, i) => (
            <button
              key={i}
              onClick={() => openProject(i)}
              className="card portfolio-card p-7 text-left cursor-pointer bg-white border-[1.5px] border-[var(--border)] w-full flex flex-col gap-3"
            >
              <span className="text-[2rem] font-extrabold font-[var(--font-lora),Georgia,serif] bg-[var(--grad)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-base text-[var(--ink)] leading-snug m-0">
                {proj.title}
              </h2>
              <span className="self-start text-[0.68rem] font-bold text-white bg-[var(--c3)] border border-[rgba(14,76,137,0.18)] rounded-full py-[0.15rem] px-[0.6rem] uppercase tracking-tight">
                {proj.sector}
              </span>
              <div className="flex flex-wrap gap-[0.35rem] mt-auto pt-2 border-t border-[var(--border)]">
                {projectTechs[i].map(tech => (
                  <span key={tech} className="text-[0.7rem] font-bold text-[var(--c3)] bg-[var(--off)] border border-[var(--border)] rounded-md py-[0.15rem] px-2">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-xs text-[var(--c3)] font-semibold mt-1">
                {p.viewProject}
              </span>
            </button>
          ))}
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
            className="animate-fadeUp bg-white rounded-2xl w-full max-w-[720px] max-h-[95vh] overflow-hidden flex flex-col"
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
              {/* SLIDER */}
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
                <p className="text-[11px] text-[#7aa8c4] text-center mt-[10px] tracking-wide">
                  {p.captures(screenshotUrls[open].length)}
                </p>
              </div>

              <div className="px-7 pb-6">
                {/* Problématique */}
                <div className="py-[22px] border-b border-[#f0f3f7]">
                  <SectionLabel text={p.sections.problem} />
                  <div className="flex flex-col gap-[6px]">
                    {(project.problem).map((line, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[#2d3a4a] leading-8">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#4a9fd4] shrink-0 mt-[10px] inline-block" />
                        <span dangerouslySetInnerHTML={{ __html: md(line) }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contexte */}
                <div className="py-[22px] border-b border-[#f0f3f7]">
                  <SectionLabel text={p.sections.context} />
                  <div className="flex flex-wrap gap-2">
                    {(project.users).map((u, i) => (
                      <div key={i} className="text-[13px] text-[#2d3a4a] bg-[#f4f7fb] border border-[#e4eaf3] rounded-lg py-2 px-[14px]">{u}</div>
                    ))}
                  </div>
                </div>

                {/* Solution */}
                <div className="py-[22px] border-b border-[#f0f3f7]">
                  <SectionLabel text={p.sections.solution} />
                  <div className="text-sm text-[#2d3a4a] leading-[1.75]" dangerouslySetInnerHTML={{ __html: md(project.solution) }} />
                </div>

                {/* Fonctionnalités */}
                <div className="py-[22px] border-b border-[#f0f3f7]">
                  <SectionLabel text={p.sections.features} />
                  <div className="flex flex-col gap-[10px]">
                    {(project.features).map((f, i) => (
                      <div key={i} className="flex items-start gap-3 text-[13.5px] text-[#2d3a4a] leading-relaxed">
                        <div className="w-[18px] h-[18px] rounded-full bg-[#deeef9] border border-[#a8cfe8] flex items-center justify-center text-[10px] text-[#2a7db5] shrink-0 mt-px">✓</div>
                        <span dangerouslySetInnerHTML={{ __html: md(f) }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bénéfices */}
                <div className="py-[22px] border-b border-[#f0f3f7]">
                  <SectionLabel text={p.sections.benefits} />
                  <div className="flex flex-col gap-2">
                    {(project.benefits).map((b, i) => (
                      <div key={i} className="text-[13.5px] text-[#2d3a4a] leading-relaxed bg-[#f8fbff] border border-[#e4edf7] border-l-[3px] border-l-[#4a9fd4] rounded-r-lg py-[10px] px-[14px]">
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI */}
                <div className="py-[22px]">
                  <SectionLabel text={p.sections.roi} />
                  <div className="grid grid-cols-3 gap-[10px]">
                    {(project.roi as unknown as { val: string; label: string }[]).map((r, i) => (
                      <div key={i} className="bg-[#f4f7fb] border border-[#e4eaf3] rounded-[10px] py-[14px] px-3 text-center">
                        <div className="font-[var(--font-dm-serif),Georgia,serif] text-[26px] text-[#0f2744] font-normal leading-none mb-[6px]">{r.val}</div>
                        <div className="text-[11px] text-[#7a8ea4] leading-snug">{r.label}</div>
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

          <div onClick={e => e.stopPropagation()} className="flex-1 w-full max-w-[860px] flex flex-col items-center justify-center min-h-0 relative">
            <Image
              src={screenshotUrls[open][lbIndex]}
              alt={project.screenshots[lbIndex]?.title ?? ''}
              fill
              sizes="(max-width: 860px) 100vw, 860px"
              className="object-contain rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
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

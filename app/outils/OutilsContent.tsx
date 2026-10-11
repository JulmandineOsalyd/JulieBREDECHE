'use client'

import Link from 'next/link'
import { useTranslation } from '@/lib/i18n'

export default function OutilsContent() {
  const { t } = useTranslation()
  const o = t.tools

  return (
    <section className="py-20 px-[6%] bg-white">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--c2)] mb-3">
            {o.label}
          </p>
          <h1 className="font-[var(--font-lora),Georgia,serif] font-bold text-[clamp(2rem,4vw,2.7rem)] text-[var(--ink)] leading-snug mb-4 mt-0">
            {o.title}
          </h1>
          <p className="text-base text-[var(--muted)] leading-[1.75] m-0">{o.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-6 testimonials-grid">
          {o.items.map((item) => (
            <div key={item.href} className="card p-7 bg-white flex flex-col">
              <h2 className="font-[var(--font-lora),Georgia,serif] font-bold text-[1.2rem] text-[var(--ink)] mt-0 mb-3">
                {item.title}
              </h2>
              <p className="text-[0.95rem] text-[var(--muted)] leading-[1.7] mt-0 mb-6">{item.text}</p>
              <Link href={item.href} className="btn-outline mt-auto justify-center">
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

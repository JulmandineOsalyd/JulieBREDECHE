import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Lora, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NewsletterBar from '@/components/NewsletterBar'
import '@/styles/globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Julie Bredeche — Consultante SharePoint & Copilot Studio',
    template: '%s | Julie Bredeche',
  },
  description:
    'Consultante Microsoft 365 indépendante. SharePoint, Power Platform, Copilot Studio. Projets sur mesure pour TPE, PME et grands comptes.',
  metadataBase: new URL('https://juliebredeche.pro'),
  openGraph: {
    title: 'Julie Bredeche — Consultante SharePoint & Copilot Studio',
    description:
      'Consultante Microsoft 365 indépendante. SharePoint, Power Platform, Copilot Studio.',
    url: 'https://juliebredeche.pro',
    siteName: 'Julie Bredeche',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julie Bredeche — Consultante SharePoint & Copilot Studio',
    description:
      'Consultante Microsoft 365 indépendante. SharePoint, Power Platform, Copilot Studio.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0f5fad',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${lora.variable} ${plusJakartaSans.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <NewsletterBar />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

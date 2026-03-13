import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Lora, Plus_Jakarta_Sans, DM_Serif_Display, DM_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NewsletterBar from '@/components/NewsletterBar'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/next';


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

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Julie Bredeche — Consultante SharePoint & Copilot Studio',
    template: '%s | Julie Bredeche',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
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
    <html lang="fr" className={`${lora.variable} ${plusJakartaSans.variable} ${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Analytics />
        <NewsletterBar />
        <Footer />
      </body>
    </html>
  )
}

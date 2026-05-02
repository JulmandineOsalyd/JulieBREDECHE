import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { Lora, Plus_Jakarta_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NewsletterBar from '@/components/NewsletterBar'
import { LanguageProvider, type Locale } from '@/lib/i18n'
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


export const metadata: Metadata = {
  title: {
    default: 'Julie BREDECHE — Consultante SharePoint & Power Platform',
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
    title: 'Julie BREDECHE — Consultante SharePoint & Power Platform',
    description:
      'Consultante Microsoft 365 indépendante. SharePoint, Power Platform, Copilot Studio. Projets sur mesure pour TPE, PME et grands comptes.',
    url: 'https://juliebredeche.pro',
    siteName: 'Julie Bredeche',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Julie BREDECHE — Consultante SharePoint & Power Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julie BREDECHE — Consultante SharePoint & Power Platform',
    description:
      'Consultante Microsoft 365 indépendante. SharePoint, Power Platform, Copilot Studio. Projets sur mesure pour TPE, PME et grands comptes.',
    images: ['/og-image.png'],
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
  const cookieStore = cookies()
  const locale = (cookieStore.get('locale')?.value ?? 'fr') as Locale

  return (
    <html lang={locale} className={`${lora.variable} ${plusJakartaSans.variable}`}>
      <body>
        <LanguageProvider initialLocale={locale}>
          <Nav />
          <main>{children}</main>
          <Analytics />
          <NewsletterBar />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

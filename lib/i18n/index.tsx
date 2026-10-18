'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { fr } from './fr'
import { en } from './en'

export type Locale = 'fr' | 'en'
export type Translations = typeof fr

const TranslationsMap: Record<Locale, Translations> = { fr, en }

interface LanguageContextValue {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'fr',
  t: fr,
  setLocale: () => {},
})

export function LanguageProvider({ children, initialLocale = 'fr' }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const router = useRouter()

  useEffect(() => {
    // 1. Check localStorage first
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved === 'fr' || saved === 'en') {
      setLocaleState(saved)
      document.cookie = `locale=${saved}; path=/; max-age=31536000`
      document.documentElement.lang = saved
      return
    }
    // 2. Detect browser language
    const lang = navigator.language?.toLowerCase() ?? ''
    const detected: Locale = lang.startsWith('fr') ? 'fr' : 'en'
    setLocaleState(detected)
    document.cookie = `locale=${detected}; path=/; max-age=31536000`
    document.documentElement.lang = detected
  }, [])

  function setLocale(newLocale: Locale) {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`
    document.documentElement.lang = newLocale
    router.refresh()
  }

  return (
    <LanguageContext.Provider value={{ locale, t: TranslationsMap[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  return useContext(LanguageContext)
}

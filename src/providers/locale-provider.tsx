'use client'

import * as React from 'react'
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  type Locale,
  translations,
} from '@/lib/i18n/translations'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof translations)[Locale]
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null)

interface LocaleProviderProps {
  children: React.ReactNode
  initialLocale?: Locale
}

export function LocaleProvider({ children, initialLocale = DEFAULT_LOCALE }: LocaleProviderProps) {
  const [locale, setLocaleState] = React.useState<Locale>(initialLocale)

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next)
    // The layout reads this cookie on the next request, so the first paint is already translated.
    // biome-ignore lint/suspicious/noDocumentCookie: the Cookie Store API is Chromium-only.
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`
    // The server rendered <html lang> from the previous value; keep it in sync without a reload.
    document.documentElement.lang = next
  }, [])

  const value = React.useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider')
  return ctx
}

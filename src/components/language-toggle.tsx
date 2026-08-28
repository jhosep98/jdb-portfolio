'use client'

import type * as React from 'react'
import { LOCALE_LABELS, LOCALES } from '@/lib/i18n/translations'
import { cn } from '@/lib/utils'
import { useLocale } from '@/providers/locale-provider'

const LanguageToggle: React.FC = () => {
  const { locale, setLocale, t } = useLocale()

  return (
    <fieldset className='flex h-11 items-center gap-0.5 rounded-md border p-0.5 font-mono text-xs tracking-[0.08em] uppercase lg:h-9'>
      <legend className='sr-only'>{t.a11y.language}</legend>

      {LOCALES.map((loc) => (
        <button
          key={loc}
          type='button'
          aria-pressed={locale === loc}
          aria-label={LOCALE_LABELS[loc]}
          onClick={() => setLocale(loc)}
          className={cn(
            'flex h-full min-w-11 items-center justify-center rounded-[5px] px-2 text-muted-foreground transition-colors lg:min-w-8',
            locale === loc && 'bg-muted text-foreground',
          )}
        >
          {loc}
        </button>
      ))}
    </fieldset>
  )
}

export default LanguageToggle

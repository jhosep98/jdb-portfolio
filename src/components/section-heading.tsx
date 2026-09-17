'use client'

import type * as React from 'react'
import type { SectionKey } from '@/lib/i18n/translations'
import { useLocale } from '@/providers/locale-provider'

interface SectionHeadingProps {
  index: number
  section: SectionKey
  level?: 'h1' | 'h2'
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ index, section, level = 'h2' }) => {
  const { t } = useLocale()
  const { eyebrow, title } = t.sections[section]
  const Heading = level

  return (
    <div>
      <div className='flex items-center gap-2.5 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase'>
        <span className='size-1.5 shrink-0 rounded-full bg-primary' />
        {String(index).padStart(2, '0')} — {eyebrow}
      </div>

      <Heading
        id={`${section}-heading`}
        className='relative mt-4 mb-5 pb-5 text-balance text-3xl font-semibold tracking-tight md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'
      >
        {title}
      </Heading>
    </div>
  )
}

export default SectionHeading

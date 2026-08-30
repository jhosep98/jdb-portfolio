'use client'

import Link from 'next/link'
import type * as React from 'react'
import Logo from '@/components/logo'
import { useLocale } from '@/providers/locale-provider'

const SECTION_ANCHORS = ['about', 'experience', 'work', 'testimonials', 'contact'] as const

const EXTERNAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/jhosep98' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jhosep-davila/' },
  { name: 'Email', href: 'mailto:jhosepdb14@gmail.com' },
]

const STACK = 'Next.js · TailwindCSS · TypeScript'

const Footer: React.FC = () => {
  const { t } = useLocale()
  const sectionLinks = SECTION_ANCHORS.map((anchor) => ({ anchor, name: t.nav[anchor] }))

  return (
    <footer className='mt-32 border-t bg-card/50'>
      <div className='mx-auto max-w-6xl px-6 py-12'>
        <div className='grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]'>
          <div className='space-y-3'>
            <Logo />
            <p className='max-w-xs text-sm text-muted-foreground'>{t.footer.tagline}</p>
          </div>

          <div className='space-y-3'>
            <span className='block font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase'>
              {t.footer.sections}
            </span>
            <ul className='space-y-1 text-sm'>
              {sectionLinks.map((item) => (
                <li key={item.anchor}>
                  <Link
                    href={`/#${item.anchor}`}
                    className='flex min-h-11 items-center text-muted-foreground duration-150 hover:text-accent-foreground sm:min-h-0'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-3'>
            <span className='block font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase'>
              {t.footer.elsewhere}
            </span>
            <ul className='space-y-1 text-sm'>
              {EXTERNAL_LINKS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex min-h-11 items-center text-muted-foreground duration-150 hover:text-accent-foreground sm:min-h-0'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-12 flex flex-col gap-2 border-t border-dashed pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
          <span>© {new Date().getFullYear()} Jhosep Davila</span>
          <span className='font-mono'>{STACK}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

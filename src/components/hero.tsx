'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type * as React from 'react'
import HeroAnimation from '@/components/hero-animation'
import { GitHubIcon, LinkedInIcon } from '@/components/social-icons'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/providers/locale-provider'
import { HeroHighlight } from './ui/hero-highlight'

/**
 * Entrance is CSS-only (see `.hero-*` in globals.css): the markup is rendered
 * and visible on first paint, so the JS bundle never sits on the hero's LCP.
 * Staggered with `animation-delay` utilities.
 */
const Hero: React.FC = () => {
  const { t } = useLocale()

  return (
    <HeroHighlight containerClassName='flex min-h-screen items-center justify-center pt-36 pb-20 lg:pt-32 lg:pb-16'>
      <div className='mx-auto max-w-6xl px-6'>
        <section className='grid items-center gap-12 overflow-hidden lg:grid-cols-2 lg:gap-6'>
          <div>
            <span className='hero-in bg-card flex w-fit max-w-full items-start gap-2.5 rounded-2xl border py-2 pr-3.5 pl-3 sm:items-center sm:rounded-full sm:py-1.5'>
              <span className='mt-1.25 size-1.5 shrink-0 rounded-full bg-primary sm:mt-0' />
              <span className='font-mono text-[11px] leading-[1.6] tracking-[0.12em] text-muted-foreground uppercase sm:leading-none sm:tracking-[0.16em]'>
                {t.hero.badge}
              </span>
            </span>

            <h1 className='hero-title-in mt-6 text-4xl font-semibold tracking-tight text-balance sm:mt-8 sm:text-5xl lg:text-7xl'>
              {t.hero.title}
            </h1>

            <p className='hero-in mt-5 max-w-lg text-muted-foreground [animation-delay:120ms] sm:mt-6'>
              {t.hero.description}
            </p>

            <div className='hero-in mt-8 flex flex-wrap items-center gap-3 [animation-delay:200ms] sm:mt-9'>
              <Button asChild size='lg'>
                <Link href='/#contact'>
                  {t.common.letsTalk}
                  <ArrowUpRight className='size-4' />
                </Link>
              </Button>

              <Button asChild size='lg' variant='outline'>
                <Link href='/#work'>{t.hero.secondaryCta}</Link>
              </Button>
            </div>

            <div className='hero-in mt-7 flex flex-wrap items-center gap-5 [animation-delay:280ms] sm:mt-8'>
              <a
                href='https://www.linkedin.com/in/jhosep-davila/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='-m-2.5 block rounded-full p-2.5 text-muted-foreground hover:text-primary'
              >
                <LinkedInIcon className='size-6' />
              </a>

              <a
                href='https://github.com/jhosep98'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
                className='-m-2.5 block rounded-full p-2.5 text-muted-foreground hover:text-primary'
              >
                <GitHubIcon className='size-6' />
              </a>

              <span className='hidden h-4 w-px bg-border sm:block' />

              <a
                href='mailto:jhosepdb149@gmail.com'
                className='hidden font-mono text-xs tracking-[0.04em] text-muted-foreground hover:text-primary sm:block'
              >
                jhosepdb149@gmail.com
              </a>
            </div>
          </div>

          <div className='hero-in [animation-delay:160ms]'>
            <HeroAnimation />
          </div>
        </section>
      </div>
    </HeroHighlight>
  )
}

export default Hero

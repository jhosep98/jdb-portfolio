'use client'

import { ArrowUpRight } from 'lucide-react'
import type { Variants } from 'motion'
import Link from 'next/link'
import type * as React from 'react'
import blogging from '@/assets/blogging.json'
import ImageAnimation from '@/components/image-animation'
import { GitHubIcon, LinkedInIcon } from '@/components/social-icons'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { useLocale } from '@/providers/locale-provider'
import { HeroHighlight } from './ui/hero-highlight'

const transitionVariants: {
  item?: Variants
} = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const staggeredVariants = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.75,
      },
    },
  },
  ...transitionVariants,
}

const Hero: React.FC = () => {
  const { t } = useLocale()

  return (
    <HeroHighlight containerClassName='flex min-h-screen items-center justify-center pt-28 pb-16 lg:pt-32'>
      <div className='mx-auto max-w-6xl px-4 lg:px-6'>
        <section className='grid items-center gap-12 overflow-hidden lg:grid-cols-2 lg:gap-6'>
          <div>
            <AnimatedGroup variants={transitionVariants}>
              <span className='bg-card flex w-fit items-center gap-2.5 rounded-full border py-1.5 pr-3.5 pl-3'>
                <span className='size-1.5 shrink-0 rounded-full bg-primary' />
                <span className='font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase'>
                  {t.hero.badge}
                </span>
              </span>
            </AnimatedGroup>

            <TextEffect
              preset='fade-in-blur'
              speedSegment={0.3}
              as='h1'
              className='mt-8 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl'
            >
              {t.hero.title}
            </TextEffect>

            <AnimatedGroup variants={staggeredVariants}>
              <p className='mt-8 max-w-lg text-muted-foreground'>{t.hero.description}</p>

              <div className='mt-8 flex flex-wrap items-center gap-3'>
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

              <div className='mt-8 flex flex-wrap items-center gap-5'>
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
                  href='mailto:jhosepdb14@gmail.com'
                  className='hidden font-mono text-xs tracking-[0.04em] text-muted-foreground hover:text-primary sm:block'
                >
                  jhosepdb14@gmail.com
                </a>
              </div>
            </AnimatedGroup>
          </div>

          <AnimatedGroup variants={transitionVariants}>
            <div className='relative overflow-hidden'>
              <ImageAnimation src={blogging} label={t.a11y.heroIllustration} />
            </div>
          </AnimatedGroup>
        </section>
      </div>
    </HeroHighlight>
  )
}

export default Hero

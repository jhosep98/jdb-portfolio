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
    <HeroHighlight containerClassName='flex min-h-screen items-center justify-center pt-36 pb-20 lg:pt-32 lg:pb-16'>
      <div className='mx-auto max-w-6xl px-6'>
        <section className='grid items-center gap-12 overflow-hidden lg:grid-cols-2 lg:gap-6'>
          <div>
            <AnimatedGroup variants={transitionVariants}>
              <span className='bg-card flex w-fit max-w-full items-start gap-2.5 rounded-2xl border py-2 pr-3.5 pl-3 sm:items-center sm:rounded-full sm:py-1.5'>
                <span className='mt-[5px] size-1.5 shrink-0 rounded-full bg-primary sm:mt-0' />
                <span className='font-mono text-[11px] leading-[1.6] tracking-[0.12em] text-muted-foreground uppercase sm:leading-none sm:tracking-[0.16em]'>
                  {t.hero.badge}
                </span>
              </span>
            </AnimatedGroup>

            <TextEffect
              preset='fade-in-blur'
              speedSegment={0.3}
              as='h1'
              className='mt-6 text-4xl font-semibold tracking-tight sm:mt-8 sm:text-5xl lg:text-7xl'
            >
              {t.hero.title}
            </TextEffect>

            <AnimatedGroup variants={staggeredVariants}>
              <p className='mt-5 max-w-lg text-muted-foreground sm:mt-6'>{t.hero.description}</p>

              <div className='mt-8 flex flex-wrap items-center gap-3 sm:mt-9'>
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

              <div className='mt-7 flex flex-wrap items-center gap-5 sm:mt-8'>
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
            </AnimatedGroup>
          </div>

          <AnimatedGroup variants={transitionVariants}>
            <div className='relative overflow-hidden'>
              <ImageAnimation
                src={blogging}
                label={t.a11y.heroIllustration}
                playLabel={t.a11y.playAnimation}
                pauseLabel={t.a11y.pauseAnimation}
              />
            </div>
          </AnimatedGroup>
        </section>
      </div>
    </HeroHighlight>
  )
}

export default Hero

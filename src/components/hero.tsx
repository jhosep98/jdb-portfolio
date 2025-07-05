import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import type { Language } from '@/types'
import { ArrowRight } from 'lucide-react'
import type { Variants } from 'motion'
import type * as React from 'react'
import { HeroHeader, type MenuItem } from './header'
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

interface HeroSectionProps {
  title: string
  tag: string
  labelFirstButton: string
  labelSecondButton: string
  menuItems: MenuItem[]
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  tag,
  labelFirstButton,
  labelSecondButton,
  menuItems,
}) => (
  <>
    <HeroHeader menuItems={menuItems} />

    <HeroHighlight containerClassName='min-h-screen flex items-center justify-center'>
      <section className='overflow-hidden'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='text-center sm:mx-auto lg:mr-auto lg:mt-0'>
            <AnimatedGroup variants={transitionVariants}>
              <span className='hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 pr-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950'>
                <span className='text-foreground text-sm'>👋 {tag}</span>
              </span>
            </AnimatedGroup>

            <TextEffect
              preset='fade-in-blur'
              speedSegment={0.3}
              as='h1'
              className='mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] max-w-4xl font-semibold text-center mx-auto'
            >
              {title}
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className='mt-12 flex flex-col items-center justify-center gap-2 md:flex-row'
            >
              <Button key={1} asChild size='lg' className='rounded-xl px-5 text-base'>
                <a href='#about'>
                  <span className='text-nowrap'>{labelFirstButton}</span>
                  <ArrowRight className='size-4' />
                </a>
              </Button>

              <Button key={2} asChild size='lg' variant='ghost' className='h-10.5 rounded-xl px-5'>
                <a href={import.meta.env.PUBLIC_CALENDLY_EVENT} target='_blank' rel='noreferrer'>
                  <span className='text-nowrap'>{labelSecondButton}</span>
                  <ArrowRight className='size-4' />
                </a>
              </Button>
            </AnimatedGroup>
          </div>
        </div>

        {/* <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className='relative mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20'>
              <div
                aria-hidden
                className='bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%'
              />
              <div className='inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1'>
                <ImageAnimation src={blogging} />
              </div>
            </div>
          </AnimatedGroup> */}
      </section>
    </HeroHighlight>
  </>
)

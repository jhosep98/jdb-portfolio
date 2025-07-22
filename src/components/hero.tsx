import { AnimatedGroup } from '@/components/ui/animated-group'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { ArrowRight } from 'lucide-react'
import type { Variants } from 'motion'
import type * as React from 'react'
import { HeroHeader, type MenuItem } from './header'
import { HeroHighlight } from './ui/hero-highlight'
import blogging from '@/assets/blogging.json'
import { ImageAnimation } from '@/components/image-animation'

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

export const HeroSection: React.FC = () => (
  <>
    {/* <HeroHighlight containerClassName="min-h-screen flex items-center justify-center"> */}
    <div className='min-h-screen flex items-center justify-center'>
      <div className='mx-auto max-w-6xl px-6 lg:px-12 pt-14 md:pt-0'>
        <section className='overflow-hidden grid gap-12 md:gap-6 md:grid-cols-2 items-center'>
          <div>
            <AnimatedGroup variants={transitionVariants}>
              <span className='hover:bg-background dark:hover:border-t-border bg-muted group flex w-fit items-center gap-4 rounded-full border p-1 pl-4 pr-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 mx-auto md:mx-0'>
                <span className='text-foreground text-sm'>
                  👋 It's Jhosep, I'm Full Stack Developer!
                </span>
              </span>
            </AnimatedGroup>

            <TextEffect
              preset='fade-in-blur'
              speedSegment={0.3}
              as='h1'
              className='mt-8 text-balance text-center md:text-left text-6xl md:text-7xl font-semibold tracking-tight'
            >
              I'm here to help you build your next project!
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
              className='mt-8 md:mt-12 flex items-center justify-center md:justify-start'
            >
              <div className='flex flex-wrap justify-center gap-6'>
                <a
                  href='https://www.linkedin.com/in/jhosep-davila/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  className='text-muted-foreground hover:text-primary block'
                >
                  <svg
                    className='size-6'
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 24 24'
                    role='img'
                    aria-label='LinkedIn'
                  >
                    <path
                      fill='currentColor'
                      d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
                    />
                  </svg>
                </a>

                <a
                  href='https://github.com/jhosep98'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                  className='text-muted-foreground hover:text-primary block'
                >
                  <svg
                    className='size-6'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-label='GitHub'
                    role='img'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                    <path d='M9 18c-4.51 2-5-2-7-2' />
                  </svg>
                </a>
              </div>
              {/* <Button key={1} asChild size="lg" className="rounded-xl px-5">
                  <a href="#about">
                    <span className="text-nowrap">See more</span>
                    <ArrowRight className="size-4" />
                  </a>
                </Button>

                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-10.5 rounded-xl px-5"
                >
                  <a
                    href={import.meta.env.PUBLIC_CALENDLY_EVENT}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-nowrap">Book a call</span>
                    <ArrowRight className="size-4" />
                  </a>
                </Button> */}
            </AnimatedGroup>
          </div>

          <AnimatedGroup variants={transitionVariants}>
            <div className='relative overflow-hidden'>
              <ImageAnimation src={blogging} />
            </div>
          </AnimatedGroup>

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
      </div>
    </div>
    {/* </HeroHighlight> */}
  </>
)

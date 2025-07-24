import { AnimatedGroup } from '@/components/ui/animated-group'
import { TextEffect } from '@/components/ui/text-effect'
import type { Variants } from 'motion'
import type * as React from 'react'
import blogging from '@/assets/blogging.json'
import { ImageAnimation } from '@/components/image-animation'
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

export const HeroSection: React.FC = () => (
  <>
    <HeroHighlight containerClassName='md:min-h-screen flex items-center justify-center'>
      {/* <div className='min-h-screen flex items-center justify-center'> */}
      <div className='mx-auto max-w-6xl px-6 lg:px-12 pt-26 lg:pt-0'>
        <section className='overflow-hidden grid gap-12 lg:gap-6 lg:grid-cols-2 items-center'>
          <div>
            <AnimatedGroup variants={transitionVariants}>
              <span className='hover:bg-background dark:hover:border-t-border bg-muted group flex w-fit items-center gap-4 rounded-full border p-1 pl-4 pr-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 mx-auto lg:mx-0'>
                <span className='text-foreground text-sm'>👋 It's Jhosep, I'm Web Developer!</span>
              </span>
            </AnimatedGroup>

            <TextEffect
              preset='fade-in-blur'
              speedSegment={0.3}
              as='h1'
              className='mt-8 text-center lg:text-left text-6xl lg:text-7xl font-semibold tracking-tight'
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
              className='mt-8 lg:mt-12 flex items-center justify-center lg:justify-start'
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
                    width='1em'
                    height='1em'
                    viewBox='0 0 24 24'
                    role='img'
                    aria-label='GitHub'
                  >
                    <mask id='lineMdGithubLoop0' width='24' height='24' x='0' y='0'>
                      <g fill='currentColor'>
                        <ellipse cx='9.5' cy='9' rx='1.5' ry='1' />
                        <ellipse cx='14.5' cy='9' rx='1.5' ry='1' />
                      </g>
                    </mask>
                    <g
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                    >
                      <path
                        strokeDasharray='32'
                        strokeDashoffset='32'
                        d='M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3'
                      >
                        <animate
                          fill='freeze'
                          attributeName='stroke-dashoffset'
                          dur='0.7s'
                          values='32;0'
                        />
                      </path>
                      <path
                        strokeDasharray='10'
                        strokeDashoffset='10'
                        d='M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5'
                      >
                        <animate
                          attributeName='d'
                          dur='3s'
                          repeatCount='indefinite'
                          values='M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5'
                        />
                        <animate
                          fill='freeze'
                          attributeName='stroke-dashoffset'
                          begin='0.8s'
                          dur='0.2s'
                          values='10;0'
                        />
                      </path>
                    </g>
                    <rect
                      width='8'
                      height='4'
                      x='8'
                      y='11'
                      fill='currentColor'
                      mask='url(#lineMdGithubLoop0)'
                    >
                      <animate
                        attributeName='y'
                        dur='10s'
                        keyTimes='0;0.45;0.46;0.54;0.55;1'
                        repeatCount='indefinite'
                        values='11;11;7;7;11;11'
                      />
                    </rect>
                  </svg>
                </a>
              </div>
            </AnimatedGroup>
          </div>

          <AnimatedGroup variants={transitionVariants}>
            <div className='relative overflow-hidden'>
              <ImageAnimation src={blogging} />
            </div>
          </AnimatedGroup>
        </section>
      </div>
    </HeroHighlight>
  </>
)

'use client'

import * as React from 'react'
import SectionHeading from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { useLocale } from '@/providers/locale-provider'

interface ExperienceProps {
  headingLevel?: 'h1' | 'h2'
}

const Experience: React.FC<ExperienceProps> = ({ headingLevel = 'h2' }) => {
  const { t } = useLocale()
  const data = t.experience.items
  const ItemHeading = headingLevel === 'h1' ? 'h2' : 'h3'
  const timelineRef = React.useRef<HTMLDivElement>(null)
  const timelineFillRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const timeline = timelineRef.current
    const fill = timelineFillRef.current
    if (!timeline || !fill) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationFrame: number | null = null

    const updateProgress = () => {
      animationFrame = null

      if (reducedMotion.matches) {
        fill.style.transform = 'scaleY(1)'
        fill.style.opacity = '1'
        return
      }

      const rect = timeline.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const animationStart = viewportHeight * 0.75
      const animationEnd = viewportHeight * 0.3
      const travelDistance = rect.height + animationStart - animationEnd
      const progress = Math.min(1, Math.max(0, (animationStart - rect.top) / travelDistance))

      fill.style.transform = `scaleY(${progress})`
      fill.style.opacity = String(Math.min(1, progress * 4))
    }

    const requestUpdate = () => {
      if (animationFrame === null) animationFrame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    reducedMotion.addEventListener('change', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      reducedMotion.removeEventListener('change', requestUpdate)
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section id='experience' aria-labelledby='experience-heading' className='scroll-mt-12 pt-32'>
      <div className='mx-auto max-w-6xl space-y-12 px-6'>
        <SectionHeading index={2} section='experience' level={headingLevel} />

        <div className='w-full'>
          <div ref={timelineRef} className='relative space-y-10 md:space-y-20'>
            {data.map((item) => (
              <article
                key={`${item.company}-${item.date}`}
                className='flex justify-start md:gap-10'
              >
                <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
                  <div className='absolute left-3 flex size-10 items-center justify-center rounded-full'>
                    <div
                      className={cn(
                        'size-4 rounded-full border bg-secondary',
                        item.current && 'border-primary bg-primary/25',
                      )}
                    />
                  </div>
                  <span className='hidden md:block md:pl-20 font-mono text-sm text-muted-foreground'>
                    {item.date}
                  </span>
                </div>

                <div className='relative pl-20 pr-4 md:pl-4 w-full'>
                  <span className='md:hidden mb-4 block font-mono text-sm text-muted-foreground'>
                    {item.date}
                  </span>

                  <div className='flex flex-wrap items-center gap-3 mb-1'>
                    <ItemHeading className='text-xl font-semibold'>{item.company}</ItemHeading>
                    {item.current && (
                      <span className='inline-flex items-center gap-1.5 rounded-full border border-primary/35 bg-primary/15 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.14em] text-primary uppercase'>
                        <span className='size-1.5 rounded-full bg-primary' />
                        {t.experience.present}
                      </span>
                    )}
                  </div>

                  <p className='mb-4 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground'>
                    {item.role}
                  </p>

                  <ul className='list-disc space-y-2 pl-6 text-sm text-muted-foreground'>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            <div className='absolute inset-y-0 left-8 w-[2px] overflow-hidden bg-gradient-to-b from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'>
              <div
                ref={timelineFillRef}
                className='exp-rail-fill absolute inset-x-0 top-0 h-full w-[2px] rounded-full bg-gradient-to-t from-primary from-[0%] to-transparent'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

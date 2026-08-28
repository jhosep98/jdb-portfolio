'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import * as React from 'react'
import SectionHeading from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { useLocale } from '@/providers/locale-provider'

const Experience: React.FC = () => {
  const { t } = useLocale()
  const data = t.experience.items
  const ref = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState(0)

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-measure when the translated bullets change the rail height.
  React.useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [data])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <section id='experience' className='scroll-mt-12 pt-32'>
      <div className='mx-auto max-w-5xl space-y-14 px-6'>
        <SectionHeading index={2} section='experience' />

        <div className='w-full' ref={containerRef}>
          <div ref={ref} className='relative space-y-10 md:space-y-20'>
            {data.map((item) => (
              <div key={`${item.company}-${item.date}`} className='flex justify-start md:gap-10'>
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
                    <h3 className='text-xl font-semibold'>{item.company}</h3>
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
              </div>
            ))}

            <div
              style={{
                height: `${height}px`,
              }}
              className='absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className='absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary to-transparent from-[0%] rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

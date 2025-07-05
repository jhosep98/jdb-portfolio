import { motion, useScroll, useTransform } from 'motion/react'
import * as React from 'react'

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Experience: React.FC<{ data: TimelineEntry[] }> = ({ data }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <section id='experience' className='py-16 md:py-32'>
      <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
        <div>
          <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
            Experience
          </h2>
        </div>

        <div className='w-full' ref={containerRef}>
          <div ref={ref} className='relative'>
            {data.map((item) => (
              <div key={item.title} className='flex justify-start pt-10 md:pt-40 md:gap-10'>
                <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
                  <div className='h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center'>
                    <div className='h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2' />
                  </div>
                  <h3 className='hidden md:block text-xl md:pl-20 md:text-2xl font-bold'>
                    {item.title}
                  </h3>
                </div>

                <div className='relative pl-20 pr-4 md:pl-4 w-full'>
                  <h3 className='md:hidden block text-2xl mb-4 text-left font-bold'>
                    {item.title}
                  </h3>
                  {item.content}{' '}
                </div>
              </div>
            ))}

            <div
              style={{
                height: `${height}px`,
              }}
              className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className='absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary via-violet-900 to-transparent from-[0%] via-[10%] rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import dynamic from 'next/dynamic'
import * as React from 'react'
import { useLocale } from '@/providers/locale-provider'

const ImageAnimation = dynamic(() => import('@/components/image-animation'), {
  ssr: false,
})

const ANIMATION_SRC = '/hero-animation.json'

const HeroAnimation: React.FC = () => {
  const { t } = useLocale()
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className='relative aspect-video w-full overflow-hidden'>
      {visible && (
        <ImageAnimation
          src={ANIMATION_SRC}
          label={t.a11y.heroIllustration}
          playLabel={t.a11y.playAnimation}
          pauseLabel={t.a11y.pauseAnimation}
        />
      )}
    </div>
  )
}

export default HeroAnimation

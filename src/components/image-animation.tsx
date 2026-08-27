'use client'

import { Lottie } from 'lottie-react'
import { cn } from '@/lib/utils'

interface ImageAnimationProps {
  src: string | object
  className?: string
}

const ImageAnimation = ({ src, className }: ImageAnimationProps) => {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col drop-shadow-xl drop-shadow-zinc-950/15 dark:drop-shadow-zinc-950/5 py-8',
        className,
      )}
    >
      <Lottie
        src={src}
        loop
        autoplay
        className='h-full w-full'
        aria-label='Person working with laptop'
        role='img'
        title='Person working with laptop'
      />
    </div>
  )
}

export default ImageAnimation

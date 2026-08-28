'use client'

import { Lottie } from 'lottie-react'
import { cn } from '@/lib/utils'

interface ImageAnimationProps {
  src: string | object
  label: string
  className?: string
}

const ImageAnimation = ({ src, label, className }: ImageAnimationProps) => {
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
        aria-label={label}
        role='img'
        title={label}
      />
    </div>
  )
}

export default ImageAnimation

'use client'

import { useLottie } from 'lottie-react'
import { cn } from '@/lib/utils'

interface ImageAnimationProps<T> {
  src: T
  className?: string
}

const ImageAnimation = <T,>({ src, className }: ImageAnimationProps<T>) => {
  const options = {
    animationData: src,
    loop: true,
    autoplay: true,
    'aria-label': 'Person working with laptop',
    role: 'img',
    title: 'Person working with laptop',
  }

  const { View } = useLottie(options)

  return (
    <div
      className={cn(
        'flex h-full w-full flex-col drop-shadow-xl drop-shadow-zinc-950/15 dark:drop-shadow-zinc-950/5 py-8',
        className,
      )}
    >
      {View}
    </div>
  )
}

export default ImageAnimation

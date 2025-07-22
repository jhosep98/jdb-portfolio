import { cn } from '@/lib/utils'
import { useLottie } from 'lottie-react'

interface ImageAnimationProps<T> {
  src: T
  className?: string
}

export const ImageAnimation = <T,>({ src, className }: ImageAnimationProps<T>) => {
  const options = {
    animationData: src,
    loop: true,
    autoplay: true,
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

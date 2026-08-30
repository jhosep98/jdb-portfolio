'use client'

import {
  Lottie,
  LottieDisplay,
  LottieState,
  LottieSubscription,
  useLottieInstance,
} from 'lottie-react'
import { Pause, Play } from 'lucide-react'
import { useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ImageAnimationProps {
  /** Path or URL to the Lottie JSON — kept out of the JS bundle and fetched at runtime. */
  src: string
  label: string
  playLabel: string
  pauseLabel: string
  className?: string
}

/**
 * Draws the animation and pairs it with a pause affordance — WCAG 2.2.2 (Pause,
 * Stop, Hide). Playback is started here instead of via the `autoplay` prop so it
 * stays tied to the control, and it is skipped when the visitor asks for reduced
 * motion.
 */
const AnimationBody = ({
  label,
  playLabel,
  pauseLabel,
}: Pick<ImageAnimationProps, 'label' | 'playLabel' | 'pauseLabel'>) => {
  const lottie = useLottieInstance()
  const isPlaying = lottie.state === LottieState.playing

  // biome-ignore lint/correctness/useExhaustiveDependencies: mount-only; lottie.play/subscribe are stable callbacks.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    lottie.play() // if the animation is already loaded
    return lottie.subscribe(LottieSubscription.ready, () => lottie.play()) // if it loads later
  }, [])

  return (
    <>
      <LottieDisplay className='h-full w-full' role='img' aria-label={label} />

      <button
        type='button'
        onClick={() => (isPlaying ? lottie.pause() : lottie.play())}
        aria-label={isPlaying ? pauseLabel : playLabel}
        aria-pressed={isPlaying}
        className='absolute right-2 bottom-2 z-10 flex size-8 items-center justify-center rounded-full border bg-background/70 text-muted-foreground backdrop-blur-sm transition-colors hover:text-primary'
      >
        {isPlaying ? <Pause className='size-4' /> : <Play className='size-4' />}
      </button>
    </>
  )
}

const ImageAnimation = ({ src, label, playLabel, pauseLabel, className }: ImageAnimationProps) => {
  return (
    <Lottie
      src={src}
      loop
      className={cn(
        'relative flex h-full w-full flex-col py-8 drop-shadow-xl drop-shadow-zinc-950/15 dark:drop-shadow-zinc-950/5',
        className,
      )}
    >
      <AnimationBody label={label} playLabel={playLabel} pauseLabel={pauseLabel} />
    </Lottie>
  )
}

export default ImageAnimation

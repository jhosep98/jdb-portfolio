'use client'

import Image, { type StaticImageData } from 'next/image'
import { useRef, useState } from 'react'

interface ProjectPreviewProps {
  poster: StaticImageData
  posterAlt: string
  videoSrc: string
}

const ProjectPreview = ({ poster, posterAlt, videoSrc }: ProjectPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playPreview = () => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canHover || prefersReducedMotion) return

    const video = videoRef.current
    if (!video) return

    video.currentTime = 0
    void video.play().catch(() => setIsPlaying(false))
  }

  const stopPreview = () => {
    const video = videoRef.current
    if (!video) return

    setIsPlaying(false)
    video.pause()
    video.currentTime = 0
  }

  return (
    <div className='relative aspect-[1440/790] overflow-hidden bg-muted'>
      <Image
        src={poster}
        alt={posterAlt}
        fill
        placeholder='blur'
        sizes='(min-width: 640px) 50vw, 100vw'
        className='object-cover object-top'
      />
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        preload='none'
        aria-label={`${posterAlt} animated preview`}
        onMouseEnter={playPreview}
        onMouseLeave={stopPreview}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className={`absolute inset-0 size-full object-cover object-top transition-opacity duration-300 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export default ProjectPreview

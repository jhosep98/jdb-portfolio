'use client'

import type * as React from 'react'
import { cn } from '@/lib/utils'

// SVG dot patterns per theme. The hover variant is revealed through a radial
// mask that follows the pointer (CSS custom properties, no JS animation lib).
const DOT_LIGHT = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`
const DOT_LIGHT_HOVER = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='oklch(60% 0.15 20)' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`
const DOT_DARK = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`
const DOT_DARK_HOVER = DOT_LIGHT_HOVER

const HOVER_MASK =
  'radial-gradient(200px circle at var(--hero-x, -200px) var(--hero-y, -200px), black 0%, transparent 100%)'

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    currentTarget.style.setProperty('--hero-x', `${clientX - left}px`)
    currentTarget.style.setProperty('--hero-y', `${clientY - top}px`)
  }

  return (
    <div
      className={cn('group relative flex w-full items-center justify-center', containerClassName)}
      onMouseMove={handleMouseMove}
      aria-label='background dots'
      role='img'
    >
      <div
        className='pointer-events-none absolute inset-0 dark:hidden'
        style={{ backgroundImage: DOT_LIGHT }}
      />
      <div
        className='pointer-events-none absolute inset-0 hidden dark:block'
        style={{ backgroundImage: DOT_DARK }}
      />
      <div
        className='pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden'
        style={{
          backgroundImage: DOT_LIGHT_HOVER,
          WebkitMaskImage: HOVER_MASK,
          maskImage: HOVER_MASK,
        }}
      />
      <div
        className='pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block'
        style={{
          backgroundImage: DOT_DARK_HOVER,
          WebkitMaskImage: HOVER_MASK,
          maskImage: HOVER_MASK,
        }}
      />

      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  )
}

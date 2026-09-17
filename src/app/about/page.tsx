import type { Metadata } from 'next'
import About from '@/components/about'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn about Jhosep Davila, a Frontend Engineer in Buenos Aires specializing in React, TypeScript, and Next.js.',
  path: '/about',
})

export default function AboutPage() {
  return <About headingLevel='h1' />
}

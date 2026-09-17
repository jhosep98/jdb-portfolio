import type { Metadata } from 'next'
import Experience from '@/components/experience'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Experience',
  description:
    'Explore Jhosep Davila’s frontend engineering experience with React, TypeScript, Next.js, GraphQL, and AI-powered workflows.',
  path: '/experience',
})

export default function ExperiencePage() {
  return <Experience headingLevel='h1' />
}

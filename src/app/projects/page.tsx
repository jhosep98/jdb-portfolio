import type { Metadata } from 'next'
import Projects from '@/components/projects'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Selected work',
  description:
    'Selected frontend and full-stack projects by Jhosep Davila, including production websites and AI-powered applications.',
  path: '/projects',
})

export default function ProjectsPage() {
  return <Projects headingLevel='h1' />
}

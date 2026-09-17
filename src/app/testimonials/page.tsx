import type { Metadata } from 'next'
import Testimonials from '@/components/testimonials'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Testimonials',
  description:
    'Read recommendations from people who have worked with Jhosep Davila on software development teams.',
  path: '/testimonials',
})

export default function TestimonialsPage() {
  return <Testimonials headingLevel='h1' />
}

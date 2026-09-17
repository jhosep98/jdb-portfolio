import type { Metadata } from 'next'
import Contact from '@/components/contact'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact Jhosep Davila about Frontend Engineer opportunities and selected web development projects.',
  path: '/contact',
})

export default function ContactPage() {
  return <Contact headingLevel='h1' />
}

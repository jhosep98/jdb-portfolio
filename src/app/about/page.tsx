import type { Metadata } from 'next'
import About from '@/components/about'

export const metadata: Metadata = {
  title: 'About me - Jhosep Davila',
}

export default function AboutPage() {
  return <About />
}

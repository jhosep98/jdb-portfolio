import type { Metadata } from 'next'
import AboutContent from '@/components/about-content'

export const metadata: Metadata = {
  title: 'About me - Jhosep Davila',
}

export default function AboutPage() {
  return (
    <section id='about' className='pt-36 pb-4 md:pt-44'>
      <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 min-h-[420px]'>
        <div>
          <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
            About me
          </h2>
        </div>

        <AboutContent />
      </div>
    </section>
  )
}

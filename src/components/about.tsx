import type * as React from 'react'
import AboutContent from '@/components/about-content'
import SectionHeading from '@/components/section-heading'

const About: React.FC = () => (
  <section id='about' className='scroll-mt-12 pt-32'>
    <div className='mx-auto min-h-[420px] max-w-5xl space-y-12 px-6'>
      <SectionHeading index={1} section='about' />

      <AboutContent />
    </div>
  </section>
)

export default About

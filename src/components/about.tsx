import type * as React from 'react'
import AboutContent from '@/components/about-content'
import SectionHeading from '@/components/section-heading'

interface AboutProps {
  headingLevel?: 'h1' | 'h2'
}

const About: React.FC<AboutProps> = ({ headingLevel = 'h2' }) => (
  <section id='about' aria-labelledby='about-heading' className='scroll-mt-12 pt-32'>
    <div className='mx-auto min-h-105 max-w-6xl space-y-12 px-6'>
      <SectionHeading index={1} section='about' level={headingLevel} />

      <AboutContent />
    </div>
  </section>
)

export default About

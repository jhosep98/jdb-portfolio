import type * as React from 'react'
import AboutContent from './about-content'

const About: React.FC = () => {
  return (
    <section id='about' className='pt-26 pb-4 md:pt-44'>
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

export default About

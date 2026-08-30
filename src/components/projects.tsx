import type * as React from 'react'
import ProjectsList from '@/components/projects-list'
import SectionHeading from '@/components/section-heading'

const Projects: React.FC = () => (
  <section id='work' className='scroll-mt-12 pt-32'>
    <div className='mx-auto max-w-6xl space-y-12 px-6'>
      <SectionHeading index={3} section='work' />

      <ProjectsList />
    </div>
  </section>
)

export default Projects

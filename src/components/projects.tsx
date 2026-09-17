import type * as React from 'react'
import ProjectsList from '@/components/projects-list'
import SectionHeading from '@/components/section-heading'

interface ProjectsProps {
  headingLevel?: 'h1' | 'h2'
}

const Projects: React.FC<ProjectsProps> = ({ headingLevel = 'h2' }) => (
  <section id='work' aria-labelledby='work-heading' className='scroll-mt-12 pt-32'>
    <div className='mx-auto max-w-6xl space-y-12 px-6'>
      <SectionHeading index={3} section='work' level={headingLevel} />

      <ProjectsList itemHeadingLevel={headingLevel === 'h1' ? 'h2' : 'h3'} />
    </div>
  </section>
)

export default Projects

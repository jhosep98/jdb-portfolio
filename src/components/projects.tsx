import type * as React from 'react'
import { ProjectsList } from './projects-list'

export const ProjectsSection: React.FC = () => (
  <section id='projects' className='pt-26 pb-4 md:pt-32'>
    <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
      <div>
        <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
          Projects
        </h2>
      </div>

      <ProjectsList />
    </div>
  </section>
)

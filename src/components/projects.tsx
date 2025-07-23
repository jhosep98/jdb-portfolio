import * as React from 'react'
import { useGetRepos } from '@/hooks/useGetRepos'
import { ProjectsList } from './projects-list'

export const ProjectsSection: React.FC = () => (
  <section id='projects' className='py-16 md:py-32'>
    <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
      <div>
        <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
          Projects
        </h2>
      </div>

      <React.Suspense fallback={<div>Loading...</div>}>
        <ProjectsList fetchRepos={useGetRepos()} />
      </React.Suspense>
    </div>
  </section>
)

import type { GithubRepo } from '@/types'
import * as React from 'react'
import { IntegrationCard } from './integraton-card'

interface ProjectsListProps {
  fetchRepos: Promise<GithubRepo[]>
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ fetchRepos }) => {
  const repos = React.use(fetchRepos)

  return (
    <div className='mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
      {repos.map((repo) => (
        <IntegrationCard
          key={repo.name}
          title={repo.name}
          description={repo.description}
          link={repo.html_url}
        >
          <img
            src='https://res.cloudinary.com/diusjfaoe/image/upload/v1751422646/jmdev-studio/nestjs_wookat.svg'
            alt={repo.name}
            width='120'
            height='120'
            loading='lazy'
            decoding='async'
            className='object-contain'
          />
        </IntegrationCard>
      ))}
    </div>
  )
}

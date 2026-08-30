'use client'

import Image from 'next/image'
import type * as React from 'react'
import { useLocale } from '@/providers/locale-provider'
import IntegrationCard from './integration-card'

const PROJECT_ASSETS: Record<string, { link?: string; image: string; alt: string }> = {
  'omnivest-ai': {
    link: 'https://github.com/jhosep98/omnivest-ai',
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495138/jmdev-studio/typescript_mabr0s.svg',
    alt: 'typescript',
  },
  'jdb-portfolio': {
    link: 'https://github.com/jhosep98/jdb-portfolio',
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495136/jmdev-studio/nextjs_uzrc3s.svg',
    alt: 'nextjs',
  },
  webbuilder: {
    // Private repo — no public link. isjustaweb.com is not live yet either.
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495138/jmdev-studio/typescript_mabr0s.svg',
    alt: 'typescript',
  },
}

const ProjectsList: React.FC = () => {
  const { t } = useLocale()

  return (
    <div className='grid gap-6 sm:grid-cols-2'>
      {t.projects.items.map((project) => {
        const assets = PROJECT_ASSETS[project.key]

        if (!assets) return null

        return (
          <IntegrationCard
            key={project.key}
            title={project.title}
            description={project.description}
            link={assets.link}
            stack={project.stack}
            viewLabel={t.projects.viewRepository}
            isPrivate={project.private}
            privateLabel={t.projects.privateLabel}
          >
            <Image
              src={assets.image}
              alt={assets.alt}
              width={120}
              height={120}
              className='object-contain'
            />
          </IntegrationCard>
        )
      })}
    </div>
  )
}

export default ProjectsList

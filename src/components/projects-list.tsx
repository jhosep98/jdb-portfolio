'use client'

import Image from 'next/image'
import type * as React from 'react'
import jmdevStudioPreview from '@/assets/projects/images/preview-jmdevstudio-landing.png'
import kayanaPreview from '@/assets/projects/images/preview-kayana-landing.png'
import { useLocale } from '@/providers/locale-provider'
import IntegrationCard from './integration-card'
import ProjectPreview from './project-preview'

interface ProjectAssets {
  link?: string
  image: string
  alt: string
  preview?: {
    image: typeof jmdevStudioPreview
    video: string
  }
}

const PROJECT_ASSETS: Record<string, ProjectAssets> = {
  'omnivest-ai': {
    link: 'https://github.com/jhosep98/omnivest-ai',
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495138/jmdev-studio/typescript_mabr0s.svg',
    alt: 'typescript',
  },
  'jmdev-studio': {
    link: 'https://www.jmdevstudio.com/',
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495136/jmdev-studio/nextjs_uzrc3s.svg',
    alt: 'nextjs',
    preview: {
      image: jmdevStudioPreview,
      video: '/projects/preview-jmdevstudio-landing.webm',
    },
  },
  'kayana-cacao': {
    link: 'https://www.kayanacacao.com/',
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495138/jmdev-studio/typescript_mabr0s.svg',
    alt: 'typescript',
    preview: {
      image: kayanaPreview,
      video: '/projects/preview-kayana-landing.webm',
    },
  },
  webbuilder: {
    // Private repo — no public link. isjustaweb.com is not live yet either.
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495138/jmdev-studio/typescript_mabr0s.svg',
    alt: 'typescript',
  },
}

interface ProjectsListProps {
  itemHeadingLevel?: 'h2' | 'h3'
}

const ProjectsList: React.FC<ProjectsListProps> = ({ itemHeadingLevel = 'h3' }) => {
  const { t } = useLocale()

  return (
    <ul className='grid gap-6 sm:grid-cols-2'>
      {t.projects.items.map((project) => {
        const assets = PROJECT_ASSETS[project.key]

        if (!assets) return null

        return (
          <li key={project.key}>
            <IntegrationCard
              title={project.title}
              headingLevel={itemHeadingLevel}
              description={project.description}
              link={assets.link}
              stack={project.stack}
              viewLabel={t.projects.viewRepository}
              isPrivate={project.private}
              privateLabel={t.projects.privateLabel}
              preview={
                assets.preview ? (
                  <ProjectPreview
                    poster={assets.preview.image}
                    posterAlt={t.projects.previewLabel(project.title)}
                    videoSrc={assets.preview.video}
                  />
                ) : undefined
              }
            >
              {!assets.preview && (
                <Image
                  src={assets.image}
                  alt={assets.alt}
                  width={120}
                  height={120}
                  className='object-contain'
                />
              )}
            </IntegrationCard>
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectsList

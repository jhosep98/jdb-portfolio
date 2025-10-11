import Image from 'next/image'
import type * as React from 'react'
import IntegrationCard from './integration-card'

const REPOS = [
  {
    title: 'jmdevstudio-library',
    description:
      'A modern React component library built with TypeScript, Tailwind CSS, and Radix UI primitives. This library provides a collection of reusable, accessible, and customizable UI components for React applications.',
    link: 'https://github.com/jhosep98/jmdevstudio-library',
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1751422647/jmdev-studio/storybook-icon_wnhh7f.svg',
    alt: 'storybook-icon',
  },
  {
    title: 'theme-extractor',
    description:
      'Extracts theme (colors, typography, etc.) from websites and provides it in a structured JSON format.',
    link: 'https://github.com/jhosep98/theme-extractor',
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495138/jmdev-studio/typescript_mabr0s.svg',
    alt: 'typescript',
  },
  {
    title: 'jdb-portfolio',
    description:
      "A modern, responsive personal portfolio website built with Astro, React, and TailwindCSS. This portfolio showcases Jhosep Davila's work as a Full Stack Developer with interactive animations and a clean, professional design.",
    link: 'https://github.com/jhosep98/jdb-portfolio',
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495136/jmdev-studio/astro_zisnli.svg',
    alt: 'astro',
  },
]

const ProjectsList: React.FC = () => {
  return (
    <div className='mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
      {REPOS.map((repo) => (
        <IntegrationCard
          key={repo.title}
          title={repo.title}
          description={repo.description}
          link={repo.link}
        >
          <Image
            src={repo.image}
            alt={repo.alt}
            width={120}
            height={120}
            className='object-contain'
          />
        </IntegrationCard>
      ))}
    </div>
  )
}

export default ProjectsList

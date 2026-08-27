import Image from 'next/image'
import type * as React from 'react'
import IntegrationCard from './integration-card'

const REPOS = [
  {
    title: 'OmniVest AI',
    description:
      'OmniVest AI is a personal finance ecosystem and trading journal designed to consolidate your portfolio, track derivatives trading, and leverage AI automation for smart financial insights.',
    link: 'https://github.com/jhosep98/omnivest-ai',
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495138/jmdev-studio/typescript_mabr0s.svg',
    alt: 'typescript',
  },
  {
    title: 'jdb-portfolio',
    description:
      "A modern, responsive personal portfolio website built with NextJS, React, and TailwindCSS. This portfolio showcases Jhosep Davila's work as a Full Stack Developer with interactive animations and a clean, professional design.",
    link: 'https://github.com/jhosep98/jdb-portfolio',
    image:
      'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495136/jmdev-studio/nextjs_uzrc3s.svg',
    alt: 'nextjs',
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

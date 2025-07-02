import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import type * as React from 'react'

const SKILLS = [
  {
    name: 'React',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495137/jmdev-studio/react_z2n3qa.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495138/jmdev-studio/typescript_mabr0s.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495137/jmdev-studio/tailwindcss_vonwun.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495136/jmdev-studio/nodejs_yyrshc.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495136/jmdev-studio/nextjs_uzrc3s.svg',
  },
  {
    name: 'Astro',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1725495136/jmdev-studio/astro_zisnli.svg',
  },
  {
    name: 'Storybook',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751422647/jmdev-studio/storybook-icon_wnhh7f.svg',
  },
  {
    name: 'Html',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751422647/jmdev-studio/html-5_cgcgl5.svg',
  },
  {
    name: 'Css',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751422646/jmdev-studio/css-3_z5xdpl.svg',
  },
  {
    name: 'Git',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751422737/jmdev-studio/git-icon_ykgqjq.svg',
  },
  {
    name: 'Mui',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751422647/jmdev-studio/material-ui_ngbgnm.svg',
  },
  {
    name: 'NestJS',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751422646/jmdev-studio/nestjs_wookat.svg',
  },
  {
    name: 'Mysql',
    icon: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751422646/jmdev-studio/mysql_mobrbl.svg',
  },
]

export const SkillsSection: React.FC = () => (
  <section className='bg-background overflow-hidden py-16'>
    <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
      <div>
        <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
          Skills
        </h2>
      </div>

      <div className='flex flex-col items-center md:flex-row'>
        <div className='relative py-6 md:w-full'>
          <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
            {SKILLS.map((skill) => (
              <div className='flex' key={skill.name}>
                <img
                  className='mx-auto h-12 w-fit'
                  src={skill.icon}
                  alt={skill.name}
                  height='48'
                  width='auto'
                />
              </div>
            ))}
          </InfiniteSlider>

          <div className='bg-linear-to-r from-background absolute inset-y-0 left-0 w-20' />
          <div className='bg-linear-to-l from-background absolute inset-y-0 right-0 w-20' />

          <ProgressiveBlur
            className='pointer-events-none absolute left-0 top-0 h-full w-20'
            direction='left'
            blurIntensity={1}
          />

          <ProgressiveBlur
            className='pointer-events-none absolute right-0 top-0 h-full w-20'
            direction='right'
            blurIntensity={1}
          />
        </div>
      </div>
    </div>
  </section>
)

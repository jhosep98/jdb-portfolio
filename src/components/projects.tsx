import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import type * as React from 'react'

export const ProjectsSection: React.FC = () => (
  <section id='projects' className='py-16 md:py-32'>
    <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
      <div>
        <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
          Projects
        </h2>
      </div>

      <div className='mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        <IntegrationCard
          title='easy-turnos'
          description='Easy-turnos application to manage appointments.'
          link='https://github.com/jhosep98/easy-turnos'
        >
          <img
            src='https://res.cloudinary.com/diusjfaoe/image/upload/v1751422646/jmdev-studio/nestjs_wookat.svg'
            alt='easy-turnos'
            width='120'
            height='120'
            loading='lazy'
            decoding='async'
            className='object-contain'
          />
        </IntegrationCard>

        <IntegrationCard
          title='jdb-portfolio'
          description='Web portfolio showing my self-taught projects and my contact details.Easy-turnos application to manage appointments.'
          link='https://github.com/jhosep98/jdb-portfolio'
        >
          <img
            src='https://res.cloudinary.com/diusjfaoe/image/upload/v1725495136/jmdev-studio/astro_zisnli.svg'
            alt='jdb-portfolio'
            width='120'
            height='120'
            loading='lazy'
            decoding='async'
            className='object-contain'
          />
        </IntegrationCard>

        <IntegrationCard
          title='alkemy-backend-challenge'
          description='API to create, edit, delete and consult all the posts stored in the database.'
          link='https://github.com/jhosep98/alkemy-backend-challenge'
        >
          <img
            src='https://res.cloudinary.com/diusjfaoe/image/upload/v1725495136/jmdev-studio/nodejs_yyrshc.svg'
            alt='alkemy-backend-challenge'
            width='120'
            height='120'
            loading='lazy'
            decoding='async'
            className='object-contain'
          />
        </IntegrationCard>
      </div>
    </div>
  </section>
)

const IntegrationCard: React.FC<{
  title: string
  description: string
  children: React.ReactNode
  link?: string
}> = ({ title, description, children, link }) => (
  <Card className='p-6'>
    <div className='relative'>
      <div className='*:size-10'>{children}</div>

      <div className='space-y-2 py-6'>
        <h3 className='text-base font-medium'>{title}</h3>
        <p className='text-muted-foreground line-clamp-2 text-sm'>{description}</p>
      </div>

      <div className='flex gap-3 border-t border-dashed pt-6'>
        <Button asChild size='sm' className='gap-1 pr-2 shadow-none'>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`View ${title} project repository`}
          >
            View project repository
            <ChevronRight className='ml-0 !size-3.5 opacity-50' />
          </a>
        </Button>
      </div>
    </div>
  </Card>
)

import { Gemini, GooglePaLM, MagicUI, MediaWiki, Replit, VSCodium } from '@/components/logos'
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
          description='Easy-turnos application to manage turnos.'
          link='https://github.com/jhosep98/easy-turnos'
        >
          <Gemini />
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
        <Button asChild variant='secondary' size='sm' className='gap-1 pr-2 shadow-none'>
          <a href={link}>
            Learn More
            <ChevronRight className='ml-0 !size-3.5 opacity-50' />
          </a>
        </Button>
      </div>
    </div>
  </Card>
)

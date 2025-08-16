import { ChevronRight } from 'lucide-react'
import type * as React from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'

export const IntegrationCard: React.FC<{
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
        <Button asChild size='sm' className='gap-1 pr-2 shadow-none dark:text-white'>
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

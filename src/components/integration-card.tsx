import { ArrowUpRight, ChevronRight, Lock } from 'lucide-react'
import type * as React from 'react'
import { Card } from './ui/card'

interface IntegrationCardProps {
  title: string
  headingLevel?: 'h2' | 'h3'
  description: string
  children?: React.ReactNode
  preview?: React.ReactNode
  link?: string
  stack?: string[]
  viewLabel: string
  isPrivate?: boolean
  privateLabel?: string
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  children,
  description,
  title,
  headingLevel = 'h3',
  link,
  stack,
  viewLabel,
  isPrivate = false,
  privateLabel,
  preview,
}) => {
  const asLink = !isPrivate && Boolean(link)
  const Heading = headingLevel

  const body = (
    <>
      {preview ? (
        <div className='relative -mx-6 -mt-6 mb-6 overflow-hidden border-b'>
          {preview}
          {asLink && (
            <span className='absolute top-3 right-3 rounded-full border bg-background/85 p-2 shadow-sm backdrop-blur-sm'>
              <ArrowUpRight className='size-4 text-foreground' />
            </span>
          )}
        </div>
      ) : (
        <div className='flex items-start justify-between gap-4'>
          <div className='*:size-10'>{children}</div>
          {asLink ? (
            <ArrowUpRight className='size-4 shrink-0 text-muted-foreground' />
          ) : (
            <Lock className='size-4 shrink-0 text-muted-foreground' />
          )}
        </div>
      )}

      <div className={preview ? 'space-y-2.5' : 'mt-6 space-y-2.5'}>
        <Heading className='text-xl font-semibold tracking-tight'>{title}</Heading>
        <p className='line-clamp-2 text-sm text-muted-foreground'>{description}</p>
      </div>

      {stack && stack.length > 0 && (
        <ul className='mt-6 mb-6 flex flex-wrap gap-2'>
          {stack.map((tech) => (
            <li
              key={tech}
              className='rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase'
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      {asLink ? (
        <div className='mt-auto flex min-h-11 items-center gap-2 border-t border-dashed pt-5 text-sm font-medium text-primary'>
          {viewLabel}
          <ChevronRight className='size-3.5' />
        </div>
      ) : (
        <div className='mt-auto flex min-h-11 items-center gap-2 border-t border-dashed pt-5 text-sm font-medium text-muted-foreground'>
          <Lock className='size-3.5' />
          {privateLabel ?? 'Private project'}
        </div>
      )}
    </>
  )

  return (
    <Card
      className={`${preview ? 'overflow-hidden' : ''} ${
        asLink ? 'gap-0 p-6 transition-colors hover:border-primary/40' : 'gap-0 p-6'
      }`}
    >
      {asLink ? (
        <a href={link} target='_blank' rel='noopener noreferrer' className='flex h-full flex-col'>
          {body}
        </a>
      ) : (
        <div className='flex h-full flex-col'>{body}</div>
      )}
    </Card>
  )
}

export default IntegrationCard

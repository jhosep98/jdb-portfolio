import { ArrowUpRight, ChevronRight, Lock } from 'lucide-react'
import type * as React from 'react'
import { Card } from './ui/card'

interface IntegrationCardProps {
  title: string
  description: string
  children: React.ReactNode
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
  link,
  stack,
  viewLabel,
  isPrivate = false,
  privateLabel,
}) => {
  const asLink = !isPrivate && Boolean(link)

  const body = (
    <>
      <div className='flex items-start justify-between gap-4'>
        <div className='*:size-10'>{children}</div>
        {asLink ? (
          <ArrowUpRight className='size-4 shrink-0 text-muted-foreground' />
        ) : (
          <Lock className='size-4 shrink-0 text-muted-foreground' />
        )}
      </div>

      <div className='mt-6 space-y-2.5'>
        <h3 className='text-xl font-semibold tracking-tight'>{title}</h3>
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
    <Card className={asLink ? 'gap-0 p-6 transition-colors hover:border-primary/40' : 'gap-0 p-6'}>
      {asLink ? (
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`${viewLabel}: ${title}`}
          className='flex h-full flex-col'
        >
          {body}
        </a>
      ) : (
        <div className='flex h-full flex-col'>{body}</div>
      )}
    </Card>
  )
}

export default IntegrationCard

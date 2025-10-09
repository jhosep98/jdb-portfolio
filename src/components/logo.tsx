import type * as React from 'react'
import { cn } from '../lib/utils'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className='text-xl font-bold'>JDB.</span>
    </div>
  )
}

export default Logo

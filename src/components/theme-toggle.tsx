'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'
import { Button } from '@/components/ui/button'

const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Button
      type='button'
      variant='outline'
      size='icon'
      className='rounded-md'
      aria-label='Toggle theme'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted ? (
        resolvedTheme === 'dark' ? (
          <Sun className='size-4' />
        ) : (
          <Moon className='size-4' />
        )
      ) : (
        <span className='size-4' />
      )}
    </Button>
  )
}

export default ThemeToggle

'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/providers/locale-provider'

const ThemeToggle: React.FC = () => {
  const { t } = useLocale()
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
      className='rounded-md cursor-pointer'
      aria-label={t.a11y.toggleTheme}
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

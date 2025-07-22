import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import * as React from 'react'

export const ModeToggle = () => {
  const [theme, setThemeState] = React.useState<'theme-light' | 'dark' | 'system'>('theme-light')

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  return (
    <Button
      type='button'
      variant='ghost'
      size='icon'
      className='rounded-full cursor-pointer'
      aria-label={theme === 'dark' ? 'Toggle to light mode' : 'Toggle to dark mode'}
      onClick={() => {
        if (theme === 'dark') {
          setThemeState('theme-light')
        } else {
          setThemeState('dark')
        }
      }}
    >
      <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 duration-200' />

      <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 duration-200' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

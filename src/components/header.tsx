'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import LanguageToggle from '@/components/language-toggle'
import Logo from '@/components/logo'
import ThemeToggle from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLocale } from '@/providers/locale-provider'

const NAV_ANCHORS = ['about', 'experience', 'work', 'testimonials', 'contact'] as const

const Header: React.FC = () => {
  const path = usePathname()
  const { t } = useLocale()
  const [menuState, setMenuState] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string | null>(null)

  const navItems = NAV_ANCHORS.map((anchor) => ({ anchor, name: t.nav[anchor] }))

  React.useEffect(() => {
    if (path !== '/') {
      setActiveSection(null)
      return
    }

    const sections = NAV_ANCHORS.map((anchor) => document.getElementById(anchor)).filter(
      (el): el is HTMLElement => el !== null,
    )

    if (sections.length === 0) return

    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }

        // Sections are observed in document order, so the first visible one wins.
        setActiveSection(sections.find((section) => visible.has(section.id))?.id ?? null)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    for (const section of sections) observer.observe(section)

    return () => observer.disconnect()
  }, [path])

  return (
    <header>
      <nav data-state={menuState && 'active'} className='fixed z-50 w-full px-4 lg:px-6'>
        <div className='bg-background/50 max-w-6xl rounded-2xl border backdrop-blur-lg px-6 mx-auto mt-12'>
          <div className='relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4'>
            <div className='flex w-full justify-between lg:w-auto'>
              <Link
                href='/'
                aria-label={t.a11y.home}
                className='flex min-h-11 items-center space-x-2 lg:min-h-0'
              >
                <Logo />
              </Link>

              <button
                type='button'
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? t.a11y.closeMenu : t.a11y.openMenu}
                className='relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden'
              >
                <Menu className='in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200' />
                <X className='in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200' />
              </button>
            </div>

            <div className='absolute inset-0 m-auto hidden size-fit lg:block'>
              <ul className='flex gap-8 text-sm'>
                {navItems.map((item) => {
                  const isActive = activeSection === item.anchor

                  return (
                    <li key={item.name}>
                      <Link
                        href={`/#${item.anchor}`}
                        className={cn(
                          "relative block py-1 text-muted-foreground duration-150 hover:text-accent-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 after:content-['']",
                          { 'text-primary hover:text-primary after:scale-x-100': isActive },
                        )}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className='bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent'>
              <div className='lg:hidden'>
                <ul className='space-y-6 text-base'>
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={`/#${item.anchor}`}
                        onClick={() => setMenuState(false)}
                        className='flex min-h-11 items-center text-muted-foreground hover:text-accent-foreground block duration-150'
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='flex w-full flex-col items-center gap-3 sm:w-fit sm:flex-row'>
                <LanguageToggle />
                <ThemeToggle />

                <div className='flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit'>
                  <Button asChild variant='outline'>
                    <Link href={process.env.NEXT_PUBLIC_CALENDLY_EVENT ?? '/'} target='_blank'>
                      <span>{t.common.letsTalk}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

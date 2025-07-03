import { Logo } from '@/components/logo'
import type * as React from 'react'

const links = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Experience',
    href: '#experience',
  },
  {
    title: 'Testimonials',
    href: '#testimonials',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const FooterSection: React.FC = () => (
  <footer className='py-16 md:py-32'>
    <div className='mx-auto max-w-5xl px-6'>
      <a href='/' aria-label='go home' className='mx-auto block size-fit'>
        <Logo />
      </a>

      <div className='my-8 flex flex-wrap justify-center gap-6 text-sm'>
        {links.map((link, index) => (
          <a
            key={`${link}-${index + 1}`}
            href={link.href}
            className='text-muted-foreground hover:text-primary block duration-150'
          >
            <span>{link.title}</span>
          </a>
        ))}
      </div>

      <div className='my-8 flex flex-wrap justify-center gap-6 text-sm'>
        <a
          href='/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='text-muted-foreground hover:text-primary block'
        >
          <svg
            className='size-6'
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            role='img'
            aria-label='LinkedIn'
          >
            <path
              fill='currentColor'
              d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
            />
          </svg>
        </a>
      </div>
      <span className='text-muted-foreground block text-center text-sm'>
        {' '}
        © {new Date().getFullYear()} Jhosep Davila, All rights reserved
      </span>
    </div>
  </footer>
)

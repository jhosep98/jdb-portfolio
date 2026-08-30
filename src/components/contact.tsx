'use client'

import { ArrowUpRight, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'
import type * as React from 'react'
import { Toaster } from 'sonner'
import SectionHeading from '@/components/section-heading'
import { GitHubIcon, LinkedInIcon } from '@/components/social-icons'
import { Card, CardContent } from '@/components/ui/card'
import { useLocale } from '@/providers/locale-provider'

// react-hook-form + zod + @emailjs together are ~90 KB of the initial bundle for
// a form that sits below every other section. Split it into its own chunk and
// hold a matching-height skeleton so nothing shifts when it swaps in.
const ContactForm = dynamic(() => import('@/components/contact-form'), {
  ssr: false,
  loading: () => <div className='min-h-[416px] animate-pulse rounded-md bg-muted/40' />,
})

const CHANNELS = [
  {
    label: 'jhosepdb149@gmail.com',
    href: 'mailto:jhosepdb149@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'in/jhosep-davila',
    href: 'https://www.linkedin.com/in/jhosep-davila/',
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'github.com/jhosep98',
    href: 'https://github.com/jhosep98',
    icon: GitHubIcon,
    external: true,
  },
]

const Contact: React.FC = () => {
  const { t } = useLocale()

  return (
    <section id='contact' className='scroll-mt-12 pt-32'>
      <div className='mx-auto max-w-6xl space-y-12 px-6'>
        <SectionHeading index={5} section='contact' />

        <div className='grid items-start gap-10 lg:grid-cols-2 lg:gap-12'>
          <div className='space-y-7'>
            <p className='text-pretty text-muted-foreground'>{t.contact.description}</p>

            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_EVENT ?? '/'}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-between gap-4 rounded-xl border border-primary/40 bg-primary/10 px-5 py-4 transition-colors hover:bg-primary/15'
            >
              <span className='flex flex-col gap-1'>
                <span className='text-[15px] font-semibold'>{t.contact.bookACall}</span>
                <span className='font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase'>
                  {t.contact.callDuration}
                </span>
              </span>
              <ArrowUpRight className='size-4 shrink-0 text-primary' />
            </a>

            <div className='flex flex-col'>
              {CHANNELS.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className='flex min-h-11 items-center gap-3.5 text-sm hover:text-primary'
                >
                  <Icon className='size-4 shrink-0 text-muted-foreground' />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <Card className='p-7'>
            <CardContent className='p-0'>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>

      <Toaster
        position='top-right'
        toastOptions={{
          classNames: {
            success: '!bg-green-700 !text-white !py-2',
            error: '!bg-red-700 !text-white !py-2',
          },
        }}
      />
    </section>
  )
}

export default Contact

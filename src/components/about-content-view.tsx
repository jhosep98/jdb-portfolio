'use client'

import { Download, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import type * as React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useLocale } from '@/providers/locale-provider'

const EXPERIENCE_START_YEAR = 2021

interface AboutContentViewProps {
  avatarUrl: string
  name?: string
}

const AboutContentView: React.FC<AboutContentViewProps> = ({ avatarUrl, name }) => {
  const { t } = useLocale()
  const yearsOfExperience = new Date().getFullYear() - EXPERIENCE_START_YEAR

  const metadata = [
    { label: t.about.metadata.specialization, value: t.about.metadata.specializationValue },
    { label: t.about.metadata.experienceLevel, value: t.about.metadata.experienceLevelValue },
    { label: t.about.metadata.languages, value: t.about.metadata.languagesValue },
  ]

  return (
    <div className='grid items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-24'>
      <Card className='py-12'>
        <CardHeader className='mb-4'>
          <Image
            src={avatarUrl}
            className='rounded-full inline-block w-28 h-28 mx-auto object-cover object-top'
            alt='Jhosep Davila'
            width={378}
            height={410}
          />

          <span className='text-center mt-2'>{name}</span>
          <span className='text-center text-xl font-semibold'>{t.about.role}</span>
        </CardHeader>

        <CardContent className='space-y-4 px-6 lg:px-12'>
          <a
            href='mailto:jhosepdb14@gmail.com'
            className='flex min-h-11 items-center gap-4 rounded-xl border px-4 py-2 text-sm hover:bg-accent hover:text-foreground'
          >
            <span>
              <Mail className='size-4' />
            </span>
            jhosepdb14@gmail.com
          </a>

          <a
            href='tel:+5491124004135'
            className='flex min-h-11 items-center gap-4 rounded-xl border px-4 py-2 text-sm hover:bg-accent hover:text-foreground'
          >
            <span>
              <Phone className='size-4' />
            </span>
            +54 9 1124004135
          </a>

          <span className='flex min-h-11 items-center gap-4 rounded-xl border px-4 py-2 text-sm'>
            <span>
              <MapPin className='size-4' />
            </span>
            {t.about.location}
          </span>
        </CardContent>
      </Card>

      <div className='relative space-y-8'>
        <div className='space-y-4'>
          {t.about.bio(EXPERIENCE_START_YEAR, yearsOfExperience).map((paragraph) => (
            <p key={paragraph} className='text-lg leading-relaxed text-pretty'>
              {paragraph}
            </p>
          ))}
        </div>

        <dl className='border-b border-dashed'>
          {metadata.map(({ label, value }) => (
            <div
              key={label}
              className='flex items-baseline justify-between gap-6 border-t border-dashed py-4'
            >
              <dt className='font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase'>
                {label}
              </dt>
              <dd className='text-right text-[15px]'>{value}</dd>
            </div>
          ))}
        </dl>

        <div>
          <Button asChild>
            <a
              href='https://drive.google.com/file/d/1efrVYi1iEizoL6HbYDwRs9y1RklI-4ur/view?usp=sharing'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Download />
              {t.about.downloadCv}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutContentView

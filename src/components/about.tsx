import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Download, Mail, MapPin, Phone } from 'lucide-react'
import type * as React from 'react'
import { Button } from './ui/button'

export const AboutSection: React.FC = () => (
  <section className='py-16 md:py-32'>
    <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
      <h2 className='relative z-10 max-w-xl text-4xl font-medium lg:text-5xl'>About me</h2>
      <div className='grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24'>
        <Card className='py-12'>
          <CardHeader className='mb-4'>
            <img
              src='https://res.cloudinary.com/diusjfaoe/image/upload/v1751231296/jmdev-studio/team-1_utlhfy.webp'
              className='rounded-full inline-block w-28 h-28 mx-auto object-cover object-top'
              alt='Jhosep Davila'
              width={378}
              height={410}
              loading='lazy'
              decoding='async'
            />

            <span className='text-center font-semibold text-xl mt-2'>Jhosep Davila Bustamante</span>
            <span className='text-center text-primary font-semibold'>Full Stack Developer</span>
          </CardHeader>

          <CardContent className='space-y-4 px-12'>
            <a
              href='mailto:jhosepdb14@gmail.com'
              className='flex items-center gap-4 text-sm px-4 py-2 rounded-xl border hover:bg-background hover:text-foreground'
            >
              <span>
                <Mail className='size-4' />
              </span>
              jhosepdb14@gmail.com
            </a>

            <a
              href='tel:+5491124004135'
              className='flex items-center gap-4 text-sm px-4 py-2 rounded-xl border hover:bg-background hover:text-foreground'
            >
              <span>
                <Phone className='size-4' />
              </span>
              +54 9 1124004135
            </a>

            <span className='flex items-center gap-4 text-sm px-4 py-2 rounded-xl border hover:bg-background hover:text-foreground'>
              <span>
                <MapPin className='size-4' />
              </span>
              Buenos Aires, Argentina
            </span>
          </CardContent>
        </Card>

        <div className='relative space-y-4'>
          <p className='text-muted-foreground'>
            Since 2018, I've helped 50+ founders across SaaS, AI, healthcare, e-commerce, dating,
            and more create web & apps that secure funding, convert users, and drive growth.
          </p>
          <p className='text-muted-foreground'>I'm here to help you build your next project!</p>

          <div className='pt-6'>
            <div className='grid grid-cols-2 gap-2'>
              <div className='space-y-4'>
                <div className='bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800'>
                  +1200
                </div>
                <p>Stars on GitHub</p>
              </div>
              <div className='space-y-4'>
                <div className='bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800'>
                  +500
                </div>
                <p>Powered Apps</p>
              </div>
            </div>
          </div>

          <div className='pt-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <span className='text-muted-foreground text-sm block'>Specialization</span>
                <span>Full Stack Developer</span>
              </div>

              <div>
                <span className='text-muted-foreground text-sm block'>Experience Level</span>
                <span>Semi-Senior</span>
              </div>

              <div>
                <span className='text-muted-foreground text-sm block'>Languages</span>
                <span>Spanish, English</span>
              </div>
            </div>
          </div>

          <div className='pt-6'>
            <Button>
              <Download />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

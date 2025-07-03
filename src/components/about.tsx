import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useGetInfoUser } from '@/hooks/useGetInfoUser'
import { Download, Mail, MapPin, Phone } from 'lucide-react'
import * as React from 'react'
import { Button } from './ui/button'

export const AboutSection: React.FC = () => {
  const userData = React.use(useGetInfoUser())

  return (
    <section id='about' className='py-16 md:py-32'>
      <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
        <div>
          <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
            About me
          </h2>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24'>
          <Card className='py-12'>
            <CardHeader className='mb-4'>
              <img
                src={userData.avatar_url}
                className='rounded-full inline-block w-28 h-28 mx-auto object-cover object-top'
                alt='Jhosep Davila'
                width={378}
                height={410}
                loading='lazy'
                decoding='async'
              />

              <span className='text-center font-semibold text-xl mt-2'>{userData.name}</span>
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
              With a passion for technology and web development ignited in 2021, I bring three years
              of hands-on experience in crafting optimized and scalable user interfaces.
            </p>

            <div className='pt-6'>
              <div className='grid grid-cols-2 gap-2'>
                <div className='space-y-4'>
                  <div className='bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800'>
                    {userData.followers}
                  </div>
                  <p>Followers</p>
                </div>
                <div className='space-y-4'>
                  <div className='bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800'>
                    {userData.public_repos}
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
              <Button asChild>
                <a
                  href='https://drive.google.com/file/d/1yLeOcPG89UfBBuff4Ba-jqeL6B3n_5Jj/view?usp=sharing'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Download />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

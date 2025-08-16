import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { getGithubUser } from '@/hooks/getGithubUser'
import type { GithubUser } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AlertTriangle, Download, Mail, MapPin, Phone } from 'lucide-react'
import type * as React from 'react'
import { Loader } from './loader'
import { Button } from './ui/button'

interface AboutContentProps {
  token: string
}

export const AboutContent: React.FC<AboutContentProps> = ({ token }) => {
  const {
    data: userData,
    error,
    isError,
    isPending,
  } = useQuery<GithubUser>({
    queryKey: ['userData'],
    queryFn: async () => await getGithubUser({ token }),
  })

  if (isPending) {
    return (
      <div
        className='flex min-h-[200px] flex-col items-center justify-center rounded-md border border-border bg-muted/40 p-4 text-muted-foreground [&>div>div>div]:bg-primary '
        aria-live='polite'
      >
        <Loader />
        <span className='mt-2 text-sm'>Loading data...</span>
      </div>
    )
  }

  if (isError) {
    return (
      <div
        className='flex items-center justify-center rounded-md border border-destructive bg-destructive/10 p-4 text-destructive'
        role='alert'
      >
        <AlertTriangle className='mr-2 size-5' />
        <span className='text-sm'>Error: {error.message}</span>
      </div>
    )
  }

  return (
    <>
      <div className='grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24'>
        <Card className='py-12'>
          <CardHeader className='mb-4'>
            <img
              src={userData?.avatar_url}
              className='rounded-full inline-block w-28 h-28 mx-auto object-cover object-top'
              alt='Jhosep Davila'
              width={378}
              height={410}
              loading='lazy'
              decoding='async'
            />

            <span className='text-center mt-2'>{userData?.name}</span>
            <span className='text-center text-xl font-semibold'>Full Stack Developer</span>
          </CardHeader>

          <CardContent className='space-y-4 px-12'>
            <a
              href='mailto:jhosepdb14@gmail.com'
              className='flex items-center gap-4 text-sm px-4 py-2 rounded-xl border hover:bg-accent hover:text-foreground'
            >
              <span>
                <Mail className='size-4' />
              </span>
              jhosepdb14@gmail.com
            </a>

            <a
              href='tel:+5491124004135'
              className='flex items-center gap-4 text-sm px-4 py-2 rounded-xl border hover:bg-accent hover:text-foreground'
            >
              <span>
                <Phone className='size-4' />
              </span>
              +54 9 1124004135
            </a>

            <span className='flex items-center gap-4 text-sm px-4 py-2 rounded-xl border hover:bg-accent hover:text-foreground cursor-pointer'>
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
                <div className='text-5xl font-bold'>{userData?.followers}</div>
                <p>Followers</p>
              </div>
              <div className='space-y-4'>
                <div className='text-5xl font-bold'>{userData?.public_repos}</div>
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
                href='https://drive.google.com/file/d/131gAgzG2qMzx5M2OyyK8Z2GkZGhOBkfO/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
                className='dark:text-white'
              >
                <Download />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

import blogging from '@/assets/blogging.json'
import { ImageAnimation } from '@/components/image-animation'
import type * as React from 'react'
import { Toaster } from 'sonner'
import { ContactForm } from './contact-form'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export const ContactSection: React.FC = () => (
  <section id='contact' className='py-16 md:py-32'>
    <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
      <div>
        <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
          Contact
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2 md:gap-12 items-center'>
        <div className='relative overflow-hidden'>
          <div
            aria-hidden
            className='bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%'
          />
          <div className='inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1'>
            <ImageAnimation src={blogging} />
          </div>
        </div>

        <Card className='py-8 px-4'>
          <CardHeader className='text-center'>
            <CardTitle className='text-xl'>Get In Touch</CardTitle>
          </CardHeader>

          <CardContent>
            <div className='grid gap-6'>
              <div className='my-2 flex flex-wrap justify-center gap-6 text-sm'>
                <a
                  href='https://www.linkedin.com/in/jhosep-davila/'
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

                <a
                  href='https://github.com/jhosep98'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                  className='text-muted-foreground hover:text-primary block'
                >
                  <svg
                    className='size-6'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-label='GitHub'
                    role='img'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                    <path d='M9 18c-4.51 2-5-2-7-2' />
                  </svg>
                </a>
              </div>

              <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                <span className='bg-card text-muted-foreground relative z-10 px-2'>
                  Or send me an email
                </span>
              </div>

              <ContactForm />
            </div>
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

import { Toaster } from 'sonner'
import ContactForm from '@/components/contact-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <section id='contact' className='pt-36 pb-4 md:pt-44'>
      <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
        <div>
          <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
            Contact
          </h2>
        </div>

        <div className='mx-auto max-w-lg'>
          <Card className='py-8 px-4'>
            <CardHeader className='text-center'>
              <CardTitle className='text-xl'>Get In Touch</CardTitle>
            </CardHeader>

            <CardContent>
              <div className='grid gap-6'>
                <div className='flex flex-wrap justify-center gap-6 text-sm'>
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
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'
                      role='img'
                      aria-label='GitHub'
                    >
                      <mask id='lineMdGithubLoop0' width='24' height='24' x='0' y='0'>
                        <g fill='currentColor'>
                          <ellipse cx='9.5' cy='9' rx='1.5' ry='1' />
                          <ellipse cx='14.5' cy='9' rx='1.5' ry='1' />
                        </g>
                      </mask>
                      <g
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                      >
                        <path
                          stroke-dasharray='32'
                          stroke-dashoffset='32'
                          d='M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3'
                        >
                          <animate
                            fill='freeze'
                            attributeName='stroke-dashoffset'
                            dur='0.7s'
                            values='32;0'
                          />
                        </path>
                        <path
                          stroke-dasharray='10'
                          stroke-dashoffset='10'
                          d='M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5'
                        >
                          <animate
                            attributeName='d'
                            dur='3s'
                            repeatCount='indefinite'
                            values='M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5'
                          />
                          <animate
                            fill='freeze'
                            attributeName='stroke-dashoffset'
                            begin='0.8s'
                            dur='0.2s'
                            values='10;0'
                          />
                        </path>
                      </g>
                      <rect
                        width='8'
                        height='4'
                        x='8'
                        y='11'
                        fill='currentColor'
                        mask='url(#lineMdGithubLoop0)'
                      >
                        <animate
                          attributeName='y'
                          dur='10s'
                          keyTimes='0;0.45;0.46;0.54;0.55;1'
                          repeatCount='indefinite'
                          values='11;11;7;7;11;11'
                        />
                      </rect>
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
}

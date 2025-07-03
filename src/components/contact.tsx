import blogging from '@/assets/blogging.json'
import { ImageAnimation } from '@/components/image-animation'
import type * as React from 'react'
import { Toaster } from 'sonner'
import { ContactForm } from './contact-form'
import { Card } from './ui/card'

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
          {/* <div
            aria-hidden
            className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
          /> */}
          {/* <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1"> */}
          <ImageAnimation src={blogging} />
          {/* </div> */}
        </div>

        <Card className='py-10 px-8'>
          <h3 className='text-balance text-3xl text-center'>Get In Touch</h3>
          <ContactForm />
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

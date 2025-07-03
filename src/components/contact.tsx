import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import type * as React from 'react'

export const ContactSection: React.FC = () => (
  <section id='contact' className='py-16 md:py-32'>
    <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
      <div>
        <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
          Contact
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
        <h2 className='text-4xl font-medium'>
          The Lyra ecosystem brings together our models, products and platforms.
        </h2>
        <div className='space-y-6'>
          <p>
            Lyra is evolving to be more than just the models. It supports an entire ecosystem — from
            products to the APIs and platforms helping developers and businesses innovate.
          </p>
          <p>
            Tailark. <span className='font-bold'>It supports an entire ecosystem</span> — from
            products innovate. Sit minus, quod debitis autem quia aspernatur delectus impedit modi,
            neque non id ad dignissimos? Saepe deleniti perferendis beatae.
          </p>
          <Button asChild variant='secondary' size='sm' className='gap-1 pr-1.5'>
            <a href='/'>
              <span>Learn More</span>
              <ChevronRight className='size-2' />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
)

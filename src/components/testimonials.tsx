import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import type * as React from 'react'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Jonathan Yombo',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    quote:
      'Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.',
  },
  {
    name: 'Yves Kalume',
    role: 'GDE - Android',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    quote:
      'With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.',
  },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
  const result: Testimonial[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export const TestimonialsSection: React.FC = () => (
  <section>
    <div className='py-16 md:py-32'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='text-center'>
          <h2 className='text-title text-3xl font-semibold'>Loved by the Community</h2>
          <p className='text-body mt-6'>Harum quae dolore orrupti aut temporibus ariatur.</p>
        </div>

        <div className='mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3'>
          {testimonialChunks.map((chunk, chunkIndex) => (
            <div key={`chunk-${chunkIndex + 1}`} className='space-y-3'>
              {chunk.map(({ name, role, quote, image }, index) => (
                <Card key={`testimonial-${index + 1}`}>
                  <CardContent className='grid grid-cols-[auto_1fr] gap-3 pt-6'>
                    <Avatar className='size-9'>
                      <AvatarImage alt={name} src={image} loading='lazy' width='120' height='120' />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className='font-medium'>{name}</h3>

                      <span className='text-muted-foreground block text-sm tracking-wide'>
                        {role}
                      </span>

                      <blockquote className='mt-3'>
                        <p className='text-gray-700 dark:text-gray-300'>{quote}</p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

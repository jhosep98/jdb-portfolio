import testimonial1 from '@/assets/carlos-testimonial.jpg'
import testimonial2 from '@/assets/moises-testimonial.jpg'
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
    name: 'Carlos Rivero Bianchi',
    role: 'Founder & CEO | Technology & Logistics Expert | Board Member | Business Advisor | Strategy, Innovation & Growth',
    image: testimonial1.src,
    quote:
      'We had the opportunity to work with Jhosep in our development team. He is an excellent person, very committed to the objectives and resolute in accepting any challenge assigned to him.',
  },
  {
    name: 'Moises Perez',
    role: 'Founder & Software Developer at E.O.M Software || AI Developer & Entrepreneur',
    image: testimonial2.src,
    quote:
      "Jhosep is a great developer! I loved working with him during our time in Alkemy. I recommend Jhosep for any organization, I'm sure he would be a very valuable asset to the team.",
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
  <section id='testimonials' className='pt-26 pb-4 md:pt-44'>
    <div className='mx-auto max-w-5xl space-y-8 px-6 md:space-y-16'>
      <div>
        <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
          Testimonials
        </h2>
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
                    <h3 className='font-bold text-lg'>{name}</h3>

                    <span className='text-muted-foreground block text-sm tracking-wide'>
                      {role}
                    </span>

                    <blockquote className='mt-3'>
                      <p className=''>{quote}</p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
)

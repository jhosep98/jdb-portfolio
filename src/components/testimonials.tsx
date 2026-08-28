import { Quote } from 'lucide-react'
import type * as React from 'react'
import testimonial1 from '@/assets/carlos-testimonial.webp'
import testimonial2 from '@/assets/moises-testimonial.webp'
import SectionHeading from '@/components/section-heading'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Carlos Rivero Bianchi',
    role: 'Founder & CEO — Technology & Logistics Expert, Board Member, Business Advisor',
    image: testimonial1.src,
    quote:
      'We had the opportunity to work with Jhosep in our development team. He is an excellent person, very committed to the objectives and resolute in accepting any challenge assigned to him.',
  },
  {
    name: 'Moises Perez',
    role: 'Founder & Software Developer at E.O.M Software — AI Developer & Entrepreneur',
    image: testimonial2.src,
    quote:
      "Jhosep is a great developer! I loved working with him during our time in Alkemy. I recommend Jhosep for any organization, I'm sure he would be a very valuable asset to the team.",
  },
]

const initials = (name: string) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')

const Testimonials: React.FC = () => (
  <section id='testimonials' className='scroll-mt-12 pt-32'>
    <div className='mx-auto max-w-5xl space-y-12 px-6'>
      <SectionHeading index={4} section='testimonials' />

      <div className='grid gap-6 sm:grid-cols-2'>
        {testimonials.map(({ name, role, quote, image }) => (
          <Card key={name} className='p-7'>
            <CardContent className='flex h-full flex-col gap-5 p-0'>
              <Quote className='size-6 shrink-0 text-primary' />

              <blockquote className='text-pretty'>{quote}</blockquote>

              <div className='mt-auto flex items-center gap-3 border-t border-dashed pt-5'>
                <Avatar className='size-9 shrink-0'>
                  <AvatarImage alt={name} src={image} loading='lazy' width='120' height='120' />
                  <AvatarFallback className='font-mono text-xs'>{initials(name)}</AvatarFallback>
                </Avatar>

                <div className='min-w-0'>
                  <p className='text-[15px] font-semibold'>{name}</p>
                  <p className='line-clamp-2 text-xs leading-snug text-muted-foreground'>{role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials

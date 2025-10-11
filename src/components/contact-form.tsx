'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import confetti from 'canvas-confetti'
import emailjs from 'emailjs-com'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { APP_TEXTS } from '@/lib/constants'

const FormSchema = z.object({
  email: z.string().email({
    message: APP_TEXTS.form.validation.email,
  }),
  subject: z.string().min(2, {
    message: APP_TEXTS.form.validation.subject,
  }),
  message: z.string().min(2, {
    message: APP_TEXTS.form.validation.message,
  }),
})

const ContactForm: React.FC = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_baugcpu',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_fa16uht',
        data,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      )

      if (response.status === 200) {
        toast.success(APP_TEXTS.contact.success)
        onSuccessConfetti()
        form.reset()
      }
    } catch (_err) {
      toast.error(APP_TEXTS.contact.error)
      form.reset()
    }
  }

  async function onSuccessConfetti() {
    const rect = buttonRef.current?.getBoundingClientRect()

    if (!rect) return

    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    await confetti({
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8' autoComplete='off'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder={APP_TEXTS.form.email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder={APP_TEXTS.form.subject} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder={APP_TEXTS.form.message} rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='w-full dark:text-white'
          size='lg'
          ref={buttonRef}
          disabled={form.formState.isSubmitting || !form.formState.isValid}
          aria-label='Send Message'
        >
          Send Message
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm

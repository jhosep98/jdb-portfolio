'use client'

import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { useLocale } from '@/providers/locale-provider'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const TO_NAME = 'Jhosep'

const ContactForm: React.FC = () => {
  const { locale, t } = useLocale()
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const FormSchema = React.useMemo(
    () =>
      z.object({
        email: z.email({ message: t.form.validation.email }),
        subject: z.string().min(2, { message: t.form.validation.subject }),
        message: z.string().min(2, { message: t.form.validation.message }),
      }),
    [t],
  )

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  })

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-validate only when the locale flips.
  React.useEffect(() => {
    if (Object.keys(form.formState.errors).length > 0) form.trigger()
  }, [locale])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error(t.form.error)
      return
    }

    try {
      const templateParams = {
        from_name: data.email,
        to_name: TO_NAME,
        subject: data.subject,
        message: data.message,
        reply_to: data.email,
        email: data.email,
      }

      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })

      if (response.status === 200) {
        toast.success(t.form.success)
        onSuccessConfetti()
        form.reset()
      }
    } catch (_err) {
      toast.error(t.form.error)
      form.reset()
    }
  }

  async function onSuccessConfetti() {
    const rect = buttonRef.current?.getBoundingClientRect()

    if (!rect) return

    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    // Loaded on demand so the ~6 KB library stays out of the initial bundle.
    const { default: confetti } = await import('canvas-confetti')

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
              <FormLabel>{t.form.emailLabel}</FormLabel>
              <FormControl>
                <Input placeholder={t.form.emailPlaceholder} {...field} />
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
              <FormLabel>{t.form.subjectLabel}</FormLabel>
              <FormControl>
                <Input placeholder={t.form.subjectPlaceholder} {...field} />
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
              <FormLabel>{t.form.messageLabel}</FormLabel>
              <FormControl>
                <Textarea placeholder={t.form.messagePlaceholder} rows={4} {...field} />
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
          aria-label={t.form.submit}
        >
          {t.form.submit}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm

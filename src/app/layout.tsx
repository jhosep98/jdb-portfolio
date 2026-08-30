import type { Metadata } from 'next'
import { Geist_Mono, Open_Sans } from 'next/font/google'
import { cookies } from 'next/headers'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from '@/lib/i18n/translations'
import { LocaleProvider } from '@/providers/locale-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import './globals.css'

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jdb-portfolio.vercel.app'),
  title: 'Jhosep Davila — Frontend Engineer | React, TypeScript & Next.js',
  description:
    'Frontend Engineer based in Buenos Aires, Argentina, specializing in React, TypeScript, and Next.js. Building fast, scalable, and maintainable web applications.',
  authors: [{ name: 'Jhosep Davila' }],
  keywords: [
    'Jhosep Davila',
    'Frontend Engineer',
    'Frontend Developer',
    'React Developer',
    'React',
    'TypeScript',
    'Next.js',
    'Web Development',
    'Buenos Aires',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Jhosep Davila — Frontend Engineer | React, TypeScript & Next.js',
    description:
      'Frontend Engineer specializing in React, TypeScript, and Next.js. Building fast, scalable, and maintainable web applications.',
    siteName: 'Jhosep Davila — Frontend Engineer',
    locale: 'en_US',
    type: 'website',
    url: 'https://jdb-portfolio.vercel.app/',
    images: [
      {
        url: '/seo/openGraph.png',
        width: 1440,
        height: 790,
        alt: 'Jhosep Davila — Frontend Engineer',
      },
    ],
  },
  twitter: {
    title: 'Jhosep Davila — Frontend Engineer | React, TypeScript & Next.js',
    description: 'Frontend Engineer specializing in React, TypeScript, and Next.js.',
    card: 'summary_large_image',
    images: [
      {
        url: '/seo/openGraph.png',
        width: 1440,
        height: 790,
        alt: 'Jhosep Davila — Frontend Engineer',
      },
    ],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const stored = cookieStore.get(LOCALE_COOKIE)?.value
  const locale = isLocale(stored) ? stored : DEFAULT_LOCALE

  return (
    <html
      lang={locale}
      className={`${openSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className='antialiased'>
        <LocaleProvider initialLocale={locale}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}

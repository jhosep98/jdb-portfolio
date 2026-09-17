import type { Metadata } from 'next'
import { Geist_Mono, Open_Sans } from 'next/font/google'
import { cookies } from 'next/headers'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { SITE_URL } from '@/lib/constants'
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, translations } from '@/lib/i18n/translations'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME } from '@/lib/seo'
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Jhosep Davila',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Jhosep Davila' }],
  creator: 'Jhosep Davila',
  publisher: 'Jhosep Davila',
  category: 'technology',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    url: '/',
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
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
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
  const t = translations[locale]

  return (
    <html
      lang={locale}
      className={`${openSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className='antialiased'>
        <a
          href='#main-content'
          className='sr-only fixed top-4 left-4 z-[100] rounded-md bg-background px-4 py-3 font-medium shadow-lg focus:not-sr-only'
        >
          {t.a11y.skipToContent}
        </a>
        <LocaleProvider initialLocale={locale}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main id='main-content' tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}

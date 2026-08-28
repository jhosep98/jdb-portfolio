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
  title: 'Jhosep Davila — Full Stack Developer',
  description:
    "I'm a full stack developer with a passion for creating beautiful and functional websites.",
  authors: [{ name: 'Jhosep Davila' }],
  keywords: ['Jhosep Davila', 'Full Stack Developer', 'Portfolio', 'Frontend Developer'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Jhosep Davila — Full Stack Developer',
    description:
      "I'm a full stack developer with a passion for creating beautiful and functional websites.",
    siteName: 'Jhosep Davila — Full Stack Developer',
    locale: 'en',
    type: 'website',
    url: 'https://jdb-portfolio.vercel.app/',
    images: [
      {
        url: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751752720/jmdev-studio/Screenshot_20250705_185810_tp3teu.png',
        width: 1200,
        height: 630,
        alt: 'Jhosep Davila — Full Stack Developer',
      },
    ],
  },
  twitter: {
    title: 'Jhosep Davila — Full Stack Developer',
    description:
      "I'm a full stack developer with a passion for creating beautiful and functional websites.",
    card: 'summary_large_image',
    images: [
      {
        url: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751752720/jmdev-studio/Screenshot_20250705_185810_tp3teu.png',
        width: 1200,
        height: 630,
        alt: 'Jhosep Davila — Full Stack Developer',
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

import type { Metadata } from 'next'
import { Geist_Mono, Open_Sans } from 'next/font/google'
import Header from '@/components/header'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${openSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

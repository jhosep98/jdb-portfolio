import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import Header from '@/components/header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jhosep Davila — Web Developer',
  description: "I'm web developer with a passion for creating beautiful and functional websites.",
  authors: [{ name: 'Jhosep Davila' }],
  keywords: ['Jhosep Davila', 'Web Developer', 'Portfolio', 'Frontend Developer'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Jhosep Davila — Web Developer',
    description: "I'm web developer with a passion for creating beautiful and functional websites.",
    siteName: 'Jhosep Davila — Web Developer',
    locale: 'en',
    type: 'website',
    url: 'https://jdb-portfolio.vercel.app/',
    images: [
      {
        url: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751752720/jmdev-studio/Screenshot_20250705_185810_tp3teu.png',
        width: 1200,
        height: 630,
        alt: 'Jhosep Davila — Web Developer',
      },
    ],
  },
  twitter: {
    title: 'Jhosep Davila — Web Developer',
    description: "I'm web developer with a passion for creating beautiful and functional websites.",
    card: 'summary_large_image',
    images: [
      {
        url: 'https://res.cloudinary.com/diusjfaoe/image/upload/v1751752720/jmdev-studio/Screenshot_20250705_185810_tp3teu.png',
        width: 1200,
        height: 630,
        alt: 'Jhosep Davila — Web Developer',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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

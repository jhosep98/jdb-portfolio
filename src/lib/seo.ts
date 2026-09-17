import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const SITE_NAME = 'Jhosep Davila — Frontend Engineer'
export const DEFAULT_TITLE = 'Jhosep Davila — Frontend Engineer | React, TypeScript & Next.js'
export const DEFAULT_DESCRIPTION =
  'Frontend Engineer based in Buenos Aires, Argentina, specializing in React, TypeScript, and Next.js. Building fast, scalable, and maintainable web applications.'

const SOCIAL_IMAGE = {
  url: '/seo/openGraph.png',
  width: 1440,
  height: 790,
  alt: SITE_NAME,
}

interface PageMetadataOptions {
  title: string
  description: string
  path: `/${string}` | '/'
}

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | Jhosep Davila`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      url: new URL(path, SITE_URL),
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      title: socialTitle,
      description,
      card: 'summary_large_image',
      images: [SOCIAL_IMAGE],
    },
  }
}

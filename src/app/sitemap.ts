import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const routes = ['', '/about', '/experience', '/projects', '/testimonials', '/contact'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'monthly',
    priority: index === 0 ? 1 : 0.8,
  }))
}

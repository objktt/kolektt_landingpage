import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/bpm-collect',
    '/pricing',
    '/terms',
    '/privacy',
    '/whats-next',
  ]

  const currentDate = new Date().toISOString()

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : route === '/about' ? 0.8 : 0.5,
  }))
}

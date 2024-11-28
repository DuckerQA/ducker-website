import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  // Generate routes for blog posts
  const blogRoutes = allBlogs
    .filter((post) => !post.draft) // Exclude drafts
    .map((post) => ({
      url: `${siteUrl}/${post.path}`, // Full URL for each blog post
      lastModified: post.lastmod || post.date || new Date().toISOString(),
      changeFrequency: 'weekly' as const, // Use 'as const' to ensure type inference
      priority: 0.8, // Optional property
    }))

  // Generate static routes
  const staticRoutes = ['/', '/blog', '/projects', '/tags'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const, // Use 'as const' for valid literal types
    priority: 1.0, // Optional property
  }))

  return [...staticRoutes, ...blogRoutes]
}

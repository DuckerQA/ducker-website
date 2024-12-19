'use client'

import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'
import 'focus-visible'

import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth transition-colors duration-500 ease-in-out`}
      suppressHydrationWarning
    >
      <head>
        <title>{siteMetadata.title || 'Blog | DuckerQA'}</title>
        <meta
          name="description"
          content={siteMetadata.description || 'DuckerQA - Your ultimate testing blog'}
        />
        <link rel="icon" href={`${basePath}/static/favicons/favicon.ico`} sizes="any" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      </head>
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased transition-colors duration-500 ease-in-out dark:bg-gray-950 dark:text-white">
        {/* Skip to Content Button */}
        <a
          href="#main-content"
          className="absolute left-2 top-2 z-50 -translate-y-full rounded bg-blue-600 px-4 py-2 text-white opacity-0 focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Skip to Content
        </a>
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              {/* Header */}
              <header
                aria-label="Site Header"
                className="transition-colors duration-500 ease-in-out"
              >
                <Header />
              </header>
              {/* Main Content */}
              <main
                id="main-content"
                role="main"
                className="mb-auto transition-colors duration-500 ease-in-out"
                aria-label="Main Content"
              >
                {children}
              </main>
              {/* Footer */}
              <footer
                aria-label="Site Footer"
                className="mt-8 transition-colors duration-500 ease-in-out"
              >
                <Footer />
              </footer>
            </SearchProvider>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}

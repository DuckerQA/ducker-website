'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { Blog } from 'contentlayer/generated'

/* eslint-disable @typescript-eslint/no-explicit-any */
interface SearchProviderProps {
  children: React.ReactNode
  searchConfig: any
}

export const SearchProvider = ({ children, searchConfig }: SearchProviderProps) => {
  const router = useRouter()

  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: searchConfig.searchDocumentsPath || 'search.json', // Dynamically load the index file
        defaultActions: searchConfig.defaultActions || [], // No default shortcuts
        onSearchDocumentsLoad(json: Blog[]) {
          return json.map((post) => ({
            id: post.path,
            name: post.title,
            keywords: post?.summary || post.body.raw, // Search by summary or full content
            section: post.tags.includes('project') ? 'Projects' : 'Blog',
            subtitle: post.tags.join(', '), // Show tags as subtitle
            perform: () => router.push('/' + post.path), // Navigate on selection
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}

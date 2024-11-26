/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { useState } from 'react'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
}

export default function ListLayoutWrapper({ posts, title }: ListLayoutProps) {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])

  // State for the currently selected tag (null = no filter)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Toggles tag selection for filtering posts
  const toggleTag = (tag: string) => {
    setSelectedTag((prevSelected) => (prevSelected === tag ? null : tag))
  }

  // Filter posts based on selected tag
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts

  return (
    <div>
      {/* Page Header */}
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight mb-8">
        Blog
      </h1>

      {/* Tags Section */}
      <div className="mb-6 flex flex-wrap gap-4">
        {sortedTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`rounded-full px-3 py-2 text-sm font-medium uppercase ${
              selectedTag === tag
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
            aria-label={`Filter posts by ${tag}`}
          >
            {`${tag} (${tagCounts[tag]})`}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => {
          const { path, date, title, summary, tags, images } = post
          const postImage = Array.isArray(images) ? images[0] : images // Use first image if multiple

          return (
            <div key={path} className="relative overflow-hidden rounded-lg shadow-md">
              {/* Post Image */}
              <Link href={`/${path}`} aria-label={title}>
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={postImage || '/placeholder-image.jpg'}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Tags Displayed on Image */}
                  <div className="absolute bottom-0 left-0 flex flex-wrap gap-2 bg-black/50 p-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Post Content */}
              <div className="p-4">
                <Link href={`/${path}`} aria-label={title}>
                  <h2 className="mb-2 text-xl font-bold leading-6 text-gray-900 dark:text-gray-100">
                    {title}
                  </h2>
                </Link>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(date, siteMetadata.locale)}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{summary}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

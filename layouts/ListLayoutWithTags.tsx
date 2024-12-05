'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import Image from 'next/image'
import { formatDate } from 'pliny/utils/formatDate'

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
}

export default function ListLayoutWrapper({ posts, title }: ListLayoutProps) {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])

  const totalPostsCount = posts.length
  const router = useRouter()
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const tagParam = params.get('tag')
    setSelectedTag(tagParam || null)
  }, [])

  const toggleTag = (tag: string | null) => {
    const newTag = selectedTag === tag ? null : tag
    setSelectedTag(newTag)
    router.push(`/blog${newTag ? `?tag=${newTag}` : ''}`)
  }

  const filteredPosts = selectedTag
    ? posts.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
      )
    : posts

  return (
    <div suppressHydrationWarning>
      <div className="h-[48px]" aria-hidden="true" />

      <h1 className="mb-2 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h1>

      <div className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        <p className="w-full sm:max-w-full lg:max-w-[60%]">
          Yo! 🦆 and welcome to my testing lair – where bugs don’t stand a chance! Grab a seat,
          explore some tips, laugh at my QA struggles, and maybe even learn something useful. Make
          yourself at home!
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <div>
          <button
            onClick={() => toggleTag(null)}
            className={`rounded-full px-3 py-2 text-sm font-medium uppercase ${
              selectedTag === null
                ? 'bg-[#4C64D9] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All posts [{totalPostsCount}]
          </button>
        </div>

        {sortedTags.map((tag) => (
          <div key={tag}>
            <button
              onClick={() => toggleTag(tag)}
              className={`rounded-full px-3 py-2 text-sm font-medium uppercase ${
                selectedTag === tag
                  ? 'bg-[#4C64D9] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {`${tag} [${tagCounts[tag]}]`}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 mb-12 h-[1px] w-full bg-gray-300 dark:bg-gray-600" aria-hidden="true"></div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => {
          const { path, date, title, summary, tags, images } = post
          const postImage = Array.isArray(images) ? images[0] : images

          return (
            <div
              key={path}
              className="relative flex flex-col overflow-hidden rounded-lg shadow-md"
            >
              <Link href={`/${path}`} aria-label={title}>
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={postImage || '/placeholder-image.jpg'}
                    alt={`Image for ${title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="flex flex-col justify-between p-4" style={{ paddingBottom: '4rem' }}>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(date, siteMetadata.locale)}
                </p>

                <Link href={`/${path}`} aria-label={title}>
                  <h2 className="mb-2 text-xl font-bold leading-6 text-gray-900 dark:text-gray-100">
                    {title}
                  </h2>
                </Link>

                <p className="mb-4 text-gray-700 dark:text-gray-300 line-clamp-3">{summary}</p>

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        selectedTag === tag
                          ? 'bg-[#4C64D9] text-white'
                          : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

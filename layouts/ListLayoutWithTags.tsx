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

      {/* Title Section */}
      <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h1>

      {/* Blog Description */}
      <div className="mb-10 text-lg text-gray-700 dark:text-gray-300">
        <p className="w-full sm:max-w-full lg:max-w-[60%]">
          Yo! 🦆 and welcome to my testing lair – where bugs don’t stand a chance! Grab a seat,
          explore some tips, laugh at my QA struggles, and maybe even learn something useful. Make
          yourself at home!
        </p>
      </div>

      {/* Tag Filter Section */}
      <div className="mb-8 flex flex-wrap gap-4" role="region" aria-labelledby="tag-filter-heading">
        <h2 id="tag-filter-heading" className="sr-only">
          Tag Filter
        </h2>

        {/* "All posts" button */}
        <button
          onClick={() => toggleTag(null)}
          aria-pressed={selectedTag === null}
          aria-label={`Show all posts (${totalPostsCount} total)`}
          className={`rounded-full px-3 py-2 text-sm font-medium uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 ${
            selectedTag === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          All posts [{totalPostsCount}]
        </button>

        {/* Tag buttons */}
        {sortedTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            aria-pressed={selectedTag === tag}
            aria-label={`Filter by tag: ${tag} (${tagCounts[tag]} posts)`}
            className={`rounded-full px-3 py-2 text-sm font-medium uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 ${
              selectedTag === tag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {`${tag} [${tagCounts[tag]}]`}
          </button>
        ))}
      </div>

      <div
        className="mb-12 mt-4 h-[1px] w-full bg-gray-300 dark:bg-gray-600"
        aria-hidden="true"
      ></div>

      {/* Post Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => {
          const { path, date, title, summary, tags, images } = post
          const postImage = Array.isArray(images) ? images[0] : images

          return (
            <article
              key={path}
              aria-labelledby={`post-title-${path}`}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-[#001066]/10 bg-white shadow focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-white dark:border-white/10 dark:bg-[#1c1e26] dark:focus-within:ring-offset-gray-950"
            >
              {/* Image */}
              <Link href={`/${path}`} aria-hidden="true" tabIndex={-1}>
                <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gray-200">
                  <Image
                    src={postImage || '/placeholder-image.jpg'}
                    alt={`Image for ${title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="flex h-full flex-col justify-between p-8">
                {/* Date */}
                <p className="mb-2 text-sm font-normal uppercase leading-tight text-[#000833]/60 dark:text-white/80">
                  {formatDate(date, siteMetadata.locale)}
                </p>

                {/* Title */}
                <h2
                  id={`post-title-${path}`}
                  className="mb-2 text-xl font-semibold leading-7 text-[#000626]/90 dark:text-white"
                >
                  <Link href={`/${path}`} className="hover:underline focus-visible:outline-none">
                    {title}
                  </Link>
                </h2>

                {/* Summary */}
                <p className="mb-2 line-clamp-2 text-base font-normal leading-normal text-[#000833]/60 dark:text-white/80">
                  {summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#001066]/10 bg-[#00157f]/5 px-3 py-1 text-sm font-medium text-[#000626]/90 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

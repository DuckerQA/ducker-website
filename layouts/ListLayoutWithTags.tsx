'use client'

import { useState, useEffect } from 'react'
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
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const tagParam = params.get('tag')
    setSelectedTag(tagParam || null)
  }, [])

  const toggleTag = (tag: string | null) => {
    const newTag = selectedTag === tag ? null : tag
    setSelectedTag(newTag)

    // Update URL without scrolling the page
    const newUrl = `/blog${newTag ? `?tag=${newTag}` : ''}`
    window.history.replaceState(null, '', newUrl)
  }

  const filteredPosts = selectedTag
    ? posts.filter((post) =>
        post.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
      )
    : posts

  return (
    <div suppressHydrationWarning>
      {/* Spacer at the top */}
      <div className="h-[48px]" aria-hidden="true" />

      {/* Page Title */}
      <h1 className="mb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {title}
      </h1>

      {/* Page Description */}
      <div className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        <p className="w-full sm:max-w-full lg:max-w-[60%]">
          Yo! 🦆 and welcome to my testing lair – where bugs don’t stand a chance! Grab a seat,
          explore some tips, laugh at my QA struggles, and maybe even learn something useful. Make
          yourself at home!
        </p>
      </div>

      <div
        className="scrollbar-hide relative -mx-4 mb-8 flex gap-4 overflow-x-auto px-4 pb-2 pt-2 sm:flex-wrap sm:gap-6 sm:overflow-visible"
        role="region"
        aria-labelledby="tag-filter-heading"
        style={{ scrollPaddingLeft: '16px', scrollPaddingRight: '16px' }}
      >
        <h2 id="tag-filter-heading" className="sr-only">
          Tag Filter
        </h2>

        {/* "All Posts" Button */}
        <button
          onClick={() => toggleTag(null)}
          aria-pressed={selectedTag === null}
          aria-label={`Show all posts (${totalPostsCount} total)`}
          className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 ${
            selectedTag === null
              ? 'bg-blue-600 text-white shadow-lg dark:bg-[#a3b2ff] dark:text-[#202128]' // Active state
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700' // Default state
          }`}
        >
          All posts [{totalPostsCount}]
        </button>

        {/* Tag Buttons */}
        {sortedTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            aria-pressed={selectedTag === tag}
            aria-label={`Filter by tag: ${tag} (${tagCounts[tag]} posts)`}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 ${
              selectedTag === tag
                ? 'bg-blue-600 text-white shadow-lg dark:bg-[#a3b2ff] dark:text-[#202128]' // Active state
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700' // Default state
            }`}
          >
            {`${tag} [${tagCounts[tag]}]`}
          </button>
        ))}
      </div>

      {/* arrow on mobile */}
      <div
        className="pointer-events-none absolute right-2 -translate-y-1/2 sm:hidden"
        aria-hidden="true"
      >
        <svg
          className="mb-6 h-6 w-6 animate-bounce text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L12.586 11H4a1 1 0 110-2h8.586L8.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Divider Line */}
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

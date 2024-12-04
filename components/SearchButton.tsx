'use client'

import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'

const SearchButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute top-full mt-2 transform whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white shadow-md">
            Search the site
          </div>
        )}
        {/* Button */}
        <SearchButtonWrapper
          aria-label="Search"
          className={`relative flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-900 focus:border-2 focus:border-blue-700 hover:text-blue-700 dark:text-gray-100 dark:focus:border-blue-500 dark:hover:text-blue-500 ${
            isHovered ? 'shadow-[0_0_10px_rgba(59,130,246,0.5)]' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </SearchButtonWrapper>
      </div>
    )
  }
  return null
}

export default SearchButton

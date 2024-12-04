'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitchWrapper from './ThemeSwitchWrapper'
import SearchButton from './SearchButton'
import { useState } from 'react'
import { useTheme } from 'next-themes'

const Header = () => {
  const pathname = usePathname()
  const { resolvedTheme } = useTheme() // Get the current theme
  const logoSrc =
    resolvedTheme === 'dark'
      ? siteMetadata.siteLogoDark || siteMetadata.siteLogo // Use dark mode logo if available
      : siteMetadata.siteLogo || '/default-logo.png'
  const [showTooltip, setShowTooltip] = useState(false)

  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-2'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      {/* Logo and Title with Tooltip */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
        onMouseLeave={() => setShowTooltip(false)} // Hide tooltip on hover out
      >
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="flex items-center rounded-md font-medium text-gray-900 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-gray-100 dark:text-gray-100 dark:hover:text-blue-500 dark:focus:ring-blue-500 dark:focus:ring-offset-gray-950"
        >
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <img src={logoSrc} alt={siteMetadata.headerTitle} className="h-[6.5rem] w-auto" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
        {/* Tooltip */}
        {showTooltip && (
          <div
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-xs text-white shadow-md whitespace-nowrap sm:hidden md:block"
          >
            Go to Home
          </div>
        )}
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {/* Desktop Navigation Links */}
        <div className="no-scrollbar hidden items-center space-x-4 sm:flex sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => {
              const isActive = pathname.startsWith(link.href)

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`block rounded-md font-medium ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-500'
                      : 'text-gray-900 hover:text-blue-700 dark:text-gray-100 dark:hover:text-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-blue-500 dark:focus:ring-offset-gray-950`}
                >
                  {link.title}
                </Link>
              )
            })}
        </div>

        {/* Additional Buttons */}
        <div className="flex items-center space-x-2">
          <SearchButton />
          <ThemeSwitchWrapper />
        </div>
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header

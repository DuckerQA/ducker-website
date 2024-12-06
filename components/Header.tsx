'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitchWrapper from './ThemeSwitchWrapper'
import SearchButton from './SearchButton'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Header = () => {
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()
  const [hydrated, setHydrated] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return <div style={{ height: '80px' }} aria-hidden="true"></div>
  }

  const logoSrc =
    resolvedTheme === 'dark'
      ? siteMetadata.siteLogoDark || siteMetadata.siteLogo
      : siteMetadata.siteLogo || '/default-logo.png'

  let headerClass =
    'flex items-center w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur justify-between py-2'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      {/* Logo and Title with Tooltip */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="flex items-center rounded-md font-medium text-gray-900 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 dark:text-gray-100 dark:hover:text-blue-500 dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-gray-950"
        >
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image src={logoSrc} alt={siteMetadata.headerTitle} width={104} height={104} />
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
        {showTooltip && (
          <div
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white shadow-md"
            role="tooltip"
          >
            Go to Home
          </div>
        )}
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center space-x-4 leading-5 sm:space-x-6">
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
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-gray-950`}
                >
                  {link.title}
                </Link>
              )
            })}
        </div>

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

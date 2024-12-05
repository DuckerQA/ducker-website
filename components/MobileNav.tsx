'use client'

import { Transition } from '@headlessui/react'
import FocusLock from 'react-focus-lock'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        if (navRef.current) {
          enableBodyScroll(navRef.current)
        }
      } else {
        if (navRef.current) {
          disableBodyScroll(navRef.current)
        }
      }
      return !status
    })
  }

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <>
      {/* Toggle Button */}
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="rounded-md font-medium text-gray-900 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 dark:text-gray-100 dark:hover:text-blue-500 dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-gray-950 sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Mobile Navigation */}
      <Transition
        show={navShow}
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="fixed inset-0 z-50 bg-black/25">
          {/* FocusLock Wrapping */}
          <FocusLock disabled={!navShow}>
            <div
              ref={navRef}
              className="absolute right-0 top-0 z-50 h-full w-full bg-white shadow-lg dark:bg-gray-950"
            >
              <nav className="relative mx-auto mt-14 w-11/12">
                {headerNavLinks.map((link) => {
                  const isActive =
                    link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)

                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className={`mb-4 block rounded-md text-lg font-medium ${
                        isActive
                          ? 'text-blue-700 dark:text-blue-500'
                          : 'text-gray-900 hover:text-blue-700 dark:text-gray-100 dark:hover:text-blue-500'
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 dark:focus-visible:ring-blue-500 dark:focus-visible:ring-offset-gray-950`}
                      onClick={onToggleNav}
                    >
                      {link.title}
                    </Link>
                  )
                })}
              </nav>

              {/* Close Button */}
              <button
                className="absolute right-4 top-4 rounded-md font-medium text-gray-900 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 dark:text-gray-100 dark:hover:text-blue-500 dark:focus-visible-visible:ring-blue-500 dark:focus-visible-visible:ring-offset-gray-950"
                aria-label="Close Menu"
                onClick={onToggleNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </FocusLock>
        </div>
      </Transition>
    </>
  )
}

export default MobileNav

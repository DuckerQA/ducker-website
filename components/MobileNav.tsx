'use client'

import { Dialog, Transition } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (!status) {
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
    // Clear all body scroll locks on component unmount
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <>
      {/* Hamburger Button */}
      <button
        aria-label="Toggle menu"
        aria-expanded={navShow}
        onClick={onToggleNav}
        className="sm:hidden rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Mobile Navigation */}
      <Transition appear show={navShow} as={Fragment}>
        <Dialog
          as="div"
          onClose={onToggleNav}
          className="relative z-50"
          initialFocus={navRef}
          aria-labelledby="mobile-menu-heading"
          aria-describedby="mobile-menu-description"
        >
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </Transition.Child>

          {/* Panel */}
          <div className="fixed inset-0 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transition transform duration-300 ease-in-out"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition transform duration-200 ease-in-out"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel
                ref={navRef}
                className="relative w-4/5 max-w-md bg-white px-4 py-8 shadow-lg dark:bg-gray-950"
              >
                {/* Close Button */}
                <button
                  aria-label="Close menu"
                  onClick={onToggleNav}
                  className="absolute top-4 right-4 rounded-md text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
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

                {/* Navigation Links */}
                <nav className="mt-8 flex flex-col space-y-4" aria-labelledby="mobile-menu-heading">
                  <h2 id="mobile-menu-heading" className="sr-only">
                    Mobile Navigation
                  </h2>
                  <p id="mobile-menu-description" className="sr-only">
                    Navigate to the main sections of the website
                  </p>
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={onToggleNav}
                      className="block text-xl font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav

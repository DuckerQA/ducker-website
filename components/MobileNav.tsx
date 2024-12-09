'use client'

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useRef, useEffect } from 'react';
import Link from './Link';
import headerNavLinks from '@/data/headerNavLinks';

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Avoid SSR/CSR mismatch

  return (
    <>
      <button
        aria-label="Toggle menu"
        aria-expanded={navShow}
        onClick={() => setNavShow(!navShow)}
        className="rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 sm:hidden"
      >
        {/* Hamburger Icon */}
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

      <Transition appear show={navShow} as={Fragment}>
        <Dialog
          as="div"
          onClose={() => setNavShow(false)}
          className="relative z-50"
          initialFocus={navRef}
          aria-labelledby="mobile-menu-heading"
          aria-describedby="mobile-menu-description"
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setNavShow(false)}
            aria-hidden="true"
          ></div>

          {/* Navigation Content */}
          <div className="fixed inset-0 flex justify-end">
            <div
              ref={navRef}
              className="relative w-4/5 max-w-md bg-white px-4 py-8 shadow-lg dark:bg-gray-950"
            >
              <button
                aria-label="Close menu"
                onClick={() => setNavShow(false)}
                className="absolute right-4 top-4 rounded-md text-gray-900 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:text-gray-100 dark:hover:text-blue-400"
              >
                {/* Close Icon */}
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
                    onClick={() => setNavShow(false)}
                    className="block text-xl font-medium text-gray-900 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:text-gray-100 dark:hover:text-blue-400"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileNav;

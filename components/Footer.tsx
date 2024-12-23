import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-[47px]">
              <Image
                src="/static/images/projects/basicDuck.png"
                alt="QA Ducker Logo"
                width={47}
                height={48}
                priority
                className="object-contain"
              />
            </div>
            <div className="text-3xl font-semibold text-[#000626] dark:text-white">QA Ducker</div>
          </div>

          {/* Social Icons */}
          <nav aria-label="Social Media Links" className="flex justify-center gap-6">
            <a
              href={`mailto:${siteMetadata.email}`}
              aria-label="Send an email"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Image
                src="/static/images/footer/email.svg"
                alt="Email"
                width={24}
                height={24}
                priority
                className="transition duration-200 hover:opacity-80 dark:invert"
              />
            </a>
            <a
              href={siteMetadata.github}
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Image
                src="/static/images/footer/github.svg"
                alt="GitHub"
                width={24}
                height={24}
                priority
                className="transition duration-200 hover:opacity-80 dark:invert"
              />
            </a>
            <a
              href={siteMetadata.linkedin}
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Image
                src="/static/images/footer/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                priority
                className="transition duration-200 hover:opacity-80 dark:invert"
              />
            </a>
          </nav>
        </div>

        {/* Bottom section*/}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <nav
            className="flex flex-wrap justify-center gap-6 text-base text-[#000833]/60 dark:text-white/80"
            aria-label="Footer Navigation Links"
          >
            <Link
              href="/blog"
              className="rounded hover:underline focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="rounded hover:underline focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Projects
            </Link>
            {/* <Link
              href="/terms"
              className="rounded hover:underline focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="rounded hover:underline focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Privacy
            </Link> */}
          </nav>
          <div className="flex items-center justify-center gap-3 text-sm text-[#000833]/40 dark:text-white/50">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>
              <Link
                href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
                className="rounded hover:underline focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Tailwind Next.js Theme
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

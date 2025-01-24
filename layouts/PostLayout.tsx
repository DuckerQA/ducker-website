import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'

interface LayoutProps {
  content: CoreContent<Blog>
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, date, title, tags } = content
  const basePath = path.split('/')[0]

  // Format the date to avoid locale mismatches
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      {/* Main Content Section */}
      <SectionContainer>
        <article className="article">
          <div className="space-y-10">
            {/* Header */}
            <header>
              <div className="mb-12 md:mb-4">
                <Link
                  href={`/${basePath}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#4b63d8]/80 bg-white/0 px-4 py-2 text-base font-semibold leading-normal text-[#4b63d8] shadow hover:text-blue-500 dark:border-[#a3b2ff]/80 dark:text-[#a3b2ff] dark:hover:text-blue-400"
                  aria-label="Back to the blog"
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
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                  Back to the blog
                </Link>
              </div>

              <div className="text-center">
                <dl>
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm font-semibold uppercase tracking-widest text-[#000833]/60 dark:text-gray-400">
                      {formattedDate}
                    </dd>
                  </div>
                </dl>
                <PageTitle>{title}</PageTitle>
                {tags && (
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#001066]/10 bg-[#00157f]/5 px-3 py-1 text-sm font-medium text-[#000626]/90 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>

            {/* Main Content */}
            <div className="prose mx-auto max-w-[60rem] pt-6 text-justify dark:prose-invert">
              {children}
            </div>

            {/* Footer */}
            <div className="mx-auto max-w-[60rem]">
              {next || prev ? (
                <div className="mb-6 mt-6 border-t border-gray-200 pb-6 pt-6 dark:border-gray-700">
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                    {prev && (
                      <div className="ml-5 text-left sm:ml-0">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#000833]/60 dark:text-white/80">
                          Previous Article
                        </p>
                        <Link
                          href={`/${prev.path}`}
                          className="mt-1 block text-base font-semibold text-blue-600 hover:underline dark:text-[#a3b2ff]"
                        >
                          {prev.title}
                        </Link>
                      </div>
                    )}
                    {next && (
                      <div className="ml-5 text-left sm:ml-0 sm:text-right">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#000833]/60 dark:text-white/80">
                          Next Article
                        </p>
                        <Link
                        href={`/${next.path}`}
                        className="mt-1 block text-base font-semibold text-blue-600 hover:underline dark:text-[#a3b2ff]"
                      >
                        {next.title}
                      </Link>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </article>
      </SectionContainer>
    </>
  )
}

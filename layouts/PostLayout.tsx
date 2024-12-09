import { ReactNode } from 'react';
import { CoreContent } from 'pliny/utils/contentlayer';
import type { Blog } from 'contentlayer/generated';
import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import SectionContainer from '@/components/SectionContainer';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';

interface LayoutProps {
  content: CoreContent<Blog>;
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
  children: ReactNode;
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, date, title, tags } = content;
  const basePath = path.split('/')[0];

  // Format the date to avoid mismatches
  const formattedDate = new Date(date).toISOString().split('T')[0];

  return (
    <SectionContainer>
      <article>
        <div className="space-y-10">
          {/* Header */}
          <header className="text-center">
            <div className="space-y-2">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={formattedDate}>{formattedDate}</time>
                  </dd>
                </div>
              </dl>
              <PageTitle>{title}</PageTitle>

              {/* Tags below the title */}
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
          <footer className="mx-auto max-w-[60rem]">
            {/* Tags */}
            {tags && (
              <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            )}

            {/* Pagination */}
            {(next || prev) && (
              <div className="mt-6 flex justify-between border-t border-gray-200 pt-6 dark:border-gray-700">
                {prev && (
                  <div>
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Previous Article
                    </h2>
                    <Link
                      href={`/${prev.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div>
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Next Article
                    </h2>
                    <Link
                      href={`/${next.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title}
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-6 text-center">
              <Link
                href={`/${basePath}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Back to the blog"
              >
                &larr; Back to the blog
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  );
}

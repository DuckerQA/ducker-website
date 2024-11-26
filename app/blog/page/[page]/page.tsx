import ListLayoutWrapper from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

export const generateStaticParams = async () => {
  // No pagination means no need for multiple paths; only one page is needed.
  return [{ page: '1' }]
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const posts = allCoreContent(sortPosts(allBlogs))

  return <ListLayoutWrapper posts={posts} title="All Posts" />
}

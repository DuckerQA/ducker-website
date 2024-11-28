'use client'

import { useRouter } from 'next/navigation'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/blog?tag=${slug(text)}`)
  }

  return (
    <button
      onClick={handleClick}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      aria-label={`Filter blog posts by tag ${text}`}
    >
      {text.split(' ').join('-')}
    </button>
  )
}

export default Tag

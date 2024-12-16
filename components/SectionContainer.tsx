import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  fullWidth?: boolean // New prop to allow full-width sections
}

export default function SectionContainer({ children, fullWidth = false }: SectionContainerProps) {
  return (
    <section
      className={`${fullWidth ? 'w-full px-0' : 'mx-auto max-w-6xl px-4 sm:px-6 xl:max-w-7xl'}`}
    >
      {children}
    </section>
  )
}

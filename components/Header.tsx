import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitchWrapper from './ThemeSwitchWrapper'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      {/* Logo and Title */}
      <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
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

      {/* Navigation Section */}
      <nav className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {/* Desktop Navigation Links */}
        <div className="no-scrollbar hidden items-center space-x-4 sm:flex sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-gray-900 hover:text-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-100 rounded-md dark:focus:ring-offset-gray-950 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
        </div>

        {/* Additional Buttons */}
        <SearchButton />
        <ThemeSwitchWrapper />
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header

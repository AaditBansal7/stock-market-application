import Link from "next/link"
import NextImage from "next/image"
import NavItems from "@/components/NavItems"
import UserDropdown from "./UserDropdown"

const Header = () => {
  return (
    <header className="sticky top-0 bg-[#111] z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <NextImage
            src="/assets/icons/logo.svg"
            alt="Signalist Logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
            priority
          />
        </Link>

        {/* Nav + User */}
        <div className="flex items-center gap-6">
          <nav className="hidden sm:block">
            <NavItems />
          </nav>
          <UserDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header

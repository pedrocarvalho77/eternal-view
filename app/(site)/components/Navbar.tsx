import Link from "next/link"
import NavLinks from "./NavLinks";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar () {
  return (
    <header className="flex items-center justify-between gap-2">
      <Link href="/" className="flex min-h-11 items-center rounded text-lg font-bold text-blue-700 dark:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
        Pedro
      </Link>
      <NavLinks />
      <ThemeSwitcher/>
    </header>
  )
}

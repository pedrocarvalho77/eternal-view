import Link from "next/link"
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar () {
  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" className="text-gradient text-lg font-bold">
        Pedro
      </Link>
      <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-gray-600 dark:text-gray-300">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:underline">{l.label}</Link>
        ))}
      </nav>
      <ThemeSwitcher/>
    </header>
  )
}

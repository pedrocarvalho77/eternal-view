import Link from "next/link"
import { getPages } from "@/sanity/sanity-utils";
import ThemeSwitcher from "./ThemeSwitcher";

export default async function Navbar () {
  const pages = await getPages();

  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" className="text-gradient text-lg font-bold">
        Pedro
      </Link>
      <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-gray-600 dark:text-gray-300">
        {pages.map((page) => (
          <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
        ))}
      </nav>
      <ThemeSwitcher/>
    </header>
  )
}

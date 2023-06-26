import Link from "next/link"
import { getPages } from "@/sanity/sanity-utils";
import ThemeSwitcher from "./ThemeSwitcher";

export default async function Footer () {
    
    // get all of our pages
    const pages = await getPages();

    return (
      <header className="flex items-center justify-between">
         <Link href="/" className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent text-lg font-bold">
          Pedro
        </Link>      
        <div className="flex items-center gap-5 text-sm text-gray-600">
          {pages.map((page) => (
            <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
          ))}
        </div>
        <ThemeSwitcher/>
    </header>
    )
}
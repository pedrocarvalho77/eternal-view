"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center text-sm">
      {links.map((l) => {
        const active = pathname === l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-11 items-center px-2.5 hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${
              active
                ? "font-semibold text-gray-900 underline dark:text-gray-100"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}

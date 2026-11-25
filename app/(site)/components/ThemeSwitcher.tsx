"use client"

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

// The `dark` class is set before paint by the inline script in the layout;
// the icon follows it through CSS, so no React state is needed.
export default function ThemeSwitcher() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  };

  return (
    <button
      type="button"
      aria-label="Toggle light/dark theme"
      className="rounded-full bg-gray-200 p-2 text-gray-800 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      onClick={toggleTheme}
    >
      <SunIcon className="w-6 h-6 dark:hidden" />
      <MoonIcon className="hidden w-6 h-6 dark:block" />
    </button>
  );
}

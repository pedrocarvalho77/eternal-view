"use client"

import { useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const DARK_QUERY = '(prefers-color-scheme: dark)';

const getMeta = () => document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]')!;

// Meta content: "light dark" = follow the system, "light"/"dark" = override.
function applyStored() {
  let stored: string | null = null;
  try { stored = localStorage.getItem('theme'); } catch {}
  getMeta().content = stored === 'light' || stored === 'dark' ? stored : 'light dark';
}

// The icon follows the meta through the `dark:` variant, so no React state is needed.
export default function ThemeSwitcher() {
  // Stay in sync when the override changes in another tab.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => { if (e.key === 'theme' || e.key === null) applyStored(); };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleTheme = () => {
    const meta = getMeta();
    const system = matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
    const current = meta.content === 'light' || meta.content === 'dark' ? meta.content : system;
    const target = current === 'dark' ? 'light' : 'dark';

    // Only store an override that differs from the system, so the site keeps following it otherwise.
    try {
      if (target === system) localStorage.removeItem('theme');
      else localStorage.setItem('theme', target);
    } catch {}
    meta.content = target === system ? 'light dark' : target;
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

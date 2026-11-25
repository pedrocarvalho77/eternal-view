"use client"

import { useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

type Scheme = 'light' | 'dark';

const isScheme = (v: string | null): v is Scheme => v === 'light' || v === 'dark';

// Override = data-theme on <html> (drives CSS) + <meta name="color-scheme"> ("light dark" = follow the system).
function setOverride(scheme: Scheme | null) {
  const root = document.documentElement;
  if (scheme) root.dataset.theme = scheme;
  else delete root.dataset.theme;
  document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]')!.content = scheme ?? 'light dark';
}

function readStored(): Scheme | null {
  try {
    const v = localStorage.getItem('theme');
    return isScheme(v) ? v : null;
  } catch {
    return null;
  }
}

// The icon follows the theme through the `dark:` variant, so no React state is needed.
export default function ThemeSwitcher() {
  // Stay in sync when the override changes in another tab.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'theme' || e.key === null) setOverride(readStored());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggleTheme = () => {
    const system: Scheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const current = document.documentElement.dataset.theme;
    const target: Scheme = (isScheme(current ?? null) ? current : system) === 'dark' ? 'light' : 'dark';

    // Only keep an override that differs from the system, so the site keeps following it otherwise.
    const override = target === system ? null : target;
    try {
      if (override) localStorage.setItem('theme', override);
      else localStorage.removeItem('theme');
    } catch {}
    setOverride(override);
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

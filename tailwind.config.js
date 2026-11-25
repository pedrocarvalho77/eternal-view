const root = ':root:has(> head > meta[name="color-scheme"]'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // `dark:` follows <meta name="color-scheme">: "dark" is an explicit override,
  // "light dark" (default) follows the system preference.
  darkMode: [
    'variant',
    [
      `:where(${root}[content="dark"])) &`,
      `@media (prefers-color-scheme: dark) { :where(${root}[content="light dark"])) & }`,
    ],
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

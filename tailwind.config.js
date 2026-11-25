/** @type {import('tailwindcss').Config} */
module.exports = {
  // `dark:` follows the data-theme attribute on <html> (an explicit override, mirrored in
  // <meta name="color-scheme">); without it, the system preference decides.
  darkMode: [
    'variant',
    [
      ':where(:root[data-theme="dark"]) &',
      '@media (prefers-color-scheme: dark) { :where(:root:not([data-theme])) & }',
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

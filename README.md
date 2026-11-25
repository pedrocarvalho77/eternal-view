# eternal-view

Personal website of Pedro Carvalho, software engineer in Porto: one page with an intro, the tools I work with and every public GitHub repository.

## Stack

- [Next.js 16](https://nextjs.org/) and TypeScript. The page is one route handler (`app/route.ts`) that returns a complete HTML document built in `lib/page.ts`, regenerated at most once an hour.
- Layout, type and motion come from a small design kit committed in `public/assets` (CSS, a little vanilla JS, the real tool icons). There is no React on the page and no CSS framework.
- Light theme (palette and pairing in the `:root` block of `lib/page.ts`), Host Grotesk from Google Fonts.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Structure

```
app/route.ts        the page (GET /)
lib/page.ts         the HTML: hero, about, skills diagram, projects, footer
lib/github.ts       GitHub API client, featured repos, per-repo descriptions
lib/repos-snapshot.json   copy of the repo list, used if the API fails
public/assets       the design kit (css, js, icons, diagram, moment)
public/img          portrait; public/share.jpg is the link preview image
```

## Content

- **Projects**: fetched from the GitHub API for `pedrocarvalho77` (public repos, no forks, no archived). The four in `featured` (in `lib/github.ts`) come first; the rest are listed below them. `overrides` there replaces a description where GitHub's is empty or too long.
- **Text, skills and contacts**: edit `lib/page.ts`. The skills diagram is the JSON inside `#skills`; new icons come from the kit's `icons.mjs fetch`.

Anonymous GitHub API calls are limited to 60 per hour per IP, and Vercel builds share IPs. If the API fails, the page falls back to `lib/repos-snapshot.json` instead of failing the build; set a `GITHUB_TOKEN` environment variable (a token with no scopes is enough) on Vercel to avoid that. Refresh the snapshot with:

```bash
gh api "users/pedrocarvalho77/repos?type=owner&sort=pushed&per_page=100" --jq '[.[]|select(.fork==false and .archived==false)|{name,url:.html_url,description,language,stars:.stargazers_count,homepage:(.homepage//null)}]' > lib/repos-snapshot.json
```

## Deploy

Works on [Vercel](https://vercel.com/new) with no environment variables. Node 24.x is pinned in `package.json`.

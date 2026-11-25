# eternal-view

Personal website of Pedro Carvalho: a landing page that lists all my public GitHub repositories, plus About, Skills and Contact pages.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, server components) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with class-based dark mode (follows the system theme, toggle persisted in `localStorage`)

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Structure

```
app/(site)/     home (repo list), /about, /skills, /contact
lib/github.ts   GitHub API client + per-repo overrides
public/         images (about photo, project covers)
```

## Content

- **Projects**: fetched from the GitHub API (`lib/github.ts`) for `pedrocarvalho77`: every public repo that is not a fork or archived, most recently pushed first. The page is re-generated at most once an hour. Set a repo description on GitHub to have it shown on its card.
- **Per-repo overrides**: `overrides` in `lib/github.ts` adds a description and/or a cover image (put the file in `public/projects/`) for a repo.
- **About / Skills / Contact**: plain pages in `app/(site)/`; edit the text there.

Anonymous GitHub API calls are limited to 60 per hour per IP, and Vercel builds share IPs. If the API fails, the site falls back to `lib/repos-snapshot.json` instead of failing the build; set a `GITHUB_TOKEN` environment variable (a token with no scopes is enough) on Vercel to avoid that. Refresh the snapshot with `gh api "users/pedrocarvalho77/repos?type=owner&sort=pushed&per_page=100" --jq '[.[]|select(.fork==false and .archived==false)|{name,url:.html_url,description,language,stars:.stargazers_count,homepage:(.homepage//null)}]' > lib/repos-snapshot.json`.

## Deploy

Works on [Vercel](https://vercel.com/new) with no environment variables (see the `GITHUB_TOKEN` note above). Node 24.x is pinned in `package.json`.

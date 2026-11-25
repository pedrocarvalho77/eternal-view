# eternal-view

Personal website of Pedro Carvalho: a landing page with a project showcase, plus content pages (About, Skills, Contact). Content is managed in [Sanity](https://www.sanity.io/) and rendered with Next.js.

## Stack

- [Next.js 13](https://nextjs.org/) (App Router, server components) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with class-based dark mode (follows the system theme, toggle persisted in `localStorage`)
- [Sanity](https://www.sanity.io/) headless CMS, with the Studio embedded at `/admin` (`next-sanity`)
- [`@portabletext/react`](https://github.com/portabletext/react-portabletext) to render rich text

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The Studio is at <http://localhost:3000/admin> (requires a Sanity login with access to the project).

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Structure

```
app/(site)/     public site: home (projects), /[slug] (pages), /projects/[project]
app/(studio)/   embedded Sanity Studio (/admin)
sanity/         schemas (page, project), GROQ queries and client config
types/          TypeScript types for Sanity documents
```

## Content

Content comes from the Sanity project configured in `sanity/config/client-config.ts` and `sanity.config.ts` (project id `hd0nb5bl`, dataset `production`). The project id is public and read-only queries need no token. To use another project, change the id and dataset in both files.

- **Pages** (`page`): title, slug, optional image, rich-text content. Each page is added to the navbar automatically.
- **Projects** (`project`): name, slug, image, URL, rich-text content.

Pages are re-fetched from Sanity at most once a minute. Unknown slugs return a 404.

## Deploy

Works on [Vercel](https://vercel.com/new) with no environment variables. The `cdn.sanity.io` image host is allowed in `next.config.js`.

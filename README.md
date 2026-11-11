# Link Vault

A personal catalog of tweets, GitHub repos, articles, and local Claude agents and skills. Each entry has a short summary, a use case, and a product idea — or, for agents and skills, a note on how it is used.

This is a demo prototype. The catalog is a static TypeScript list checked into the repo. Links added from the browser stay in that browser; nothing writes them back to the source file.

Built by [Mithun](https://github.com/MithunXcpu).

## What it does

The home page is a filterable grid of the catalog in `app/data.ts`.

- Search matches title, summary, use case, app idea, and tags.
- Scope filters the list to work, personal, or both.
- Type filters cover tweets, GitHub repos, articles, agents, and skills. A type with zero entries is hidden.
- Category chips cover the topics in the catalog: AI agents, developer tools, security, data, CRM, creative work, finance, productivity, Claude skills, and personal projects.
- The counts at the top are computed from that list.
- Click a card to expand the use case, the app idea (labeled “How to Use” for agents and skills), a local path when one is recorded, and the outbound link. Some GitHub entries also link a related repo.

**Quick Add** opens a modal where you paste a URL and an optional name. The page calls `POST /api/fetch-meta`, which fetches that URL (8 second timeout) and reads the title, description, site name, and keywords from Open Graph and standard meta tags. The client then guesses a type from the host (`x.com` or `twitter.com` becomes a tweet, `github.com` becomes GitHub, anything else an article) and a category from a small keyword list. Saved links go into `localStorage` under `link-vault-staged`, show up as staged cards, and can be removed. They are not committed into `app/data.ts`. New staged links are always scoped as work, and Quick Add does not assign the agent or skill types.

If the metadata fetch fails, the link can still be saved from the URL alone.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- Geist and Geist Mono, loaded with `next/font`

There is no database and no auth. Dependencies are Next.js, React, and React DOM.

## Run it

Next.js 16 needs Node.js 20.9 or newer. This repo uses npm (`package-lock.json`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # eslint
npm run build   # production build
npm start       # serve the production build
```

## Layout

| Path | Role |
| --- | --- |
| `app/page.tsx` | Catalog UI: search, filters, cards, Quick Add |
| `app/data.ts` | Typed catalog the page renders |
| `app/api/fetch-meta/route.ts` | Fetches a pasted URL and returns HTML metadata |
| `app/layout.tsx` | Root layout, fonts, and page metadata |
| `public/data.json` | Static JSON snapshot of an earlier subset of the catalog. The page does not load it, so it can lag behind `app/data.ts`. |

## Adding a catalog entry

Edit `app/data.ts` and append a `LinkEntry`. Required fields are `id`, `type`, `url`, `title`, `summary`, `category`, `scope` (`"work"` or `"personal"`), `useCase`, and `appIdea`. Optional fields include `tags`, `hasGithub`, `githubUrl`, `model`, `toolAccess`, and `location`.

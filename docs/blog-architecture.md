# Blog Architecture

## Source of truth

Blog articles are stored as Markdown files in `content/blog/`. React/Next.js components do not hardcode article content.

## CMS

Decap CMS is served from `public/admin/` and writes the `Posts` collection to `content/blog/`.

The CMS media library writes images to `public/uploads/blog/`.

## Cloud storage / publishing flow

`Decap CMS → GitHub repository (cloud source + versioning) → existing deployment pipeline → Next.js → DripFunnel.com/blog`

GitHub is the cloud source of truth in this implementation. No database is required for the current static Next.js architecture.

## Routes

- `/blog` — reads all Markdown posts.
- `/blog/[slug]` — reads one Markdown post and generates metadata.
- `/admin/` — Decap CMS.

## Post schema

Each post supports:

- title
- slug
- excerpt
- category
- publish date
- reading time
- featured
- cover image
- author
- tags
- SEO title
- SEO description
- canonical URL
- Markdown body

## Deployment

Publishing a post creates a GitHub repository change. The existing deployment pipeline must rebuild the Next.js site after that change.

Do not introduce a second deployment system.

## Production requirement

`public/admin/config.yml` must point to the same GitHub repository that deploys this website, and a GitHub OAuth provider/callback must be configured for the production CMS domain.

## Local CMS

`local_backend: true` supports Decap's local development workflow when the Decap proxy is running.

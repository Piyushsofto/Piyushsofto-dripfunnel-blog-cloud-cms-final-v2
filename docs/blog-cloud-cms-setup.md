# DripFunnel Blog — Cloud CMS Setup

## Architecture

```text
Decap CMS (blog.dripfunnel.com/admin)
        |
        | publish
        v
GitHub repository (cloud source of truth)
        |
        | commit
        v
Existing deployment pipeline
        |
        v
Next.js build
        |
        +--> /blog
        +--> /blog/[slug]
```

## Content storage

Blog articles are Markdown files in:

`content/blog/*.md`

They are **not hardcoded in React components**.

GitHub provides cloud persistence, version history, and the publishing trigger.

## Media storage

Decap uploads blog media to:

`public/uploads/blog/`

The files are versioned with the repository. If the project later needs object storage such as S3/R2/Supabase Storage, only the Decap media backend needs to change; the post schema can remain Markdown/frontmatter.

## Production configuration

Edit:

`public/admin/config.yml`

Replace:

`YOUR_GITHUB_OWNER/YOUR_GITHUB_REPO`

with the GitHub repository that deploys this exact website.

The GitHub backend also requires an OAuth provider/callback for the production CMS domain. Do not commit client secrets into this repository.

## Publishing

1. Open `/admin/`.
2. Sign in through the configured GitHub OAuth flow.
3. Open `Posts`.
4. Create or edit a post.
5. Upload a cover image if needed.
6. Write the article in the Body field.
7. Save/publish.
8. Decap commits the Markdown/media changes to GitHub.
9. The existing deployment pipeline rebuilds Next.js.
10. The article appears at `/blog/[slug]`.

## Local development

Run:

```bash
npm install
npm run dev
```

For Decap local backend development, run the Decap proxy separately and keep `local_backend: true`.

## Data model

Every post supports:

- slug
- title
- excerpt
- cover image
- publish date
- author
- category
- tags
- reading time
- featured
- SEO title
- SEO description
- canonical URL
- Markdown body

## Rules

Do not add article content to `app/blog/page.js`, `app/blog/[slug]/page.js`, or reusable components.

Do not create a second CMS or second deployment system.

Keep the GitHub repository used by Decap aligned with the repository used by the production deployment.

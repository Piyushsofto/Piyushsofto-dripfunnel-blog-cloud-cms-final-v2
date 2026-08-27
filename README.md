# DripFunnel Website

Production Next.js + Tailwind website with a Decap CMS-driven blog.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Blog architecture

The blog is **not hardcoded**.

```text
Decap CMS
  ↓
GitHub cloud repository
  ↓
content/blog/*.md
  ↓
Next.js
  ↓
/blog
/blog/[slug]
```

### CMS

Open `/admin/`.

Decap stores posts in `content/blog/` and media in `public/uploads/blog/`.

Before production publishing, edit `public/admin/config.yml` and replace:

```text
YOUR_GITHUB_OWNER/YOUR_GITHUB_REPO
```

with the GitHub repository used by this deployment. Configure the required GitHub OAuth provider/callback for the production CMS domain.

### Post fields

Slug, title, excerpt, cover image, publish date, author, category, tags, reading time, featured, SEO title, SEO description, canonical URL and Markdown body.

### Source of truth

GitHub is the cloud source of truth for blog content and media in this architecture. Publishing a CMS change creates a repository change; the existing deployment pipeline must rebuild the site.

See `docs/blog-cloud-cms-setup.md` for the complete setup.
# dripfunnel-blog-cloud-cms

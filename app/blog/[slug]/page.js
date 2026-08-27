import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug, getPostHtml } from "../../../lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: post.canonical || `https://dripfunnel.com/blog/${slug}` },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: "article",
      url: post.canonical || `https://dripfunnel.com/blog/${slug}`,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function Article({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await getPostHtml(slug);
  const related = getAllPosts()
    .filter((item) => item.slug !== slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 2);

  return (
    <>
      <section className="article-hero">
        <div className="container">
          <div className="eyebrow">DRIPFUNNEL JOURNAL · {post.category.toUpperCase()}</div>
          <h1>{post.title}</h1>
          <div className="meta-row">
            <span>{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
            <span>By {post.author}</span>
          </div>
          <p>{post.excerpt}</p>
          {post.tags.length > 0 ? (
            <div className="meta-row">{post.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
          ) : null}
        </div>
      </section>

      <article className="article">
        <div className="article-body">
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
          <Link className="btn btn-dark" href="/contact">Let's Grow Your Business Online ↗</Link>

          <div className="related-articles">
            <div className="eyebrow">RELATED ARTICLES</div>
            <div className="related-grid">
              {related.map((item) => (
                <Link className="related-card" href={`/blog/${item.slug}`} key={item.slug}>
                  <small>{item.category}</small>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

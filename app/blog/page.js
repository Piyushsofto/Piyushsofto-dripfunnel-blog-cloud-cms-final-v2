import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../lib/posts";

export const metadata = {
  title: "Blog",
  description: "Practical guidance from DripFunnel on websites, e-commerce, marketing and digital growth.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">DRIPFUNNEL JOURNAL</div>
          <h1>Ideas for building a stronger <em>digital business.</em></h1>
          <p>Practical guidance on websites, e-commerce, marketing and online growth.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p>No articles published yet.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((post, index) => (
                <Link href={`/blog/${post.slug}`} className={`blog-card ${post.featured || index === 0 ? "featured" : ""}`} key={post.slug}>
                  {post.coverImage ? (
                    <div className="blog-card-image">
                      <Image src={post.coverImage} alt="" width={900} height={500} />
                    </div>
                  ) : null}
                  <small>{post.featured || index === 0 ? "FEATURED ARTICLE" : "ARTICLE"}</small>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="meta-row">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <b>Read article →</b>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

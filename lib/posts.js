import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "blog");

function getPostFiles() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .sort();
}

function normalizePost(fileName) {
  const slugFromFile = fileName.replace(/\.md$/, "");
  const source = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
  const { data, content } = matter(source);
  const slug = String(data.slug || slugFromFile);

  return {
    slug,
    title: String(data.title || slugFromFile),
    excerpt: String(data.excerpt || ""),
    category: String(data.category || "Article"),
    date: String(data.date || "Date to be confirmed"),
    readingTime: String(data.readingTime || "4 min read"),
    featured: Boolean(data.featured),
    coverImage: String(data.coverImage || ""),
    author: String(data.author || "DripFunnel"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    seoTitle: String(data.seoTitle || data.title || slugFromFile),
    seoDescription: String(data.seoDescription || data.excerpt || ""),
    canonical: String(data.canonical || `https://dripfunnel.com/blog/${slug}`),
    content,
  };
}

export function getAllPosts() {
  return getPostFiles()
    .map(normalizePost)
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return String(b.date).localeCompare(String(a.date));
    });
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug) || null;
}

export async function getPostHtml(slug) {
  const post = getPostBySlug(slug);
  if (!post) return null;
  const processed = await remark().use(remarkHtml).process(post.content);
  return processed.toString();
}

export const postSlugs = getAllPosts().map((post) => post.slug);

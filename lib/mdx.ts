import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogFrontmatter } from '@/types/blog';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogFrontmatter;

  return {
    slug,
    title: frontmatter.title || 'Untitled',
    description: frontmatter.description || '',
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    tags: frontmatter.tags || [],
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null);

  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

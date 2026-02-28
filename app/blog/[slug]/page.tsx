import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx';
import { generateBlogMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { GiscusComments } from "@/components/blog/GiscusComments";
import { LikeButton } from '@/components/blog/LikeButton';
import { ShareButtons } from '@/components/blog/ShareButtons';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Not Found' };

  return generateBlogMetadata({
    title: post.title,
    description: post.description,
    slug: post.slug,
    date: post.date,
    tags: post.tags,
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>

        {/* Article */}
        <article className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-8 py-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-5">{post.description}</p>

            {/* Meta row */}
            <div className="flex items-center gap-3 text-sm text-gray-500 pb-6 border-b border-gray-100">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.readingTime && (
                <>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </>
              )}
            </div>

            {/* MDX Content */}
            <div className="prose prose-sm sm:prose max-w-none mt-6">
              <MDXRemote source={post.content} />
            </div>
          </div>

          {/* Footer actions */}
          <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <LikeButton slug={post.slug} />
            <ShareButtons slug={post.slug} title={post.title} />
          </div>
        </article>

        {/* Comments */}
        <GiscusComments />
      </div>
    </main>
  );
}

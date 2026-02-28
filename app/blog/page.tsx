import { getAllPosts } from '@/lib/mdx';
import { BlogCard } from '@/components/blog/BlogCard';
import { TagFilter } from '@/components/blog/TagFilter';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on cybersecurity, software development, and technology by Chanukya Chintada.',
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const posts = getAllPosts();

  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.tags))
  ).sort();

  const selectedTag = typeof searchParams.tag === 'string' ? searchParams.tag : undefined;

  const filteredPosts = selectedTag
    ? posts.filter((p) => p.tags.includes(selectedTag))
    : posts;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Blog</h1>
          <p className="text-gray-600 text-sm">
            {posts.length} article{posts.length !== 1 ? 's' : ''} on cybersecurity, development, and more.
          </p>
        </div>

        {/* Tags */}
        <Suspense fallback={<div className="h-8 mb-6" />}>
          <TagFilter allTags={allTags} />
        </Suspense>

        {/* Posts grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            {selectedTag ? (
              <>
                <p className="text-gray-500 font-medium">No posts found for this tag.</p>
                <Link href="/blog" className="text-sm mt-2 inline-block text-blue-600 hover:text-blue-700">
                  Clear filter
                </Link>
              </>
            ) : (
              <>
                <p className="text-gray-500 font-medium">No posts yet</p>
                <p className="text-sm mt-1 text-gray-400">Check back soon!</p>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

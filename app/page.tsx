import { getAllPosts } from '@/lib/mdx';
import { HeaderCard } from '@/components/layout/HeaderCard';
import { BlogCard } from '@/components/blog/BlogCard';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Profile Card */}
        <HeaderCard />

        {/* Blog Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Latest Posts</h2>
            <a
              href="/blog"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View all →
            </a>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-10 text-center text-gray-500">
              <p className="font-medium">No posts yet</p>
              <p className="text-sm mt-1 text-gray-400">Check back soon!</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

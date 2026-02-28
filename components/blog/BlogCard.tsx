import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { formatDate } from '@/lib/utils';
import { getDiscussionCommentCount } from '@/lib/github';

interface BlogCardProps {
  post: BlogPost;
}

export async function BlogCard({ post }: BlogCardProps) {
  const commentCount = await getDiscussionCommentCount(post.slug);

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-xl border border-gray-200 p-5 h-full transition-all duration-200 hover:shadow-md hover:border-blue-100 group-hover:-translate-y-0.5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
          {post.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <time className="text-xs text-gray-400">{formatDate(post.date)}</time>
          <div className="flex items-center gap-3">
            {post.readingTime && (
              <span className="text-xs text-gray-400">{post.readingTime}</span>
            )}
            <span className="text-xs text-gray-500 font-medium">
              💬 {commentCount} comment{commentCount !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

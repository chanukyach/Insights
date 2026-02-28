'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export function TagFilter({ allTags }: { allTags: string[] }) {
    const searchParams = useSearchParams();
    const selectedTag = searchParams.get('tag');

    if (allTags.length === 0) return null;

    return (
        <div className="flex flex-wrap items-center gap-2 mb-6">
            {allTags.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                    <Link
                        key={tag}
                        href={isActive ? '/blog' : `/blog?tag=${encodeURIComponent(tag)}`}
                        className={`text-xs px-2.5 py-1 border rounded-full font-medium transition-colors ${isActive
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                            }`}
                    >
                        {tag}
                    </Link>
                );
            })}

            {selectedTag && (
                <Link
                    href="/blog"
                    className="text-xs px-2.5 py-1 text-gray-500 hover:text-gray-900 transition-colors ml-auto flex items-center gap-1"
                >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Clear filter
                </Link>
            )}
        </div>
    );
}

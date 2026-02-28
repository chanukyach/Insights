'use client';

import { useState, useEffect } from 'react';

interface LikeButtonProps {
  slug: string;
}

export function LikeButton({ slug }: LikeButtonProps) {
  const storageKey = `like-${slug}`;
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        const { liked: storedLiked, count: storedCount } = JSON.parse(stored);
        setLiked(storedLiked);
        setCount(storedCount);
      } catch {
        // legacy format
        setLiked(true);
        setCount(1);
      }
    }
  }, [storageKey]);

  const handleLike = () => {
    if (!mounted) return;

    const newLiked = !liked;
    const newCount = newLiked ? count + 1 : Math.max(0, count - 1);

    setLiked(newLiked);
    setCount(newCount);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);

    localStorage.setItem(storageKey, JSON.stringify({ liked: newLiked, count: newCount }));
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleLike}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
        liked
          ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100'
          : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
      }`}
      aria-label={liked ? 'Unlike this post' : 'Like this post'}
    >
      <svg
        className={`w-4 h-4 transition-transform ${animating ? 'scale-125' : 'scale-100'}`}
        viewBox="0 0 24 24"
        fill={liked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>{count > 0 ? count : 'Like'}</span>
    </button>
  );
}

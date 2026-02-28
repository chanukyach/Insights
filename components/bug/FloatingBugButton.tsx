'use client';

import { useState, useEffect } from 'react';
import { BugReportModal } from './BugReportModal';

export function FloatingBugButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(true);
    }
  };

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg text-gray-500 hover:text-red-500 hover:border-red-200 hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center group"
        title="Report a bug"
        aria-label="Report a bug"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:rotate-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </button>

      {isOpen && <BugReportModal onClose={() => setIsOpen(false)} />}
    </>
  );
}

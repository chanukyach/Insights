'use client';

import { useModal } from '@/components/modal/ModalProvider';

export function FollowButton() {
  const { openModal } = useModal();

  return (
    <button
      onClick={() => openModal('follow')}
      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      Follow
    </button>
  );
}

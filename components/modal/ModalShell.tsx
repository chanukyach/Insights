'use client';

import { ReactNode } from 'react';
import { useModal } from './ModalProvider';

interface ModalShellProps {
  title: ReactNode;
  children: ReactNode;
  onClose?: () => void;
}

export function ModalShell({ title, children, onClose }: ModalShellProps) {
  const { closeModal } = useModal();
  const handleClose = onClose || closeModal;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <button
          onClick={handleClose}
          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {/* Body */}
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

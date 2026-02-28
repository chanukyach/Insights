'use client';

import { useEffect, useCallback } from 'react';
import { useModal } from './ModalProvider';
import { AboutModal } from './AboutModal';
import { EducationModal } from './EducationModal';
import { ContactModal } from './ContactModal';
import { CertificatesPreviewModal } from './CertificatesPreviewModal';
import { ProjectsPreviewModal } from './ProjectsPreviewModal';
import { FollowModal } from './FollowModal';

export function ModalContainer() {
  const { activeModal, closeModal } = useModal();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    if (activeModal) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModal, handleKeyDown]);

  if (!activeModal) return null;

  const modalMap = {
    about: <AboutModal />,
    education: <EducationModal />,
    contact: <ContactModal />,
    'certificates-preview': <CertificatesPreviewModal />,
    'projects-preview': <ProjectsPreviewModal />,
    'bug-report': null, // handled by FloatingBugButton's own modal
    follow: <FollowModal />,
  };

  const content = modalMap[activeModal];
  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={closeModal}
      />
      {/* Modal Panel */}
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scale-in">
        {content}
      </div>
    </div>
  );
}

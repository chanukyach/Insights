'use client';

import { useModal, ModalType } from '@/components/modal/ModalProvider';

const tabs: { label: string; modal: ModalType }[] = [
  { label: 'About', modal: 'about' },
  { label: 'Projects', modal: 'projects-preview' },
  { label: 'Certificates', modal: 'certificates-preview' },
  { label: 'Education', modal: 'education' },
  { label: 'Contact', modal: 'contact' },
];

export function NavigationTabs() {
  const { openModal } = useModal();

  return (
    <div className="flex items-center gap-1 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => openModal(tab.modal)}
          className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

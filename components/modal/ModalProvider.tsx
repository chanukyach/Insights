'use client';

import { createContext, useCallback, useContext, useState, ReactNode } from 'react';

export type ModalType =
  | 'about'
  | 'education'
  | 'contact'
  | 'certificates-preview'
  | 'projects-preview'
  | 'bug-report'
  | 'follow'
  | null;

interface ModalContextValue {
  activeModal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  activeModal: null,
  openModal: () => { },
  closeModal: () => { },
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = useCallback((type: ModalType) => {
    setActiveModal(type);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  return (
    <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

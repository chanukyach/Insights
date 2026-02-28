import type { Metadata } from 'next';
import './globals.css';
import { ModalProvider } from '@/components/modal/ModalProvider';
import { ModalContainer } from '@/components/modal/ModalContainer';
import { FloatingBugButton } from '@/components/bug/FloatingBugButton';
import { ToastContainer } from '@/components/ui/Toast';
import { defaultMetadata } from '@/lib/seo';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <ModalProvider>
          {children}
          <ModalContainer />
          <FloatingBugButton />
          <ToastContainer />
        </ModalProvider>
      </body>
    </html>
  );
}

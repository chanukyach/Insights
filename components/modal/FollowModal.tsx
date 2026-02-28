'use client';

import { ModalShell } from './ModalShell';
import { Button } from '@/components/ui/Button';
import { useModal } from './ModalProvider';

export function FollowModal() {
    const { closeModal } = useModal();

    const handleSubscribe = () => {
        window.open('https://groups.google.com/g/insights-chanukyachintada', '_blank', 'noopener,noreferrer');
    };

    return (
        <ModalShell title="Subscribe to Insights Updates">
            <div className="space-y-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                    Join my Google Group to receive updates whenever I publish new blog posts, research, or case studies.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Button onClick={handleSubscribe} className="w-full sm:w-auto" variant="primary" size="md">
                        Continue to Subscribe
                    </Button>
                    <button
                        onClick={closeModal}
                        className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100/50"
                    >
                        Maybe later
                    </button>
                </div>
            </div>
        </ModalShell>
    );
}

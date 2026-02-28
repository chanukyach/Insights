'use client';

import { useState, FormEvent } from 'react';
import { ModalShell } from './ModalShell';
import { Button } from '@/components/ui/Button';

export function ContactModal() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mankbvql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: '✅ Thanks for reaching out. I’ll get back to you soon!' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: '❌ Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: '❌ Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:text-gray-400';

  return (
    <ModalShell title="Get in Touch">
      <form onSubmit={handleSubmit} className="space-y-4">
        {status && (
          <div className={`p-3 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {status.message}
          </div>
        )}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="What would you like to say?"
            className={`${inputClass} resize-none`}
          />
        </div>
        <Button type="submit" loading={loading} disabled={loading} className="w-full" size="md">
          {loading ? 'Submitting...' : 'Send Message'}
        </Button>
        <p className="text-xs text-center text-gray-400">
          I typically respond within 24–48 hours.
        </p>
      </form>
    </ModalShell>
  );
}

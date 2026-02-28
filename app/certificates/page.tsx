import Link from 'next/link';
import { certificates } from '@/content/certificates/certificates-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificates',
  description: 'Professional certifications and credentials by Chanukya Chintada.',
};

export default function CertificatesPage() {
  const grouped = certificates.reduce<Record<string, typeof certificates>>((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = [];
    acc[cert.category].push(cert);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Certifications</h1>
        <p className="text-gray-600 text-sm mb-8">{certificates.length} credentials earned</p>

        <div className="space-y-8">
          {Object.entries(grouped).map(([category, certs]) => (
            <div key={category}>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                {category}
              </h2>
              <div className="space-y-3">
                {certs.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-gray-900">{cert.title}</h3>
                        <span className="text-xs text-gray-400 flex-shrink-0">{cert.date}</span>
                      </div>
                      <p className="text-xs text-blue-600 font-medium mt-0.5">{cert.issuer}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

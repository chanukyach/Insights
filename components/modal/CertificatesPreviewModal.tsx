'use client';

import { ModalShell } from './ModalShell';
import { certificates } from '@/content/certificates/certificates-data';
import Link from 'next/link';
import { ExternalLink } from "lucide-react";

export function CertificatesPreviewModal() {
  return (
    <ModalShell
      title={
        <div className="flex items-center gap-2">
          <span>Certifications</span>
          <button
            onClick={() => window.open('https://portfolio-chanukyachintada.vercel.app/certificates.html', '_blank')}
            className="text-gray-500 hover:text-black transition flex items-center justify-center p-1"
            title="View all certificates externally"
          >
            <ExternalLink size={18} />
          </button>
        </div>
      }
    >
      <div className="space-y-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug">{cert.title}</h3>
                <span className="text-xs text-gray-400 flex-shrink-0">{cert.date}</span>
              </div>
              <p className="text-xs text-blue-600 font-medium mt-0.5">{cert.issuer}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {cert.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded-md">
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded-md">
                    +{cert.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
            {cert.credentialUrl && (
              <Link
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-gray-400 hover:text-blue-600 transition-colors mt-0.5"
                title="View credential"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            )}
          </div>
        ))}
      </div>
    </ModalShell>
  );
}

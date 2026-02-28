'use client';

import { ModalShell } from './ModalShell';

const education = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "Your University Name",
    period: "2021 – 2025",
    gpa: "8.5 / 10",
    highlights: [
      "Relevant coursework: Network Security, Operating Systems, Database Systems, Algorithms",
      "Member of Cybersecurity Club — organized CTF events",
      "Final year project: Automated Threat Intelligence Platform",
    ],
  },
];

const onlineLearning = [
  { name: "TryHackMe", detail: "Top 5% globally — 200+ rooms completed" },
  { name: "HackTheBox", detail: "Pro Hacker rank" },
  { name: "Coursera", detail: "Google Cybersecurity Professional Certificate" },
  { name: "Splunk Training", detail: "Core Certified Power User path" },
];

export function EducationModal() {
  return (
    <ModalShell title="Education">
      <div className="space-y-6">
        {/* Formal Education */}
        {education.map((edu) => (
          <div key={edu.institution} className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{edu.degree}</h3>
                <p className="text-blue-600 text-sm font-medium">{edu.institution}</p>
              </div>
              <span className="text-xs text-gray-500 flex-shrink-0 bg-gray-100 px-2 py-1 rounded-md">
                {edu.period}
              </span>
            </div>
            <p className="text-xs text-gray-500">GPA: {edu.gpa}</p>
            <ul className="space-y-1">
              {edu.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Online Learning */}
        <div className="border-t border-gray-100 pt-4">
          <h3 className="font-semibold text-gray-900 text-sm mb-3">Self-Directed Learning</h3>
          <div className="space-y-2">
            {onlineLearning.map((item) => (
              <div key={item.name} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-800">{item.name}</span>
                <span className="text-xs text-gray-500">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalShell>
  );
}

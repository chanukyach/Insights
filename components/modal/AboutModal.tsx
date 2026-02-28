'use client';

import { ModalShell } from './ModalShell';

export function AboutModal() {
  return (
    <ModalShell title="About Me">
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
        <p>
          Hi, I&apos;m <strong className="text-gray-900">Chanukya Chintada</strong> — a cybersecurity
          enthusiast, developer, and lifelong learner based in India.
        </p>
        <p>
          I specialize in blue-team security operations, web security research, and building
          developer tools. I&apos;m passionate about making complex security concepts accessible
          through clear writing and hands-on labs.
        </p>

        <div className="border-t border-gray-100 pt-4">
          <h3 className="font-semibold text-gray-900 mb-2">What I Do</h3>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              SOC operations — alert triage, incident response, threat hunting
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              Web application penetration testing & vulnerability research
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              Full-stack development with Next.js, TypeScript, and Python
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              Writing technical content to share what I learn
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <h3 className="font-semibold text-gray-900 mb-2">Currently</h3>
          <p>
            Pursuing cybersecurity certifications, contributing to open-source security tooling,
            and documenting my learning journey on this platform.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <h3 className="font-semibold text-gray-900 mb-2">When I&apos;m Not at a Terminal</h3>
          <p>
            You&apos;ll find me reading about distributed systems, exploring CTF challenges, or
            brewing a strong cup of tea.
          </p>
        </div>
      </div>
    </ModalShell>
  );
}

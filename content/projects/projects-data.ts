import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'insights-platform',
    title: 'Insights — Personal Knowledge Platform',
    description:
      'A production-ready personal knowledge platform built with Next.js, featuring an MDX blog system, modal-based navigation, Giscus comments, and Formspree forms.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    githubUrl: 'https://github.com/chanukyachintada/insights',
    liveUrl: 'https://insights.chanukyachintada.xyz',
    status: 'completed',
    featured: true,
  },
  {
    id: 'soc-dashboard',
    title: 'SOC Alert Triage Dashboard',
    description:
      'A Splunk-powered dashboard for SOC analysts to triage and correlate security alerts, with automated playbook suggestions based on MITRE ATT&CK TTPs.',
    tags: ['Splunk', 'SPL', 'Python', 'MITRE ATT&CK'],
    githubUrl: 'https://github.com/chanukyachintada/soc-dashboard',
    status: 'completed',
    featured: true,
  },
  {
    id: 'vuln-scanner',
    title: 'Web Vulnerability Scanner',
    description:
      'A lightweight Python-based web vulnerability scanner targeting OWASP Top 10 — including SQL injection, XSS, and SSRF detection.',
    tags: ['Python', 'Security', 'OWASP', 'Penetration Testing'],
    githubUrl: 'https://github.com/chanukyachintada/vuln-scanner',
    status: 'in-progress',
    featured: false,
  },
  {
    id: 'ctf-writeups',
    title: 'CTF Writeup Collection',
    description:
      'Documented solutions and methodologies from various Capture The Flag competitions including TryHackMe, HackTheBox, and PicoCTF.',
    tags: ['CTF', 'Cybersecurity', 'Writeups', 'Linux'],
    githubUrl: 'https://github.com/chanukyachintada/ctf-writeups',
    status: 'in-progress',
    featured: false,
  },
];

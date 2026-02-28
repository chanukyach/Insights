import { Certificate } from '@/types/certificate';

export const certificates: Certificate[] = [
  {
    id: 'cc-isc2',
    title: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC²',
    date: '2024-06',
    credentialUrl: 'https://www.credly.com/',
    category: 'Security',
    skills: ['Security Principles', 'Network Security', 'Access Control', 'Incident Response'],
  },
  {
    id: 'google-cybersec',
    title: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google / Coursera',
    date: '2024-03',
    credentialUrl: 'https://www.coursera.org/',
    category: 'Security',
    skills: ['SIEM', 'Python', 'Linux', 'SQL', 'Network Security'],
  },
  {
    id: 'splunk-power-user',
    title: 'Splunk Core Certified Power User',
    issuer: 'Splunk',
    date: '2024-04',
    credentialUrl: 'https://www.splunk.com/',
    category: 'SIEM',
    skills: ['SPL', 'Log Analysis', 'Dashboards', 'Threat Detection'],
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023-12',
    credentialUrl: 'https://aws.amazon.com/certification/',
    category: 'Cloud',
    skills: ['AWS', 'Cloud Concepts', 'Security', 'Pricing'],
  },
];

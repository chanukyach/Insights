export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
  category: string;
  skills: string[];
}

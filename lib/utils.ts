export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + '...';
}

export function getShareUrl(slug: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://insights.chanukyachintada.xyz';
  return `${base}/blog/${slug}`;
}

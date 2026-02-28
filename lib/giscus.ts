export const giscusConfig = {
  repo: (process.env.NEXT_PUBLIC_GISCUS_REPO || 'chanukyachintada/insights') as `${string}/${string}`,
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || '',
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'Announcements',
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
  mapping: 'pathname' as const,
  reactionsEnabled: '1' as const,
  emitMetadata: '0' as const,
  inputPosition: 'bottom' as const,
  theme: 'light' as const,
  lang: 'en' as const,
  loading: 'lazy' as const,
};

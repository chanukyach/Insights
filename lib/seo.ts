import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://insights.chanukyachintada.xyz';
const SITE_NAME = 'Insights by Chanukya Chintada';
const SITE_DESCRIPTION =
  'Personal knowledge platform covering cybersecurity, technology, and software development by Chanukya Chintada.';
const TWITTER_HANDLE = '@chanukyac';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | Insights`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'cybersecurity',
    'technology',
    'software development',
    'blog',
    'Chanukya Chintada',
    'insights',
    'SOC',
    'penetration testing',
  ],
  authors: [{ name: 'Chanukya Chintada', url: SITE_URL }],
  creator: 'Chanukya Chintada',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: TWITTER_HANDLE,
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export function generateBlogMetadata({
  title,
  description,
  slug,
  date,
  tags,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
}): Metadata {
  const url = `${SITE_URL}/blog/${slug}`;

  return {
    title,
    description,
    keywords: tags,
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      publishedTime: date,
      authors: ['Chanukya Chintada'],
      tags,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}

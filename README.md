# Insights — Personal Knowledge Platform

A production-ready personal knowledge platform built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

🌐 **Live:** [insights.chanukyachintada.xyz](https://insights.chanukyachintada.xyz)

---

## ✨ Features

- **MDX Blog System** — Write posts in `content/blog/*.mdx` with frontmatter
- **Global Modal System** — React Context-powered modals (About, Education, Contact, Projects, Certificates, Bug Report)
- **Contact Form** — Formspree integration with toast notifications
- **Floating Bug Report Button** — Bottom-right fixed button with its own modal
- **Giscus Comments** — GitHub Discussions-powered comments on blog posts
- **Like Button** — localStorage-based, per-post, toggle like system
- **Share Buttons** — Copy link, LinkedIn, WhatsApp sharing
- **Full SEO** — OpenGraph, Twitter Cards, sitemap, canonical URLs
- **LinkedIn-style UI** — Clean, white, soft shadows, blue accents
- **Light Theme Only** — Crisp, professional aesthetic

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Fill in your values (see below)

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🔐 Environment Variables

Create `.env.local` in the root:

```env
# Formspree form IDs (from formspree.io)
NEXT_PUBLIC_FORMSPREE_CONTACT=xyzabc12
NEXT_PUBLIC_FORMSPREE_BUG=abcxyz34

# Giscus (from giscus.app)
NEXT_PUBLIC_GISCUS_REPO=chanukyachintada/insights
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDO...
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDO...

# Site URL (no trailing slash)
NEXT_PUBLIC_SITE_URL=https://insights.chanukyachintada.xyz
```

### Getting Giscus credentials

1. Enable GitHub Discussions on your repo
2. Visit [giscus.app](https://giscus.app)
3. Configure and copy the `data-repo-id` and `data-category-id` values

### Getting Formspree IDs

1. Sign up at [formspree.io](https://formspree.io)
2. Create two forms: Contact and Bug Report
3. Copy the form IDs (the part after `/f/` in the endpoint URL)

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx             # Root layout (ModalProvider, Toast, FloatingBugButton)
│   ├── page.tsx               # Homepage
│   ├── sitemap.ts             # Auto-generated sitemap
│   ├── blog/
│   │   ├── page.tsx           # Blog listing
│   │   └── [slug]/page.tsx    # Blog post (MDX)
│   ├── certificates/page.tsx
│   └── projects/page.tsx
│
├── components/
│   ├── blog/
│   │   ├── BlogCard.tsx       # Post card for grid listings
│   │   ├── GiscusComments.tsx # Lazy-loaded Giscus integration
│   │   ├── LikeButton.tsx     # localStorage-backed like button
│   │   └── ShareButtons.tsx   # Copy/LinkedIn/WhatsApp share
│   ├── bug/
│   │   ├── BugReportModal.tsx # Bug report form modal
│   │   └── FloatingBugButton.tsx
│   ├── follow/
│   │   └── FollowButton.tsx   # Google Groups subscribe
│   ├── layout/
│   │   ├── HeaderCard.tsx     # Profile card (top of homepage)
│   │   ├── NavigationTabs.tsx # About/Projects/etc. tab buttons
│   │   └── SocialIcons.tsx    # GitHub/LinkedIn/Twitter/THM icons
│   ├── modal/
│   │   ├── ModalProvider.tsx  # React Context for modal state
│   │   ├── ModalContainer.tsx # Renders active modal with backdrop
│   │   ├── ModalShell.tsx     # Reusable modal wrapper (header + close)
│   │   ├── AboutModal.tsx
│   │   ├── EducationModal.tsx
│   │   ├── ContactModal.tsx
│   │   ├── CertificatesPreviewModal.tsx
│   │   └── ProjectsPreviewModal.tsx
│   └── ui/
│       ├── Button.tsx         # Reusable button with variants
│       ├── Card.tsx           # Card primitives
│       ├── Loader.tsx         # Spinner
│       └── Toast.tsx          # Toast notifications + container
│
├── content/
│   ├── blog/
│   │   ├── first-post.mdx
│   │   ├── soc-guide.mdx
│   │   └── sql-injection-lab.mdx
│   ├── certificates/certificates-data.ts
│   └── projects/projects-data.ts
│
├── lib/
│   ├── mdx.ts                 # Read + parse MDX files
│   ├── seo.ts                 # Metadata helpers
│   ├── formspree.ts           # Form submission utility
│   ├── giscus.ts              # Giscus config
│   └── utils.ts               # Date formatting, cn(), etc.
│
└── types/
    ├── blog.ts
    ├── certificate.ts
    └── project.ts
```

---

## ✍️ Writing Blog Posts

Create a new file in `content/blog/my-post.mdx`:

```mdx
---
title: "My Post Title"
description: "A brief summary shown in listings and SEO."
date: "2024-11-01"
tags: ["cybersecurity", "tutorial"]
---

# My Post Title

Your content here...
```

The post will automatically appear at `/blog/my-post`.

---

## 🎨 Customization

### Update your profile

Edit `components/layout/HeaderCard.tsx`:
- Name, tagline, location
- Social links (GitHub, LinkedIn, Twitter)
- Google Groups follow link

### Update your social links

Edit `components/layout/SocialIcons.tsx` — add/remove social platforms.

### Add your profile photo

Place a `profile.jpg` in the `/public` folder. If not found, it falls back to initials.

### Update projects & certificates

Edit the data files:
- `content/projects/projects-data.ts`
- `content/certificates/certificates-data.ts`

---

## 🚢 Deployment (Vercel)

1. Push to GitHub
2. Connect to Vercel
3. Add all environment variables in Vercel dashboard
4. Deploy

The site is pre-configured for static export compatibility. All blog routes are statically generated at build time via `generateStaticParams()`.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS + Typography | Styling |
| next-mdx-remote | MDX rendering |
| gray-matter | Frontmatter parsing |
| Formspree | Contact & bug report forms |
| Giscus | Blog comments (GitHub Discussions) |
| Vercel | Hosting |

---

## 📄 License

MIT — use freely for your own personal knowledge platform.

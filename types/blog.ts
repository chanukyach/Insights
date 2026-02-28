export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
  readingTime?: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string; // author ID
  publishedAt: string; // YYYY-MM-DD
  updatedAt?: string;
  thumbnail: string;
  ogImage?: string;
  categories: string[];
  tags: string[];
  featured: boolean;
  published: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export function calculateReadingTime(content: string, wpm = 200): number {
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}

export function formatDate(dateStr: string, locale = 'hu-HU'): string {
  return new Date(dateStr).toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

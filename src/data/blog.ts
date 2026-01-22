import blogData from './blog.json';

export interface BlogPost {
  topic: string;
  description: string;
  venue: string;
  date: string;
  readMoreLink: string;
  imageUrl: string;
}

export const blogPosts: readonly BlogPost[] = blogData;

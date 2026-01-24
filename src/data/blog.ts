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

export const featuredBlogPost = {
  title: 'Latest episode of The "Quackcast"',
  description:
    'Get to know our team and understand what tools we use day to day to make our life easier',
  author: {
    name: 'Name Surname',
    role: 'Past President',
    avatar: '/board-members/PasinduDinal.jpg',
  },
  imageUrl: '/home/quackcast-duck.png',
  readMoreLink: '#',
};

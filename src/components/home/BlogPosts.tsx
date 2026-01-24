'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import BlogCard from './BlogCard';
import HomeSectionLayout from '../layout/HomeSectionLayout';
import BlogHero from './BlogHero';
import { BlogPost } from '@/data/blog';

interface FeaturedBlogPost {
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  imageUrl: string;
  readMoreLink: string;
}

interface BlogPostsProps {
  featuredPost?: FeaturedBlogPost;
  posts: readonly BlogPost[];
}

const BlogPosts = ({ featuredPost, posts }: BlogPostsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // If we have vertical scroll delta, map it to horizontal scroll
      if (e.deltaY !== 0) {
        e.preventDefault();
        gsap.to(container, {
          scrollLeft: container.scrollLeft + e.deltaY * 4,
          duration: 1.5,
          ease: 'power4.out',
          overwrite: true,
        });
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      gsap.killTweensOf(container);
    };
  }, []);

  return (
    <HomeSectionLayout title="Blog posts">
      {/* Featured Blog Hero */}
      {featuredPost && <BlogHero {...featuredPost} />}

      {/* Blog Grid - Horizontal Scroll with BlogCard */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto no-scrollbar py-4 select-none"
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {posts.map((post) => (
          <BlogCard key={post.topic} {...post} />
        ))}
      </div>
    </HomeSectionLayout>
  );
};

export default BlogPosts;

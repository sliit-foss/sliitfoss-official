import Masonry from '@/components/Masonry';
import gallery from '@/data/gallery.json';
import Hero from '@/components/Hero';

import BlogPosts from '@/components/home/BlogPosts';

import ComingSoon from '@/components/home/ComingSoon';
import Podcast from '@/components/home/Podcast';
import RecentEvents from '@/components/home/RecentEvents';
import { events } from '@/data/events';

import { blogPosts, featuredBlogPost } from '@/data/blog';

import Gallery from '@/components/Gallery';

import Footer from '@/components/Footer';
import WhatWeDo from '@/components/home/WhatWeDo';

export default function Home() {
  const today = new Date().toISOString().split('T')[0];
  const sorted = events.toSorted((a, b) => a.date.localeCompare(b.date));

  const recentEvents = sorted.filter((e) => e.date < today).reverse();
  const upcomingEvents = sorted
    .filter((e) => e.date >= today)
    .slice(0, 4)
    .map((e) => ({
      ...e,
      month: new Date(`${e.date}T00:00:00`).toLocaleString('en-US', {
        month: 'long',
      }),
    }));

  return (
    <main className="bg-white relative">
      <Hero />
      <WhatWeDo />

      <RecentEvents events={recentEvents} />
      <Podcast />
      <ComingSoon events={upcomingEvents} />

      <BlogPosts featuredPost={featuredBlogPost} posts={blogPosts} />

      <Gallery />

      <Footer />
    </main>
  );
}

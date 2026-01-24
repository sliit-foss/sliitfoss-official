
import Masonry from '@/components/Masonry';
import gallery from '@/data/gallery.json';
import Hero from '@/components/Hero';
import ComingSoon from '@/components/home/ComingSoon';
import Podcast from '@/components/home/Podcast';
import RecentEvents from '@/components/home/RecentEvents';
import { events } from '@/data/events';

import Footer from '@/components/Footer';
    
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


      <div className="px-6 md:px-12 lg:px-24">
        <h1 className="mb-6 pb-4 text-3xl md:text-4xl font-bold font-bricolage heading-gradient">
          Gallery
        </h1>
        <div className="w-full">
          <Masonry items={gallery} />
        </div>
      </div>


      <RecentEvents events={recentEvents} />
      <Podcast />
      <ComingSoon events={upcomingEvents} />

      <Footer />

    </main>
  );
}

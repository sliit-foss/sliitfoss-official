
import Masonry from '@/components/Masonry';
import gallery from '@/data/gallery.json';
import Hero from '@/components/Hero';
import ComingSoon from '@/components/home/ComingSoon';
import Podcast from '@/components/home/Podcast';
import RecentEvents from '@/components/home/RecentEvents';
import { events } from '@/data/events';
import GradTitle from '@/components/GradTitle';

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

      <RecentEvents events={recentEvents} />
      <Podcast />
      <ComingSoon events={upcomingEvents} />

      <div className="px-[3.5vw]">
        <div className="pb-8">
          <GradTitle content="Gallery" className="leading-[1.15] pb-1" />
        </div>
        <div className="w-full my-10 md:my-16">
          <Masonry items={gallery} />
        </div>
      </div>

      <Footer />

    </main>
  );
}

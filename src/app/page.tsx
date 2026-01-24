
import Masonry from '@/components/Masonry';
import gallery from '@/data/gallery.json';
import Hero from '@/components/Hero';
import ComingSoon from '@/components/home/ComingSoon';
import Podcast from '@/components/home/Podcast';
import RecentEvents from '@/components/home/RecentEvents';
import { events } from '@/data/events';
import GradTitle from '@/components/GradTitle';
import IconButton from '@/components/IconButton';
import { MdArrowForward } from 'react-icons/md';

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
        <div className="pb-8 flex items-center gap-6">
          <GradTitle content="Gallery" className="leading-[1.15] pb-1" />
          <IconButton title="Expand" href="#" styles="mt-0 px-4 py-2 text-base !bg-[#8C8C8C1F]">
            <MdArrowForward size={18} />
          </IconButton>
        </div>
        <div className="w-full my-10 md:my-16">
          <Masonry items={gallery} />
        </div>
      </div>

      <Footer />

    </main>
  );
}

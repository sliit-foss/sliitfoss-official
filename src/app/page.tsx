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
      <RecentEvents events={recentEvents} />
      <Podcast />
      <ComingSoon events={upcomingEvents} />
      <Footer />
    </main>
  );
}

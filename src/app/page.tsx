import Hero from '@/components/Hero';
import ComingSoon from '@/components/home/ComingSoon';
import Podcast from '@/components/home/Podcast';
import RecentEvents from '@/components/home/RecentEvents';
import { events } from '@/data/events';

const getTodayMidnight = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export default function Home() {
  const today = getTodayMidnight();

  const recentEvents = [...events]
    .filter((event) => new Date(event.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const upcomingEvents = [...events]
    .filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4)
    .map((event) => ({
      ...event,
      month: new Date(event.date).toLocaleString('en-US', { month: 'long' }),
    }));

  return (
    <main className="bg-white relative">
      <Hero />
      <RecentEvents events={recentEvents} />
      <Podcast />
      <ComingSoon events={upcomingEvents} />
    </main>
  );
}

'use client';

import ComingSoon from '@/components/home/ComingSoon';
import Podcast from '@/components/home/Podcast';
import RecentEvents from '@/components/home/RecentEvents';

export default function Home() {
  return (
    <div>
      <RecentEvents />
      <Podcast />
      <ComingSoon />
    </div>
  );
}

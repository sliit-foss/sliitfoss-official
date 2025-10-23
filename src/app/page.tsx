'use client';

import ComingSoon from '@/components/home/ComingSoon';
import RecentEvents from '@/components/home/RecentEvents';

export default function Home() {
  return (
    <div>
      <RecentEvents />
      <ComingSoon />
    </div>
  );
}

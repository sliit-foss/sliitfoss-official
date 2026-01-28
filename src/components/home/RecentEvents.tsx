'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import EventCard from '../event/EventCard';
import HomeSectionLayout from '../layout/HomeSectionLayout';
import { Event } from '@/data/events';

interface RecentEventsProps {
  events: readonly Event[];
}

const RecentEvents = ({ events }: RecentEventsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // If we have vertical scroll delta, map it to horizontal scroll
      if (e.deltaY !== 0) {
        e.preventDefault();
        gsap.to(container, {
          scrollLeft: container.scrollLeft + e.deltaY * 4, // Multiplier for speed/feel
          duration: 1.5, // Longer duration for smoother momentum
          ease: 'power4.out', // Stronger easing for better "slide" feel
          overwrite: true, // Ensure new scrolls override old ones immediately
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
    <HomeSectionLayout title="Recent Events">
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto no-scrollbar py-4 select-none"
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {events.map((event) => (
          <EventCard key={event.topic} {...event} />
        ))}
      </div>
    </HomeSectionLayout>
  );
};

export default RecentEvents;

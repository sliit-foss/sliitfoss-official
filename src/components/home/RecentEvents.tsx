import { useRef, useState, useEffect, useCallback, useMemo, memo } from 'react';
import EventCard from '../event/EventCard';
import { events } from '@/data/events';
import HomeSectionLayout from '../layout/HomeSectionLayout';

const getTodayMidnight = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const RecentEvents = memo(() => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Memoize latest events calculation
  const latestEvents = useMemo(() => {
    const today = getTodayMidnight();
    return [...events]
      .filter((event) => new Date(event.date) < today)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  // Memoize mouse handlers to prevent recreation
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !scrollContainerRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    handleMouseUp();
  }, [handleMouseUp]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.style.cursor = 'grab';

    const cleanup = () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return cleanup;
  }, [handleMouseUp, handleMouseLeave]);

  return (
    <HomeSectionLayout title="Recent Events">
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide py-4 select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {latestEvents.map((event) => (
          <EventCard key={event.topic} {...event} />
        ))}
      </div>
    </HomeSectionLayout>
  );
});

RecentEvents.displayName = 'RecentEvents';

export default RecentEvents;

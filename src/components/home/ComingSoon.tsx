import { useState, useEffect, useMemo, useCallback } from 'react';
import HomeSectionLayout from '../layout/HomeSectionLayout';
import ComingSoonCard from './ComingSoonCard';
import { events } from '@/data/events';

const getTodayMidnight = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const ComingSoon = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const upcomingEvents = useMemo(() => {
    const today = getTodayMidnight();

    return [...events]
      .filter((event) => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 4)
      .map((event) => ({
        ...event,
        month: new Date(event.date).toLocaleString('en-US', { month: 'long' }),
      }));
  }, []);

  const handleMouseEnter = useCallback(
    (index: number) => {
      if (!isMobile) setHoveredIndex(index);
    },
    [isMobile]
  );

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setHoveredIndex(null);
  }, [isMobile]);

  const getWidthClass = useCallback(
    (index: number) => {
      if (isMobile) return 'lg:w-1/4';

      const isHovered = hoveredIndex === index;
      const isAnotherHovered = hoveredIndex !== null && !isHovered;

      if (isHovered) return 'lg:w-2/4';
      if (isAnotherHovered) return 'lg:w-[16.66%]';
      return 'lg:w-1/4';
    },
    [hoveredIndex, isMobile]
  );

  return (
    <HomeSectionLayout title="Coming Soon">
      <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-4 lg:gap-6 w-full lg:h-[600px]">
        {upcomingEvents.map((event, index) => {
          const isHovered = !isMobile && hoveredIndex === index;
          const isAnotherHovered =
            !isMobile && hoveredIndex !== null && !isHovered;

          return (
            <div
              key={event.topic}
              className={`transition-all duration-500 ease-in-out w-full h-[250px] lg:h-auto ${getWidthClass(index)}`}
            >
              <ComingSoonCard
                title={event.topic}
                description={event.description}
                month={`In ${event.month.toUpperCase()}`}
                readMoreLink={event.readMoreLink}
                isHovered={isHovered}
                isAnotherHovered={isAnotherHovered}
                isMobile={isMobile}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          );
        })}
      </div>
    </HomeSectionLayout>
  );
};

export default ComingSoon;

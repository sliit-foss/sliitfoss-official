import { useState, useEffect } from 'react';
import HomeSectionLayout from '../layout/HomeSectionLayout';
import ComingSoonCard from './ComingSoonCard';
import { events } from '@/data/events';

const ComingSoon = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Get upcoming events (today and after), sorted oldest to newest, take first 4
  const upcomingEvents = [...events]
    .filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4)
    .map((event) => ({
      ...event,
      month: new Date(event.date).toLocaleString('en-US', { month: 'long' }),
    }));

  return (
    <HomeSectionLayout title="Coming Soon">
      <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-4 lg:gap-6 w-full lg:h-[600px]">
        {upcomingEvents.map((event, index) => {
          const isHovered = !isMobile && hoveredIndex === index;
          const isAnotherHovered =
            !isMobile && hoveredIndex !== null && !isHovered;

          let widthClass = 'lg:w-1/4'; // Default width
          if (isHovered) {
            widthClass = 'lg:w-2/4'; // Double width for hovered card
          } else if (isAnotherHovered) {
            widthClass = 'lg:w-[16.66%]'; // Shrink other cards
          }

          return (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out w-full h-[250px] lg:h-auto ${widthClass}`}
            >
              <ComingSoonCard
                title={event.topic}
                description={event.description}
                month={`In ${event.month.toUpperCase()}`}
                readMoreLink={event.readMoreLink}
                isHovered={isHovered}
                isAnotherHovered={isAnotherHovered}
                isMobile={isMobile}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              />
            </div>
          );
        })}
      </div>
    </HomeSectionLayout>
  );
};

export default ComingSoon;

'use client';

import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import EventCard from './EventCard';
import { events } from '@/app/const/Events';

const EventSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = slider.clientWidth * 0.5;
    const targetScroll =
      direction === 'left'
        ? slider.scrollLeft - scrollAmount
        : slider.scrollLeft + scrollAmount;

    slider.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative py-6">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-10 relative pointer-events-auto"
      >
        {events.map((event, index) => (
          <div key={index} className="snap-start shrink-0">
            <EventCard {...event} />
          </div>
        ))}
      </div>

      {/* Control Overlay (on top of everything) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 z-30">
        <button
          onClick={() => scroll('left')}
          className="pointer-events-auto bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition duration-300"
        >
          <MdChevronLeft size={30} />
        </button>

        <button
          onClick={() => scroll('right')}
          className="pointer-events-auto bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition duration-300"
        >
          <MdChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default EventSlider;

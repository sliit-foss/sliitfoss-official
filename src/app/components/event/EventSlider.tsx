'use client';

import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import EventCard from './EventCard';
import { events } from '@/app/const/Events';

function EventSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative group py-6">
      {/* Left Control */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/70 z-10"
      >
        <MdChevronLeft size={28} />
      </button>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-10"
      >
        {events.map((event, index) => (
          <div key={index} className="snap-start">
            <EventCard {...event} />
          </div>
        ))}
      </div>

      {/* Right Control */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/70 z-10"
      >
        <MdChevronRight size={28} />
      </button>
    </div>
  );
};

export default EventSlider;

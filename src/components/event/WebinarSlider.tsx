'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import WebinarCard from './WebinarCard';
import { webinars } from '@/data/Webinars';

const WebinarSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsScrollable(slider.scrollWidth > slider.clientWidth);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = slider.clientWidth * 0.8;
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
    <section className="w-full py-10">
      {/* Slider Wrapper */}
      <div className="relative">
        {/* Slider Container */}
        <div
          ref={sliderRef}
          className={`flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-10 relative pointer-events-auto ${
            isScrollable ? 'justify-start' : 'justify-center'
          }`}
        >
          {webinars.map((webinar, index) => (
            <div key={index} className="snap-start shrink-0">
              <WebinarCard {...webinar} />
            </div>
          ))}
        </div>

        {/* Control Overlay */}
        {isScrollable && (
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
        )}
      </div>
    </section>
  );
};

export default WebinarSlider;

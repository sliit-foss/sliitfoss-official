'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { events } from '@/app/const/Events';

const EventHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Image carousel */}
      {events.map((event, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={event.imageUrl}
            alt={event.topic}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay gradient for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Text content */}
          <div className="absolute bottom-10 left-10 text-white p-5">
            <button className="inline-flex items-center gap-1 mt-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              {event.status}
            </button>
            <h1 className="p-3 text-3xl md:text-5xl font-bold">{event.topic}</h1>
          </div>
        </div>
      ))}

      {/* Dots indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {events.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400/60'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EventHero;

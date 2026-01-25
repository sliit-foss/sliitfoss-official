import React from 'react';
import Image from 'next/image';
import { Webinar } from '@/data/webinars';

function WebinarCard({ topic, readMoreLink, imageUrl }: Webinar) {
  return (
    <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg flex-shrink-0">
      {/* Background image */}
      <Image
        src={imageUrl}
        alt={topic}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 300px"
        unoptimized
      />

      {/* Bottom-to-top gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

      {/* Text content */}
      <div className="absolute bottom-0 p-5 text-white z-10">
        <h2 className="text-xl font-semibold leading-tight mb-2 line-clamp-2 text-center">
          {topic}
        </h2>
        <a href={readMoreLink} target="_blank" rel="noopener noreferrer">
          <button className="w-full items-center mt-4 bg-white text-black py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            View
          </button>
        </a>
      </div>
    </div>
  );
}

export default WebinarCard;

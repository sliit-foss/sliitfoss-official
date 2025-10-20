import React from 'react';
import Image from 'next/image';
import { MdArrowOutward, MdCalendarToday, MdLocationOn } from 'react-icons/md';

function EventCard({
  topic,
  description,
  venue,
  date,
  readMoreLink,
  imageUrl,
}: {
  topic: string;
  description: string;
  venue: string;
  date: string;
  readMoreLink: string;
  imageUrl: string;
}) {
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
        <h2 className="text-xl font-semibold leading-tight mb-2 line-clamp-2">
          {topic}
        </h2>
        <p className="text-sm opacity-90 line-clamp-3">{description}</p>

        <div className="flex justify-between items-center text-sm mt-3 opacity-90">
          <div className="flex items-center gap-1">
            <MdLocationOn size={18} />
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdCalendarToday size={16} />
            <span>{date}</span>
          </div>
        </div>

        <a
          href={readMoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition"
        >
          Read more <MdArrowOutward size={16} />
        </a>
      </div>
    </div>
  );
}

export default EventCard;

//<<<<<<< HEAD
//import React from 'react';
//import Image from 'next/image';
//import { MdArrowOutward, MdCalendarToday, MdLocationOn } from 'react-icons/md';

//function EventCard({
//=======
import { MdArrowForward, MdCalendarToday, MdLocationOn } from 'react-icons/md';
import IconButton from '../IconButton';
import EventImage from './EventImage';
import { Event } from '@/data/events';

export const EventCard = ({
//>>>>>>> 40f4503a1537e6c36d742464e16473ac226c8593
  topic,
  description,
  venue,
  date,
  readMoreLink,
  imageUrl,
//<<<<<<< HEAD
//}: {
//  topic: string;
//  description: string;
//  venue: string;
//  date: string;
//  readMoreLink: string;
//  imageUrl: string;
//}) {
//  return (
//    <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg shrink-0">
//      {/* Background image */}
//      <Image
//        src={imageUrl}
//        alt={topic}
//        fill
//        className="object-cover"
//        sizes="(max-width: 768px) 100vw, 300px"
//        unoptimized
//      />
//
//      {/* Bottom-to-top gradient overlay */}
//      <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />
//
//      {/* Text content */}
//      <div className="absolute bottom-0 p-5 text-white z-10">
//        <h2 className="text-xl font-semibold leading-tight mb-2 line-clamp-2">
//          {topic}
//        </h2>
//        <p className="text-sm opacity-90 line-clamp-3">{description}</p>
//
//        <div className="flex justify-between items-center text-sm mt-3 opacity-90">
//          <div className="flex items-center gap-1">
//            <MdLocationOn size={18} />
//            <span>{venue}</span>
//          </div>
//          <div className="flex items-center gap-1">
//            <MdCalendarToday size={16} />
//            <span>{date}</span>
//          </div>
//        </div>
//
//        <a
//          href={readMoreLink}
//          target="_blank"
//          rel="noopener noreferrer"
//          className="inline-flex items-center gap-1 mt-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition"
//        >
//          Read more <MdArrowOutward size={16} />
//        </a>
//      </div>
//    </div>
//  );
//}
//=======
}: Event) => {
  return (
    <div className="relative w-xs h-[450] rounded-xl overflow-hidden shadow-lg flex-shrink-0 bg-black bg-center bg-size-[175px] bg-no-repeat bg-[url(/logo/logo-light.webp)]">
      <EventImage imageUrl={imageUrl} alt={topic} />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

      {/* Text content */}
      <div className="absolute bottom-0 p-5 text-white z-10 w-full">
        <h2 className="font-inter text-xl font-medium leading-tight mb-2 line-clamp-2">
          {topic}
        </h2>
        <p className="font-mont-alt text-sm opacity-90 line-clamp-3 mb-3">
          {description}
        </p>

        <div className="flex justify-between items-center text-sm opacity-90 gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <MdLocationOn
              size={12}
              className="flex-shrink-0"
              aria-hidden="true"
            />
            <p className="font-inter font-normal truncate">{venue}</p>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <MdCalendarToday
              size={12}
              className="flex-shrink-0"
              aria-hidden="true"
            />
            <p className="font-inter font-normal truncate">{date}</p>
          </div>
        </div>

        <IconButton title="Read more" href={readMoreLink}>
          <MdArrowForward size={16} />
        </IconButton>
      </div>
    </div>
  );
};
//>>>>>>> 40f4503a1537e6c36d742464e16473ac226c8593

export default EventCard;

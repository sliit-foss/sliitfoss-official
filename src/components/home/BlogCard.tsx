import { MdArrowForward, MdCalendarToday } from 'react-icons/md';
import Image from 'next/image';

interface BlogCardProps {
  topic: string;
  description: string;
  venue: string; // Author
  date: string;
  readMoreLink: string;
  imageUrl: string;
}

export default function BlogCard({
  topic,
  description,
  venue,
  date,
  readMoreLink,
  imageUrl,
}: BlogCardProps) {
  return (
    <div className="w-xs rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 flex flex-col h-full flex-shrink-0">
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-200 rounded-t-3xl overflow-hidden">
        <Image
          src={imageUrl || '/home/blog-sample.png'}
          alt={topic}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/home/blog-sample.png';
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Title */}
        <h3 className="font-bricolage text-lg font-semibold leading-tight text-gray-900 line-clamp-2">
          {topic}
        </h3>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 rounded-lg bg-gray-100 text-xs font-medium text-gray-700">
            Competition
          </span>
          <span className="px-3 py-1 rounded-lg bg-gray-100 text-xs font-medium text-gray-700">
            Scripting
          </span>
          <span className="px-3 py-1 rounded-lg bg-gray-100 text-xs font-medium text-gray-700">
            Bash
          </span>
        </div>

        {/* Description */}
        <p className="font-inter text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MdCalendarToday size={16} />
          <span>Published on {date}</span>
        </div>

        {/* Read More Button */}
        <button className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors w-fit">
          Read more
          <MdArrowForward size={16} />
        </button>
      </div>
    </div>
  );
}

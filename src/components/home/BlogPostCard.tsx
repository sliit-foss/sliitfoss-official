import { MdArrowForward } from 'react-icons/md';
import { MdCalendarToday } from 'react-icons/md';
import Image from 'next/image';

interface BlogPostCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readMoreLink: string;
  imageUrl: string;
}

export default function BlogPostCard({
  title,
  description,
  author,
  date,
  readMoreLink,
  imageUrl,
}: BlogPostCardProps) {
  return (
    <div className="w-[350px] rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={imageUrl || '/home/blog-sample.png'}
          alt={title}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/home/blog-sample.png';
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
            Competition
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
            Scripting
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700">
            Bash
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bricolage text-xl font-semibold leading-tight text-gray-900 line-clamp-2">
          {title}
        </h3>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MdCalendarToday size={16} />
          <span>Published on {date}</span>
        </div>

        {/* Read More Button */}
        <button className="mt-2 px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors w-fit">
          Read more
          <MdArrowForward size={16} />
        </button>
      </div>
    </div>
  );
}

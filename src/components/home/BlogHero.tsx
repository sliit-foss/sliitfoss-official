import { MdNorthEast } from 'react-icons/md';
import Image from 'next/image';

interface BlogHeroProps {
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  imageUrl: string;
  readMoreLink: string;
}

export default function BlogHero({
  title,
  description,
  author,
  imageUrl,
  readMoreLink,
}: BlogHeroProps) {
  return (
    <div className="w-full mb-6 lg:mb-8">
      {/* Mobile layout */}
      <div className="lg:hidden w-full space-y-4">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white font-semibold text-sm">
                {author.name.charAt(0)}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <p className="font-inter text-xs text-gray-600 leading-tight">
              {author.role}
            </p>
            <p className="font-inter text-sm font-semibold text-gray-900">
              {author.name}
            </p>
          </div>

          <a
            href={readMoreLink}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-gray-900 bg-white border border-transparent bg-[image:linear-gradient(white,white),linear-gradient(90deg,#62DDFF_0%,#B039FF_100%)] bg-origin-border [background-clip:padding-box,border-box] shadow-sm"
          >
            Explore
            <MdNorthEast className="text-base" />
          </a>
        </div>

        <p className="font-bricolage text-base text-gray-800 leading-snug">
          “{description}”
        </p>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-6 lg:gap-10 items-center">
        {/* Left side - Image */}
        <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] rounded-[26px] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-[0_12px_40px_rgba(22,26,47,0.25)]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col gap-4 lg:gap-5 lg:pl-2">
          {/* Explore Button */}
          <a
            href={readMoreLink}
            className="inline-flex items-center gap-2 w-fit self-start px-4 py-2 bg-white/80 backdrop-blur text-gray-900 text-sm font-semibold rounded-full shadow-sm transition-all duration-200 hover:shadow-md border border-[#D7C4FF]"
          >
            Explore
            <MdNorthEast className="text-base" />
          </a>

          {/* Heading */}
          <h2 className="font-bricolage text-[2.1rem] lg:text-[2.6rem] xl:text-[2.9rem] font-bold text-gray-900 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="font-inter text-base lg:text-lg text-gray-700 leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Author Row */}
          <div className="flex items-center gap-3 mt-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0">
              {author.avatar ? (
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-semibold text-sm">
                  {author.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="font-inter text-sm font-semibold text-gray-900">
                {author.name}
              </p>
              <p className="font-inter text-xs text-gray-500">{author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

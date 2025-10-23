import { Inter, Montserrat_Alternates } from 'next/font/google';
import Image from 'next/image';
import { MdArrowForward, MdCalendarToday, MdLocationOn } from 'react-icons/md';
import IconButton from '../IconButton';
import { useState, useEffect, useRef } from 'react';

const montAlt = Montserrat_Alternates({
  subsets: ['latin'],
  weight: '400',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
});

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
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05, // Trigger when 5% of the card is visible
        rootMargin: '50px', // Start loading 50px before it enters viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg flex-shrink-0"
    >
      {isVisible ? (
        <>
          {!imageError ? (
            <Image
              src={imageUrl}
              alt={topic}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
              unoptimized
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <Image
                src="/logo/logo-light.webp"
                alt="SLIIT FOSS Logo"
                width={150}
                height={150}
                className="opacity-30"
              />
            </div>
          )}

          {/* Bottom-to-top gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

          {/* Text content */}
          <div className="absolute bottom-0 p-5 text-white z-10 w-full">
            <h2
              className={`${inter.className} text-xl font-medium leading-tight mb-2 line-clamp-2`}
            >
              {topic}
            </h2>
            <p
              className={`${montAlt.className} text-sm opacity-90 line-clamp-3`}
            >
              {description}
            </p>

            <div className="flex justify-between items-center text-sm mt-3 opacity-90">
              {[
                { icon: MdLocationOn, text: venue },
                { icon: MdCalendarToday, text: date },
              ].map(({ icon: Icon, text }) => (
                <div className="flex items-center gap-1.5 min-w-0" key={text}>
                  <Icon size={12} />
                  <p className={`${inter.className} font-normal truncate`}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <IconButton
              Icon={MdArrowForward}
              title={'Read more'}
              href={readMoreLink}
            />
          </div>
        </>
      ) : (
        // Placeholder while not visible
        <div className="absolute inset-0 bg-black animate-pulse" />
      )}
    </div>
  );
}

export default EventCard;

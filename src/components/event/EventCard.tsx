import { Inter, Montserrat_Alternates } from 'next/font/google';
import { MdArrowForward, MdCalendarToday, MdLocationOn } from 'react-icons/md';
import IconButton from '../IconButton';
import EventImage from './EventImage';

const montAlt = Montserrat_Alternates({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-mont-alt',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-inter',
});

interface EventCardProps {
  topic: string;
  description: string;
  venue: string;
  date: string;
  readMoreLink: string;
  imageUrl: string;
}

export const EventCard = ({
  topic,
  description,
  venue,
  date,
  readMoreLink,
  imageUrl,
}: EventCardProps) => {
  return (
    <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg flex-shrink-0 bg-black bg-center bg-size-[175px] bg-no-repeat bg-[url(/logo/logo-light.webp)]">
      <EventImage imageUrl={imageUrl} alt={topic} />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

      {/* Text content */}
      <div className="absolute bottom-0 p-5 text-white z-10 w-full">
        <h2
          className={`${inter.className} text-xl font-medium leading-tight mb-2 line-clamp-2`}
        >
          {topic}
        </h2>
        <p
          className={`${montAlt.className} text-sm opacity-90 line-clamp-3 mb-3`}
        >
          {description}
        </p>

        <div className="flex justify-between items-center text-sm opacity-90 gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <MdLocationOn
              size={12}
              className="flex-shrink-0"
              aria-hidden="true"
            />
            <p className={`${inter.className} font-normal truncate`}>{venue}</p>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <MdCalendarToday
              size={12}
              className="flex-shrink-0"
              aria-hidden="true"
            />
            <p className={`${inter.className} font-normal truncate`}>{date}</p>
          </div>
        </div>

        <IconButton title="Read more" href={readMoreLink}>
          <MdArrowForward size={16} />
        </IconButton>
      </div>
    </div>
  );
};

export default EventCard;

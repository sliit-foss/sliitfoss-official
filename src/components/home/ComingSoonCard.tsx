import { Bricolage_Grotesque, Inter } from 'next/font/google';
import { MdArrowForward, MdArrowOutward, MdSouthWest } from 'react-icons/md';
import IconButton from '../IconButton';
import { memo, useMemo } from 'react';
import clsx from 'clsx';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
});

const GRADIENT_BORDER = 'linear-gradient(90deg, #62DDFF 0%, #B039FF 100%)';
const GRADIENT_BACKGROUND =
  'linear-gradient(black, black), linear-gradient(90deg, #62DDFF 0%, #B039FF 100%)';

interface ComingSoonCardProps {
  title: string;
  description: string;
  month: string;
  readMoreLink: string;
  isHovered: boolean;
  isAnotherHovered: boolean;
  isMobile: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ComingSoonCard = memo(function ComingSoonCard({
  title,
  description,
  month,
  readMoreLink,
  isHovered,
  isAnotherHovered,
  isMobile,
  onMouseEnter,
  onMouseLeave,
}: ComingSoonCardProps) {
  const displayAsHovered = isMobile || isHovered;

  // Memoize class names to prevent recreation
  const cardClasses = useMemo(
    () =>
      clsx(
        'relative min-h-full rounded-3xl p-4 lg:p-6 transition-all duration-500 ease-in-out flex flex-col overflow-hidden',
        isMobile ? 'h-full' : 'h-[35vw]',
        displayAsHovered ? 'bg-black' : 'bg-[#D9D9D9]'
      ),
    [isMobile, displayAsHovered]
  );

  const monthChipClasses = useMemo(
    () =>
      clsx(
        'transition-opacity duration-300 rounded-full p-[1px]',
        displayAsHovered ? 'opacity-100' : 'opacity-0'
      ),
    [displayAsHovered]
  );

  const circleClasses = useMemo(
    () =>
      clsx(
        'rounded-full flex items-center justify-center bg-white flex-shrink-0 transition-all duration-300',
        isAnotherHovered
          ? 'w-[30px] h-[30px]'
          : 'w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]'
      ),
    [isAnotherHovered]
  );

  const iconClasses = useMemo(
    () =>
      clsx(
        'text-black transition-all',
        isAnotherHovered ? 'text-base' : 'text-lg lg:text-2xl'
      ),
    [isAnotherHovered]
  );

  const titleClasses = useMemo(
    () =>
      clsx(
        bricolage.className,
        'mb-2 transition-all duration-300',
        displayAsHovered ? 'text-white' : 'text-black',
        isAnotherHovered ? 'text-2xl' : 'lg:text-4xl text-3xl'
      ),
    [displayAsHovered, isAnotherHovered]
  );

  const descriptionClasses = useMemo(
    () =>
      clsx(
        bricolage.className,
        'line-clamp-2 mb-3 lg:mb-4 transition-all duration-300',
        isAnotherHovered ? 'text-sm' : isMobile ? 'text-base' : 'text-xl'
      ),
    [isAnotherHovered, isMobile]
  );

  const buttonClasses = useMemo(
    () =>
      clsx(
        'w-full !mt-0 !justify-between transition-all',
        isAnotherHovered
          ? 'py-1.5 px-3 !text-xs'
          : 'py-2 px-4 lg:py-3 lg:px-5 !text-sm lg:!text-base',
        displayAsHovered ? '!bg-white !text-black' : '!bg-black !text-white'
      ),
    [isAnotherHovered, displayAsHovered]
  );

  const cardStyle = {
    border: displayAsHovered ? '1px solid transparent' : '1px solid #D9D9D9',
    backgroundImage: displayAsHovered ? GRADIENT_BACKGROUND : 'none',
    backgroundOrigin: 'border-box' as const,
    backgroundClip: displayAsHovered
      ? 'padding-box, border-box'
      : 'padding-box',
  };

  const monthChipStyle = {
    backgroundImage: GRADIENT_BORDER,
  };

  const descriptionColor = displayAsHovered ? '#FFFFFF99' : '#00000099';

  return (
    <div
      className={cardClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={cardStyle}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">
        {/* Month Chip */}
        <div className={monthChipClasses} style={monthChipStyle}>
          <div className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-black">
            <span
              className={`${inter.className} text-white text-sm lg:text-xl`}
            >
              {month}
            </span>
          </div>
        </div>

        {/* Circle Icon */}
        <div
          className={circleClasses}
          style={{ border: '0.5px dashed #000000' }}
        >
          {displayAsHovered ? (
            <MdSouthWest className={iconClasses} />
          ) : (
            <MdArrowOutward className={iconClasses} />
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">
        <h3
          className={titleClasses}
          style={{
            lineHeight: 'var(--tw-leading, var(--text-5xl--line-height))',
          }}
        >
          {title}
        </h3>
        <p className={descriptionClasses} style={{ color: descriptionColor }}>
          {description}
        </p>

        {/* Read More Button */}
        <div className="p-[1px] rounded-full" style={monthChipStyle}>
          <IconButton
            Icon={MdArrowForward}
            title="Read more"
            href={readMoreLink}
            styles={buttonClasses}
          />
        </div>
      </div>
    </div>
  );
});

ComingSoonCard.displayName = 'ComingSoonCard';

export default ComingSoonCard;

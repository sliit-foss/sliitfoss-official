import { Bricolage_Grotesque, Inter } from 'next/font/google';
import { MdArrowForward, MdArrowOutward, MdSouthWest } from 'react-icons/md';
import IconButton from '../IconButton';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '300',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '300',
});

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

const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  title,
  description,
  month,
  readMoreLink,
  isHovered,
  isAnotherHovered,
  isMobile,
  onMouseEnter,
  onMouseLeave,
}) => {
  // On mobile, always show "hovered" styles
  const displayAsHovered = isMobile || isHovered;

  return (
    <div
      className={`relative ${isMobile ? 'h-full' : 'h-[35vw]'} min-h-full rounded-3xl p-4 lg:p-6 transition-all duration-500 ease-in-out flex flex-col overflow-hidden ${
        displayAsHovered ? 'bg-black' : 'bg-[#D9D9D9]'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        border: displayAsHovered
          ? '1px solid transparent'
          : '1px solid #D9D9D9',
        backgroundImage: displayAsHovered
          ? 'linear-gradient(black, black), linear-gradient(90deg, #62DDFF 0%, #B039FF 100%)'
          : 'none',
        backgroundOrigin: 'border-box',
        backgroundClip: displayAsHovered
          ? 'padding-box, border-box'
          : 'padding-box',
      }}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">
        {/* Month Chip - Wrapper with gradient border */}
        <div
          className={`transition-opacity duration-300 rounded-full p-[1px] ${
            displayAsHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: 'linear-gradient(90deg, #62DDFF 0%, #B039FF 100%)',
          }}
        >
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
          className={`rounded-full flex items-center justify-center bg-white flex-shrink-0 transition-all duration-300 ${
            isAnotherHovered
              ? 'w-[30px] h-[30px]'
              : 'w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]'
          }`}
          style={{
            border: '0.5px dashed #000000',
          }}
        >
          {displayAsHovered ? (
            <MdSouthWest
              className={`text-black transition-all ${isAnotherHovered ? 'text-base' : 'text-lg lg:text-2xl'}`}
            />
          ) : (
            <MdArrowOutward
              className={`text-black transition-all ${isAnotherHovered ? 'text-base' : 'text-lg lg:text-2xl'}`}
            />
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">
        <h3
          className={`${bricolage.className} mb-2 transition-all duration-300 ${
            displayAsHovered ? 'text-white' : 'text-black'
          } ${isAnotherHovered ? 'text-2xl' : 'lg:text-4xl text-3xl'}`}
          style={{
            lineHeight:
              'var(--tw-leading, var(--text-5xl--line-height) /* 1 */)',
          }}
        >
          {title}
        </h3>
        <p
          className={`${bricolage.className} line-clamp-2 mb-3 lg:mb-4 transition-all duration-300 ${
            isAnotherHovered ? 'text-sm' : isMobile ? 'text-base' : 'text-xl'
          }`}
          style={{
            color: displayAsHovered ? '#FFFFFF99' : '#00000099',
          }}
        >
          {description}
        </p>

        {/* Read More Button Wrapper for Gradient Border */}
        <div
          className="p-[1px] rounded-full"
          style={{
            backgroundImage: 'linear-gradient(90deg, #62DDFF 0%, #B039FF 100%)',
          }}
        >
          <IconButton
            Icon={MdArrowForward}
            title="Read more"
            href={readMoreLink}
            styles={`w-full !mt-0 !justify-between transition-all ${
              isAnotherHovered
                ? 'py-1.5 px-3 !text-xs'
                : 'py-2 px-4 lg:py-3 lg:px-5 !text-sm lg:!text-base'
            } ${
              displayAsHovered
                ? '!bg-white !text-black'
                : '!bg-black !text-white'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCard;

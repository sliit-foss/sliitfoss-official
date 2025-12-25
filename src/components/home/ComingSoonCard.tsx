import { Bricolage_Grotesque, Inter } from 'next/font/google';
import { MdArrowForward, MdArrowOutward, MdSouthWest } from 'react-icons/md';
import IconButton from '../IconButton';

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

interface ComingSoonCardProps {
  title: string;
  description: string;
  month: string;
  readMoreLink: string;
}

export default function ComingSoonCard({
  title,
  description,
  month,
  readMoreLink,
}: ComingSoonCardProps) {
  return (
    <div
      className={`relative min-h-full rounded-3xl p-4 lg:p-6 transition-all duration-500 ease-in-out flex flex-col overflow-hidden border h-full w-full
        bg-[#D9D9D9] border-[#D9D9D9]
        lg:group-hover/item:bg-black lg:group-hover/item:border-transparent lg:group-hover/item:bg-[image:linear-gradient(black,black),linear-gradient(90deg,#62DDFF_0%,#B039FF_100%)] lg:group-hover/item:bg-origin-border lg:group-hover/item:[background-clip:padding-box,border-box]
      `}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">
        {/* Month Chip */}
        <div
          className={`transition-opacity duration-300 rounded-full p-[1px] bg-[image:linear-gradient(90deg,#62DDFF_0%,#B039FF_100%)]
          opacity-0 lg:group-hover/item:opacity-100
        `}
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
          className={`rounded-full flex items-center justify-center bg-white flex-shrink-0 transition-all duration-300 border-[0.5px] border-dashed border-black
            w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]
            lg:group-hover/list:w-[30px] lg:group-hover/list:h-[30px]
            lg:group-hover/item:w-[45px] lg:group-hover/item:h-[45px]
          `}
        >
          {/* Arrow Outward (Default) */}
          <MdArrowOutward
            className={`text-black transition-all block lg:group-hover/item:hidden
              text-lg lg:text-2xl
              lg:group-hover/list:text-base
              lg:group-hover/item:text-2xl
            `}
          />
          {/* South West (Hovered) */}
          <MdSouthWest
            className={`text-black transition-all hidden lg:group-hover/item:block
              text-lg lg:text-2xl
            `}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">
        <h3
          className={`${bricolage.className} mb-2 transition-all duration-300 leading-[var(--tw-leading,var(--text-5xl--line-height))]
            text-black lg:group-hover/item:text-white
            text-3xl lg:text-4xl
            lg:group-hover/list:text-2xl
            lg:group-hover/item:text-3xl lg:group-hover/item:text-4xl
          `}
        >
          {title}
        </h3>
        <p
          className={`${bricolage.className} line-clamp-2 mb-3 lg:mb-4 transition-all duration-300
            text-black/60 lg:group-hover/item:text-white/60
            text-base lg:text-xl
            lg:group-hover/list:text-sm
            lg:group-hover/item:text-xl
          `}
        >
          {description}
        </p>

        {/* Read More Button */}
        <div className="p-[1px] rounded-full bg-[image:linear-gradient(90deg,#62DDFF_0%,#B039FF_100%)]">
          <IconButton
            title="Read more"
            href={readMoreLink}
            styles={`w-full !mt-0 !justify-between transition-all
              !bg-black !text-white
              lg:group-hover/item:!bg-white lg:group-hover/item:!text-black

              py-2 px-4 lg:py-3 lg:px-5 !text-sm lg:!text-base
              lg:group-hover/list:py-1.5 lg:group-hover/list:px-3 lg:group-hover/list:!text-xs
              lg:group-hover/item:py-3 lg:group-hover/item:px-5 lg:group-hover/item:!text-base
            `}
          >
            <MdArrowForward size={16} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

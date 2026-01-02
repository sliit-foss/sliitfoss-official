import { MdArrowForward, MdNorthEast, MdSouthWest } from 'react-icons/md';
import IconButton from '../IconButton';

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
    <div className="grid grid-rows-[auto_1fr] w-full h-full rounded-3xl p-4 gap-4 border text-sm lg:text-base overflow-hidden transition-all duration-700 bg-black border-transparent bg-[image:linear-gradient(black,black),linear-gradient(90deg,#62DDFF_0%,#B039FF_100%)] bg-origin-border [background-clip:padding-box,border-box] lg:bg-[#D9D9D9] lg:!bg-none lg:border-[#D9D9D9] lg:group-hover/item:bg-black lg:group-hover/item:!bg-[image:linear-gradient(black,black),linear-gradient(90deg,#62DDFF_0%,#B039FF_100%)] lg:group-hover/item:bg-origin-border lg:group-hover/item:[background-clip:padding-box,border-box] lg:group-hover/item:border-transparent">
      {/* Header */}
      <div className="grid grid-cols-[1fr_auto] gap-2 items-start min-w-0">
        {/* Month Badge */}
        <div className="rounded-full p-[1px] bg-gradient-to-r from-[#62DDFF] to-[#B039FF] lg:opacity-0 lg:group-hover/item:opacity-100 transition-opacity duration-300 w-fit">
          <div className="font-inter text-white text-[0.75em] px-3 py-1.5 rounded-full bg-black whitespace-nowrap">
            {month}
          </div>
        </div>

        {/* Icon */}
        <div className="grid place-items-center w-8 h-8 rounded-full bg-white border border-dashed border-black shrink-0">
          <MdNorthEast className="text-black text-base lg:hidden lg:group-hover/item:block" />
          <MdSouthWest className="text-black text-base hidden lg:block lg:group-hover/item:hidden" />
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-3 content-end min-w-0">
        <h3 className="font-bricolage text-[1.5em] leading-tight text-white lg:text-black transition-colors duration-300 lg:group-hover/item:text-white break-words hyphens-auto">
          {title}
        </h3>

        <p className="font-bricolage text-[0.875em] leading-snug text-white/60 lg:text-black/60 line-clamp-2 transition-colors duration-300 lg:group-hover/item:text-white/60 break-words">
          {description}
        </p>

        {/* Button */}
        <div className="rounded-full p-[1px] bg-gradient-to-r from-[#62DDFF] to-[#B039FF] min-w-0">
          <IconButton
            title="Read more"
            href={readMoreLink}
            styles="w-full !mt-0 !justify-between !bg-white !text-black lg:!bg-black lg:!text-white !py-2 !px-4 !text-[0.75em] transition-colors lg:group-hover/item:!bg-white lg:group-hover/item:!text-black !gap-2 min-w-0"
          >
            <MdArrowForward className="text-base shrink-0" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

import Masonry from '@/components/Masonry';
import gallery from '@/data/gallery.json';
import GradTitle from '@/components/GradTitle';
import IconButton from '@/components/IconButton';
import { MdArrowForward } from 'react-icons/md';

const Gallery = () => (
  <div className="px-[3.5vw]">
    <div className="pb-8 flex items-center gap-6">
      <GradTitle content="Gallery" className="leading-[1.15] pb-1" />
      <IconButton
        title="Expand"
        href="#"
        styles="mt-0 px-4 py-2 text-base !bg-[#8C8C8C1F]"
      >
        <MdArrowForward size={18} />
      </IconButton>
    </div>
    <div className="w-full my-10 md:my-16">
      <Masonry items={gallery} />
    </div>
  </div>
);

export default Gallery;

import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';
import GradTitle from '../GradTitle';
import IconButton from '../IconButton';

const Podcast = () => {
  return (
    <section className="relative bg-black w-[90%] rounded-2xl p-4 sm:p-8 md:p-12 overflow-hidden place-self-center">
      {/* Background Logo */}
      <div className="absolute bottom-0 right-0 translate-x-1/5 translate-y-1/5 -z-0 pointer-events-none">
        <Image
          src="/logo/logo-light.webp"
          alt="SLIIT FOSS Logo Background"
          width={600}
          height={600}
          className="opacity-15 rotate-[-13.99deg] w-[300px] sm:w-[400px] md:w-[600px] h-auto"
          unoptimized
          loading="lazy"
          fetchPriority="low"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-row items-center justify-evenly gap-4 sm:gap-8 md:gap-12">
        <Image
          src="/home/quackcast.webp"
          alt="QuackCast Podcast Logo"
          width={250}
          height={250}
          className="w-[150px] sm:w-[200px] md:w-[250px] h-auto"
          unoptimized
          loading="lazy"
        />

        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-left">
          <div>
            <p className="text-sm sm:text-lg md:text-2xl font-medium tracking-widest text-gray-400 font-bricolage">
              SLIIT FOSS
            </p>
            <GradTitle
              content="PODCAST"
              textSize="text-2xl sm:text-3xl md:text-5xl"
              bold
            />
          </div>
          <p className="font-mont-alt text-gray-300 max-w-xl text-sm sm:text-lg md:text-2xl leading-tight sm:leading-normal">
            Tune in to our podcast where we discuss the latest in tech, open
            source, and student life. Featuring guests from the industry and our
            own community members.
          </p>
          <div className="flex justify-start">
            <IconButton title="Listen Now" href="#">
              <MdArrowForward size={16} />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;

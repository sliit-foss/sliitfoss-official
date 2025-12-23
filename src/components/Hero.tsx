import Button from './Button';
import DotGrid from './DotGrid';

export default function Hero() {
  return (
    <section className="h-screen relative">
      <DotGrid
        className="absolute top-0 left-0 z-10"
        baseColor="transparent"
        activeColor="black"
        dotSize={1}
        gap={40}
      />
      <div className="absolute top-0 left-0 grid content-center-safe z-40 w-full h-full">
        <h1 className="grid justify-center font-bold text-3xl md:text-5xl lg:text-7xl font-sans mt-30 text-black">
          SLIIT FOSS Community
        </h1>
        <div className="text-center font-normal text-lg mt-6 mx-10 md:mx-30 lg:mx-50 text-black">
          <p>
            A group of volunteers who believe in the usage of Free & Open Source
            Software (FOSS).
          </p>
          <p>
            The primary objective of the community is to promote, develop and
            diversify the usage of Free and Open Source Software at SLIIT.
          </p>
        </div>
        <div className="grid gap-2 md:gap-5 md:flex md:justify-center mt-20 mb-10 mx-10 md:mb-0">
          <div className="grid p-[1px] rounded-full bg-gradient-to-r from-[#62DDFF] to-[#B039FF]">
            <Button
              type="secondary"
              className="font-semibold border-transparent"
            >
              Become a member
            </Button>
          </div>
          <Button type="primary" className="font-semibold">
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
}

import Background from './Background';

export default function Hero() {
  return (
    <section className="h-screen relative">
      <div className="relative h-full grid content-center-safe z-40">
        <h1 className="grid justify-center font-bold text-5xl md:text-7xl lg:text-9xl font-sans mt-30 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0094BE]">
          SLIIT FOSS
        </h1>
        <p className="text-center font-normal text-lg text-[#757575] m-6">
          A group of volunteers who believe in the usage of Free & Open Source
          Software (FOSS). The primary objective of the community is to promote,
          develop and diversify the usage of Free and Open Source Software at
          SLIIT.
        </p>
        <div className="grid gap-4 md:flex md:justify-center md:gap-[10px] mt-10 mb-10 mx-10 md:mb-0">
          <button className="w-full md:w-auto cursor-pointer rounded-3xl py-[12px] px-[20px] shadow-[0_1px_4px_rgba(3,129,165,0.40)] text-[#30839B]">
            Become a member
          </button>
          <button className="w-full md:w-auto cursor-pointer rounded-3xl py-[12px] px-[20px] bg-gradient-to-r from-[#39ACCD] to-[#3FAECE] text-white">
            Become a member
          </button>
        </div>
        <h1 className="grid justify-center font-bold text-5xl md:text-7xl lg:text-9xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#F9FDFF] to-[#0094BE] tracking-widest self-end-safe">
          community
        </h1>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[-200px] w-1/3 h-[250px] blur-[20px] bg-[rgba(89,219,255,0.18)] rounded-2xl z-1" />
      <Background />
      <div className="absolute left-0 bottom-0 w-full h-[200px] blur-[10px] bg-[rgba(89,219,255,0.18)] rounded-full z-1" />
    </section>
  );
}

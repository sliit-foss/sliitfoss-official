import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-black px-[50px] py-[30px] flex flex-col gap-[40px]">
      <div>
        <div className="flex gap-[250px]">
          <div>
            <h1 className="font-montserrat font-medium text-[21px] ">
              Socials
            </h1>
            <div className="font-montserrat font-medium text-[15px] text-white/53 flex flex-col gap-[9px] mt-[9px]">
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Github</Link>
              <Link href={'#'}>Youtube</Link>
              <Link href={'#'}>LinkedIn</Link>
              <Link href={'#'}>TikTok</Link>
            </div>
          </div>
          <div>
            <h1 className="font-montserrat font-medium text-[21px] ">
              Quick Navs
            </h1>
            <div className="font-montserrat font-medium text-[15px] text-white/53 flex flex-col gap-[9px] mt-[9px]">
              <Link href={'#'}>Home</Link>
              <Link href={'#'}>About</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Podcast</Link>
              <Link href={'#'}>Events</Link>
              <Link href={'#'}>Register</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-montserrat font-medium text-[20px]">SLIIT FOSS</h1>
        <div className="p-[1px] bg-gradient-to-r from-[#62DDFF] to-[#B039FF] rounded-[17px] inline-block">
          <button className="font-bricolage font-extralight text-[20px] bg-black text-white rounded-[16px] px-[6px] py-[4px]">
            Back to top
          </button>
        </div>
        <div className="hidden md:block font-montserrat font-medium text-[20px]">
          Copyright 2025 SLIIT FOSS
        </div>
      </div>
    </div>
  );
}

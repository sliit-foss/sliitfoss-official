import Image from 'next/image';

export default function Board() {
  return (
    <div className="bg-white text-black  flex justify-center items-center flex-col">
      <div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[30px] md:text-[60px] font-bold">
            Board of Officials
          </span>
          <span className="text-[30px] md:text-[60px] font-bold">2025/26</span>
          <span className="text-[15px] md:text-[30px]">
            SLIIT FOSS Community
          </span>
        </div>
        <div>
          <div className="relative">
            <div>
              <Image
                src="/assets/sayuru.png"
                alt="Sayuru"
                width={300}
                height={300}
                className="rounded-[15px] object-cover  bottom-0 left-0"
              />
            </div>
            <div className="bg-[linear-gradient(180deg,#1500FF_0%,#8C00D7_100%)] p-[1px] rounded-[15px] absolute h-[200px] w-[200px] bottom-0">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

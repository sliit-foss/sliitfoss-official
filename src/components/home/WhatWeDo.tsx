'use client';

import { useState } from 'react';
import Button from '../Button';
import GradTitle from '../GradTitle';
import HomeSectionLayout from '../layout/HomeSectionLayout';

export default function WhatWeDo() {
  const [slide1Width, setSlide1Width] = useState(0);
  const [onSlide1, setOnSlide1] = useState(true);
  const [slide2Width, setSlide2Width] = useState(4);
  const [onSlide2, setOnSlide2] = useState(false);

  const handleSlide: React.UIEventHandler<HTMLDivElement> = (event) => {
    if (
      event.currentTarget.scrollLeft * 2 >=
      event.currentTarget.scrollWidth - 100
    ) {
      event.currentTarget.scrollBy({ top: 0, left: 100 });
      setSlide1Width(4);
      setSlide2Width(0);
      setOnSlide1(false);
      setOnSlide2(true);
    } else if (event.currentTarget.scrollLeft < 50) {
      setSlide1Width(0);
      setSlide2Width(4);
      setOnSlide1(true);
      setOnSlide2(false);
    }
  };

  return (
    <HomeSectionLayout>
      <div className="bg-gradient-to-l from-[#8DC6FF] to-[#AD65FF] p-[1px] rounded-3xl">
        <div className="bg-white rounded-3xl">
          <div className="md:flex md:gap-15 bg-[#AAAAAA]/9 p-6 md:p-10 md:px-20 rounded-3xl">
            <div className="flex-2">
              <GradTitle
                content="What we do?"
                textSize="text-3xl md:text-5xl"
              />
              <p className="text-lg md:text-2xl my-3">
                Empower youth through innovation and FOSS by driving inclusion,
                partnerships, and tech events like hackathons and meetups.
              </p>
              <Button type="primary" className="my-5 cursor-pointer">
                Explore
              </Button>
            </div>
            <div className="hidden flex-0 md:flex-1 md:block">
              <div className="grid gap-3 grid-cols-2">
                <div className="grid items-stretch gap-3 grid-rows-[3fr_1fr]">
                  <img
                    src="/home/blog-sample.png"
                    alt="sample"
                    className="rounded-lg max-h-125 w-full"
                  />
                  <img
                    src="/home/blog-sample.png"
                    alt="sample"
                    className="rounded-lg max-h-20 w-full"
                  />
                </div>
                <div>
                  <img
                    src="/home/blog-sample.png"
                    alt="sample"
                    className="rounded-lg h-full max-h-150"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          onScroll={handleSlide}
          className="md:grid md:grid-cols-2 md:gap-8 overflow-x-scroll no-scrollbar flex gap-8 w-full snap-x snap-mandatory md:overflow-visible md:flex-none"
        >
          <div className="flex-shrink-0 w-[90vw] md:w-full bg-gradient-to-l from-[#8DC6FF] to-[#AD65FF] p-[1px] rounded-3xl snap-start">
            <div className="bg-white rounded-3xl h-full">
              <div className="bg-[#AAAAAA]/9 p-6 md:p-10 md:px-20 rounded-3xl h-full">
                <GradTitle
                  content="What we promote?"
                  textSize="text-3xl md:text-5xl"
                />
                <p className="text-lg md:text-2xl my-3">
                  Workshops, hackathons, and meetups to grow real-world tech
                  skills.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[90vw] md:w-full bg-gradient-to-l from-[#8DC6FF] to-[#AD65FF] p-[1px] rounded-3xl snap-start">
            <div className="bg-white rounded-3xl h-full">
              <div className="bg-[#AAAAAA]/9 p-6 md:p-10 md:px-20 rounded-3xl h-full">
                <GradTitle
                  content="Contribute & Collaborate"
                  textSize="text-3xl md:text-5xl"
                />
                <p className="text-lg md:text-2xl my-3">
                  Join projects, contribute to FOSS, and grow with the
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 md:hidden my-2">
          <div
            className={
              'h-2 rounded-full transition-all ' +
              `w-${slide1Width + 2} ` +
              (onSlide1 ? 'bg-gray-800' : 'bg-gray-400')
            }
          />
          <div
            className={
              'h-2 rounded-full transition-all ' +
              `w-${slide2Width + 2} ` +
              (onSlide2 ? 'bg-gray-800' : 'bg-gray-400')
            }
          />
        </div>
      </div>
    </HomeSectionLayout>
  );
}

import Button from '../Button';
import GradTitle from '../GradTitle';
import HomeSectionLayout from '../layout/HomeSectionLayout';

export default function WhatWeDo() {
  return (
    <HomeSectionLayout>
      <div className="bg-gradient-to-l from-[#8DC6FF] to-[#AD65FF] p-[1px] rounded-3xl">
        <div className="bg-white rounded-3xl">
          <div className="flex gap-15 bg-[#AAAAAA]/9 p-10 px-20 rounded-3xl">
            <div className="flex-2">
              <GradTitle content="What we do?" textSize="text-5xl" />
              <p className="text-2xl my-3">
                Empower youth through innovation and FOSS by driving inclusion,
                partnerships, and tech events like hackathons and meetups.
              </p>
              <Button type="primary" className="my-5 cursor-pointer">
                Explore
              </Button>
            </div>
            <div className="flex-1">
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
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gradient-to-l from-[#8DC6FF] to-[#AD65FF] p-[1px] rounded-3xl">
          <div className="bg-white rounded-3xl">
            <div className="bg-[#AAAAAA]/9 p-10 px-20 rounded-3xl">
              <GradTitle content="What we promote?" textSize="text-5xl" />
              <p className="text-2xl my-3">
                Workshops, hackathons, and meetups to grow real-world tech
                skills.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-l from-[#8DC6FF] to-[#AD65FF] p-[1px] rounded-3xl">
          <div className="bg-white rounded-3xl">
            <div className="bg-[#AAAAAA]/9 p-10 px-20 rounded-3xl">
              <GradTitle
                content="Contribute & Collaborate"
                textSize="text-5xl"
              />
              <p className="text-2xl my-3">
                Join projects, contribute to FOSS, and grow with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomeSectionLayout>
  );
}

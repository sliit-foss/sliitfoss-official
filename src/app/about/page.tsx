'use client';

import { useState } from 'react';
import Image from 'next/image';
import ExpCard from '../../components/ExpCard';
import Carousel from '../../components/Carousel';
import { cards, carouselItems } from '@/lib/data/about';

export default function About() {
  const [expandedId, setExpandedId] = useState<string | null>('vision');

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full py-24 md:py-36 space-y-32">
      <div className="w-full max-w-7xl mx-auto px-6 space-y-32">
        <section className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col space-y-4">
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tight text-black leading-[0.9]">
              About <br /> Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 font-medium">
              SLIIT FOSS Community
            </p>
          </div>
          <div className="relative p-[4px] rounded-[2.5rem] ">
            <div className="bg-white rounded-[2.3rem] overflow-hidden">
              <Image
                src="/assets/image.png"
                alt="SLIIT FOSS Community Group"
                width={600}
                height={400}
                className="object-cover block"
              />
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold max-w-5xl leading-tight">
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#AD00FF] bg-clip-text text-transparent">
              A brief history on <br />
              Free and Open Source Software
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1 text-lg text-gray-700 leading-relaxed text-justify md:pr-12">
              <p>
                The principle of Free Open Source Software, as we now know it,
                started with Richard Stallman’s development of the concept of
                “free software” in the early 1980s. To further his vision, not
                to mention some pretty good software, Richard went on to build
                the GNU project and the Free Software Foundation. It took some
                more decades, but it became apparent to most people at the
                beginning of the 2000s that the vision of free software was
                consolidating the share of minds around the world.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end h-full">
              <div className="rounded-[3rem] overflow-hidden self-stretch relative w-full max-w-[500px] min-h-[350px]">
                <Image
                  src="/assets/Rectangle 100.png"
                  alt="History of FOSS"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#FAFAFA] w-full p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[700px] w-full">
          {cards.map((card) => (
            <ExpCard
              key={card.id}
              card={card}
              isExpanded={expandedId === card.id}
              onToggle={handleCardClick}
              onClose={() => setExpandedId(null)}
            />
          ))}
        </div>
      </section>

      <section className="w-full pb-24">
        <Carousel items={carouselItems} />
      </section>
    </div>
  );
}

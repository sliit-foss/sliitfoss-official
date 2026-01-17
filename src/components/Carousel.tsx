'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  // Scroll to center logic when activeIndex changes
  useEffect(() => {
    if (containerRef.current && items.length > 0) {
      const activeElement = containerRef.current.children[
        activeIndex
      ] as HTMLElement;

      if (activeElement) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = activeElement.offsetWidth;
        const cardLeft = activeElement.offsetLeft;

        const scrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2;

        isProgrammaticScroll.current = true;
        containerRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });

        // Reset flag after animation
        const timeout = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [activeIndex, items.length]);

  const handleWheel = (e: React.WheelEvent) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + e.deltaY,
        behavior: 'auto',
      });
    }
  };

  const handleScroll = () => {
    if (isProgrammaticScroll.current || !containerRef.current) return;

    const container = containerRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = activeIndex;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const element = child as HTMLElement;
      const elementCenter = element.offsetLeft + element.offsetWidth / 2;
      const distance = Math.abs(containerCenter - elementCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-12">
      <div className="relative inline-block rounded-full p-[1px] bg-gradient-to-r from-[#8DC6FF] to-[#AD65FF]">
        <div className="bg-white rounded-full px-8 py-2">
          <span className="text-black font-medium">Who are we</span>
        </div>
      </div>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        onWheel={handleWheel}
        className="flex gap-4 md:gap-8 overflow-x-auto w-full pb-12 pt-12 snap-x snap-mandatory hide-scrollbar pl-[calc(50vw-150px)] pr-[calc(50vw-150px)] md:pl-[calc(50vw-200px)] md:pr-[calc(50vw-200px)]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={item.id}
              className={`relative shrink-0 transition-all duration-500 ease-out snap-center cursor-pointer w-[300px] md:w-[400px]
                ${isActive ? 'scale-110 z-10' : 'scale-90 opacity-70 hover:opacity-100'}
              `}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Link href={item.link} className="block h-full group">
                <div
                  className={`
                        bg-[#F3F4F6] rounded-[2rem] overflow-hidden shadow-sm transition-shadow duration-300 h-full
                        ${isActive ? 'shadow-xl ring-1 ring-black/5' : ''}
                    `}
                >
                  <div className="relative h-[300px] w-full bg-gray-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-2">
                    <h3 className="text-3xl font-bold text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-tight max-w-[200px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

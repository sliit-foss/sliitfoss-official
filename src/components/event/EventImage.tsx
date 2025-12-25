'use client';

import Image from 'next/image';

interface EventImageProps {
  imageUrl: string;
  alt: string;
}

const EventImage = ({ imageUrl, alt }: EventImageProps) => {
  return (
    <Image
      src={imageUrl}
      alt={alt}
      fill
      className="object-cover"
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
      unoptimized
      fetchPriority="low"
      draggable={false}
    />
  );
};

export default EventImage;

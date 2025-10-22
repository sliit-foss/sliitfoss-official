'use client';
// https://github.com/sliit-foss/bashaway-official/blob/main/apps/2025/src/components/common/background.jsx

import { useLayoutEffect, useState } from 'react';

const highlightBounds = [0.2, 0.8];

const tileSize =
  window?.innerWidth >= 1280 ? (window?.innerWidth >= 1536 ? 60 : 54) : 48;

const maxItemsInRow = Math.floor(window?.innerWidth / tileSize);

const Glow = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useLayoutEffect(() => {
    const removeGlow = () => {
      document
        .querySelector('.highlighted')
        ?.classList.remove('bg-[rgba(89,219,255,0.1)]', 'highlighted');
    };

    document.onmousemove = (event) => {
      const e = event;
      setX(e.clientX);
      setY(e.clientY);

      const insideHighlightArea =
        (e.clientX > 0 && e.clientX < window.innerWidth * highlightBounds[0]) ||
        (e.clientX > window.innerWidth * highlightBounds[1] &&
          e.clientX < window.innerWidth) ||
        (e.clientY > 0 &&
          e.clientY < window.innerHeight * highlightBounds[0]) ||
        (e.clientY > window.innerHeight * highlightBounds[1] &&
          e.clientY < window.innerHeight);

      const tiles = document.querySelectorAll('.animated-grid-tile');
      const xIndex = Math.floor(e.clientX / tileSize);
      const yIndex = Math.floor(e.clientY / tileSize);
      const tile = tiles[yIndex * maxItemsInRow + xIndex];

      removeGlow();

      if (
        tile &&
        insideHighlightArea &&
        e.clientX > tile.offsetLeft &&
        e.clientX < tile.offsetLeft + tile.offsetWidth &&
        e.clientY > tile.offsetTop &&
        e.clientY < tile.offsetTop + tile.offsetHeight
      ) {
        tile.classList.add('bg-[rgba(89,219,255,0.1)]', 'highlighted');
      }
    };
  });

  return (
    <div
      id="cursor"
      className="block fixed z-[60] pointer-events-none mix-blend-screen duration-500"
      style={{
        top: y,
        left: x,
        boxShadow: '0 0 150px 30px rgba(0, 0, 255, 0.5)',
      }}
    />
  );
};

const Background = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex flex-wrap z-30">
      {Array(
        Math.ceil(
          (window.innerHeight * window.innerWidth) / (tileSize * tileSize)
        )
      )
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="border-[0.25px] border-background opacity-100 transition-all duration-1000 animated-grid-tile"
            style={{
              height: tileSize,
              width: tileSize,
            }}
          />
        ))}
      <Glow />
    </div>
  );
};

export default Background;

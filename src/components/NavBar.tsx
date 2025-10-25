'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { navbarData } from '@/lib/data/navbar';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen flex items-center justify-center md:mt-[25px]">
      <nav className="md:rounded-[24px] bg-gradient-primary p-[2px] w-screen md:w-[70%] md:flex md:items-center md:justify-center">
        <div className="md:rounded-[24px] bg-white text-black flex flex-col justify-between md:flex-row md:w-[100%] px-[5px] py-[5px] md:px-[20px] md:py-[5px]">
          <div className="flex items-center justify-between">
            <Link href={navbarData.logo.link}>
              <Image
                src={navbarData.logo.imageUrl}
                alt="Logo"
                width={0}
                height={0}
                className="w-[76px] h-auto"
              />
            </Link>

            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
          <div
            className={`font-[24px] flex flex-col md:flex-row items-center justify-center gap-[10px] md:gap-[20px] ${
              open ? 'flex' : 'hidden md:flex'
            }`}
          >
            {navbarData.links.map((link, index) => (
              <Link key={index} href={link.linkUrl}>
                {link.text}
              </Link>
            ))}

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                aria-label="Toggle theme"
              />
              <div
                className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-600 
    after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full 
    after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"
              ></div>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

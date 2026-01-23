'use client';

import Link from 'next/link';
import Button from './Button';
import { footerData } from '@/lib/data/footer';

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black px-[20px] py-[30px] md:px-[50px] md:py-[30px]  flex flex-col gap-[40px]">
      <div>
        <div className="flex gap-[100px] md:gap-[200px] md:px-[50px] mt-[50px]">
          {footerData.sections.map((section) => (
            <div key={section.title}>
              <h1 className="font-montserrat font-medium text-[21px] text-white">
                {section.title}
              </h1>
              <div className="font-montserrat font-medium text-[15px] text-white/53 flex flex-col gap-[4px] mt-[9px]">
                {section.links.map((link) => (
                  <Link key={link.text} href={link.linkUrl}>
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-montserrat font-medium text-[20px] text-white">
          SLIIT FOSS Community
        </h1>
        <div className="grid p-[1px] rounded-full bg-gradient-to-r from-[#62DDFF] to-[#B039FF]">
          <Button
            type="primary"
            className="font-semibold border-transparent"
            onClick={handleBackToTop}
          >
            Back to Top <span style={{ marginLeft: 6 }}>⭡</span>
          </Button>
        </div>
        <div className="hidden md:block font-montserrat font-medium text-[20px] text-white">
          {footerData.copyright}
        </div>
      </div>
    </div>
  );
}

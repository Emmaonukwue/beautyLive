import React from "react";
import { Sparkles } from "lucide-react";

// 1. Define the TypeScript interface for your audience items
interface AudienceItem {
  img: string;
  title: string;
}

// 2. Type the array with the interface
const audiences: AudienceItem[] = [
  { img: '/images/makeup-artists.webp', title: 'Makeup Artists' },
  { img: '/images/gele-artists.webp', title: 'Gele Artists' },
  { img: '/images/lash-technicians.webp', title: 'Lash Technicians' },
  { img: '/images/nail-technicians.webp', title: 'Nail Technicians' },
];

export default function Audience() {
  return (
    <section className="w-full flex justify-center bg-[#F8F5F0] py-[40px] px-6 sm:px-12 lg:px-[120px]">
      {/* Inner container to constrain width and hold the content */}
      <div className="w-full max-w-[1440px] flex flex-col items-center">
        
        {/* NEW: Top Decorative Line with Sparkle */}
        <div className="flex items-center gap-4 justify-center mb-6">
          <span className="w-16 lg:w-32 border-t border-[#D1A85D]/50"></span>
          <Sparkles size={18} className="text-[#D1A85D]" />
          <span className="w-16 lg:w-32 border-t border-[#D1A85D]/50"></span>
        </div>

        {/* Header Section */}
        <div className="flex items-center justify-center">
          <span className="font-inter font-medium text-sm lg:text-lg text-[#D1A85D] tracking-widest uppercase">
            Who It's For
          </span>
        </div>

        <h2 className="font-playfair font-semibold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] leading-[1.15] text-black text-center max-w-4xl mt-4">
          Built for <span className="text-[#D1A85D]">beauty professionals</span> ready to grow.
        </h2>

        <p className="font-inter font-normal text-base lg:text-lg text-black/80 text-center max-w-2xl mt-2">
          Whether you're starting out or looking to take your business to the next level. Beauty Stack is designed for you.
        </p>

        {/* Audience Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-12 w-full justify-items-center">
          {audiences.map((aud) => (
            <div key={aud.title} className="flex flex-col items-center gap-4">
              {/* Responsive Image Container */}
              <div className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden border-[3px] border-[#F1D4C4] flex-shrink-0 shadow-sm">
                <img 
                  src={aud.img} 
                  alt={aud.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-playfair font-medium text-2xl lg:text-3xl text-black text-center">
                {aud.title}
              </h3>
            </div>
          ))}
        </div>

        {/* NEW: Bottom Tagline */}
        <p className="font-playfair italic text-gray-400 text-lg lg:text-xl mt-12 text-center w-full">
          Different skills. Same bigger possibilities.
        </p>

      </div>
    </section>
  );
}
import React from "react";
import { GraduationCap, Laptop, Cpu, Users, TrendingUp, LucideIcon } from "lucide-react";

// 1. Define the TypeScript interface for your feature items
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

// 2. Type the array with the interface
const features: FeatureItem[] = [
  { 
    icon: GraduationCap, 
    title: "EDUCATION", 
    desc: "Learn the business skills behind your beauty craft." 
  },
  { 
    icon: Laptop, 
    title: "TECHNOLOGY", 
    desc: "Use modern tools to run your business more efficiently." 
  },
  { 
    icon: Cpu, 
    title: "AI", 
    desc: "Leverage AI to market, create and work smarter." 
  },
  { 
    icon: Users, 
    title: "COMMUNITY", 
    desc: "Connect with people building alongside you." 
  },
  { 
    icon: TrendingUp, 
    title: "GROWTH", 
    desc: "Turn everything into a business that can grow sustainably." 
  },
];

export default function Difference() {
  return (
    <section className="relative w-full flex justify-center bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/the-difference.webp')" }}
      ></div>
      {/* Dark gradient overlay to ensure text readability, matching the moody look of the image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/30 via-black/40 to-black/30"></div>

      {/* Content Container: Exact specifications from your Figma design */}
      <div className="relative z-10 w-full max-w-[1440px] min-h-[555px] flex flex-col justify-center pt-[40px] pb-[40px] px-6 sm:px-12 lg:pr-[120px] lg:pl-[120px]">
        
        {/* Header Section */}
        <div className="flex items-center gap-4.5">
          <span className="w-16 border-t border-[#E8C477]"></span>
          <span className="font-inter font-medium text-lg text-[#E8C477] tracking-widest uppercase">
            The Difference
          </span>
        </div>

        {/* Main Title */}
        <h2 className="font-playfair font-semibold text-[40px] md:text-[64px] leading-[1.1] text-[#E8C477] mt-4 max-w-4xl">
          More than education.<br />A stack for your business.
        </h2>

        {/* Description */}
        <p className="font-inter font-normal text-base lg:text-lg text-white/90 mt-6 max-w-4xl leading-relaxed">
          Beauty Stack combines practical learning, smart technology, AI-powered tools, and a supportive community, giving you everything you need to grow, create income, and build the business you deserve.
        </p>

        {/* Features Row (Bottom Section) */}
        {/* Grid for md (2 cols), Flex for lg (1 row). Exact gap-[19px] on lg. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-[19px] mt-16 w-full">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <React.Fragment key={feature.title}>
                {/* md:last:col-span-2 ensures the 5th item spans across both columns on tablet */}
                <div className="flex flex-col items-center text-center gap-3 w-full lg:w-1/5 md:last:col-span-2 md:last:max-w-sm md:last:mx-auto">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-[#F1D4C4] flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-black" strokeWidth={1.5} />
                  </div>
                  
                  {/* Feature Title */}
                  <h3 className="font-inter font-semibold text-white uppercase tracking-wider text-sm mt-1">
                    {feature.title}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="font-inter text-white/80 text-sm leading-snug">
                    {feature.desc}
                  </p>
                </div>

                {/* Vertical Divider (Hidden on mobile/tablet, shown on desktop) */}
                {index < features.length - 1 && (
                  <div className="hidden lg:block w-[1px] h-24 bg-white/20 shrink-0"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
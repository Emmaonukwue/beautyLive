import { Gem, Sparkles, Tag, Users, Settings, LucideIcon } from "lucide-react";

// 1. Define the TypeScript interface for your offer items
interface OfferItem {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

// 2. Type the array with the interface
const offers: OfferItem[] = [
  {
    num: "01",
    icon: Gem,
    title: "Build Your Brand",
    desc: "Learn how to position yourself, create a recognizable brand, and stand out in a crowded beauty market."
  },
  {
    num: "02",
    icon: Sparkles,
    title: "Market Smarter",
    desc: "Make use of modern marketing and AI-powered tools to attract the right clients and grow your visibility."
  },
  {
    num: "03",
    icon: Tag,
    title: "Master Your Pricing",
    desc: "Understand your value, set the right prices and create offers that increases your income and confidence."
  },
  {
    num: "04",
    icon: Users,
    title: "Attract & Retain Clients",
    desc: "Build lasting relationships with clients through exceptional service, trust and unforgettable experiences."
  },
  {
    num: "05",
    icon: Settings,
    title: "Build Systems That Scale",
    desc: "Streamline your operations, manage your time, and create systems that help your business grow without burnout."
  }
];

export default function Offer() {
  return (
    // Outer section: Exact padding on lg, responsive fallback for smaller screens
    <section className="w-full flex justify-center bg-[#0A0A0A] pt-[40px] pb-[40px] px-6 sm:px-12 lg:pr-[120px] lg:pl-[120px]">
      
      {/* Inner container: Exact max-width and min-height on lg */}
      <div className="w-full max-w-[1440px] lg:min-h-[717px] flex flex-col items-center justify-center">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 lg:gap-4.5 justify-center">
          <span className="w-8 lg:w-16 border-t border-[#D1A85D]"></span>
          <span className="font-inter font-medium text-sm lg:text-lg text-[#D1A85D] tracking-widest uppercase">
            What We Offer
          </span>
          <span className="w-8 lg:w-16 border-t border-[#D1A85D]"></span>
        </div>

        {/* Title */}
        <h2 className="font-playfair font-semibold text-[40px] md:text-[56px] leading-[1.15] text-white text-center max-w-4xl mt-6">
          Everything you need to<br className="hidden md:block" /> build a thriving <span className="text-[#D1A85D]">business.</span>
        </h2>

        {/* Subtitle */}
        <p className="font-inter font-normal text-base lg:text-lg text-white/80 text-center max-w-3xl mt-4 mb-10 lg:mb-12">
          From business education to modern tools, we give you the skills, the resources, and support to turn your passion to profit.
        </p>

        {/* Cards Grid - Exact 24px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[24px] w-full">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div 
                key={offer.num} 
                className="flex flex-col items-center text-center p-6 lg:p-8 bg-[#0A0A0A] border border-[#D1A85D]/50 rounded-[24px] h-full"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full border border-[#D1A85D] flex items-center justify-center mb-4 shrink-0">
                  <Icon size={22} className="text-[#D1A85D]" strokeWidth={1.5} />
                </div>

                {/* Number */}
                <span className="font-inter font-bold text-[#D1A85D] text-lg mb-2">
                  {offer.num}
                </span>

                {/* Card Title */}
                <h3 className="font-playfair font-medium text-xl lg:text-2xl text-white mb-3">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="font-inter font-normal text-xs lg:text-sm text-white/80 leading-relaxed mb-6 grow">
                  {offer.desc}
                </p>

                {/* Bottom Divider Line */}
                <span className="w-12 border-t border-[#D1A85D] mt-auto shrink-0"></span>
              </div>
            );
          })}
        </div>

        {/* NEW: Bottom Tagline */}
        <p className="font-playfair italic text-[#D1A85D] text-lg lg:text-xl mt-12 text-center w-full">
          Your beauty business journey starts here.
        </p>

      </div>
    </section>
  );
}
import { ArrowRight } from "lucide-react";

export default function Transformation() {
  const steps = ["Skills & Passion", "Business Knowledge", "Tools & Technology", "Growth & Freedom"];

  return (
    <section className="w-full flex items-center px-30 py-10 bg-[#F8F5F0]">
      <div className="w-full max-w-300 mx-auto flex items-center gap-8">
        {/* Left: text + steps */}
        <div className="flex flex-col items-start gap-6 max-w-189.25">
          <div className="flex items-center gap-4.5">
            <span className="w-12.5 border-t-[1.5px] border-gold"></span>
            <span className="font-inter font-medium text-lg text-gold">THE TRANSFORMATION</span>
          </div>
          <h2 className="font-playfair font-semibold text-[64px] leading-21.25 text-black">
            From beauty skills to a business of your own.
          </h2>
          <p className="font-inter font-normal text-lg text-black">
            At Beauty Stack, we don&apos;t just help you do better at what you love, we help you
            to build a real business around it. More skills, more tools, more support, more you.
          </p>

          {/* 4-step row */}
          <div className="flex items-center gap-6">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-6">
                <div className="flex items-center justify-center w-30 h-30 rounded-full bg-[#E9B9A8] text-center px-2">
                  <span className="font-playfair font-medium text-[13px] leading-4.25 text-white">
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight size={28} className="text-[#E9B9A8]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: device mockup */}
        <img
          src="/images/transformation-ipad.jpg"
          alt="Beauty Stack dashboard on iPad"
          className="max-w-100"
        />
      </div>
    </section>
  );
}
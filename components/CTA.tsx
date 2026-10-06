import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="relative w-full flex flex-col items-start px-30 py-10 gap-2.5 bg-cover bg-center isolate"
      style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
    >
      <div className="relative z-0 w-full max-w-300 flex flex-col items-start gap-6">
        <div className="flex items-center gap-4.5">
          <span className="w-12.5 border-t-[1.5px] border-gold"></span>
          <span className="font-inter font-medium text-lg text-gold">READY TO BUILD MORE?</span>
        </div>
        <h2 className="font-playfair font-semibold text-[64px] leading-21.25 text-white">
          Your beauty skills deserve a business that grows.
        </h2>
        <p className="font-inter font-normal text-lg text-white">
          Be the first to know when Beauty Stack launches. Join the waitlist and get early
          access to what&apos;s coming.
        </p>
        <button className="flex items-center gap-1.5 bg-gold text-black font-inter font-medium text-base px-4 py-2.5 rounded-full">
          Join the Waitlist
          <ArrowRight size={20} />
        </button>
      </div>

      <img
        src="/images/cta-decor.png"
        alt=""
        className="absolute z-10 w-114.75 h-76.5 right-4.25 top-33.25 object-cover rounded-lg"
      />
    </section>
  );
}
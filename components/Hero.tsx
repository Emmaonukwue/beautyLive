// components/Hero.tsx
import { ArrowRight, Circle } from "lucide-react";

export default function Hero() {
  const navLinks = ["Home", "Programs", "Community", "Resources"];
  const audiences = ["Makeup Artists", "Gele Artists", "Lash Technicians", "Nail Technicians"];

  return (
    <section
      className="w-full flex flex-col items-start gap-10 px-30 pb-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Navbar */}
      <nav className="w-full max-w-300 mx-auto flex items-center justify-between py-3">
        <div className="flex items-center bg-black px-4 py-2">
          <img src="/images/logo.png" alt="Beauty Stack logo" className="w-16 h-16" />
          <div className="flex flex-col items-start gap-2 ml-3">
            <span className="font-playfair font-semibold text-2xl text-gold">BEAUTY STACK</span>
            <div className="flex items-center gap-3">
              <span className="font-playfair font-medium text-sm text-gold">BEAUTY</span>
              <span className="font-playfair font-medium text-sm text-gold">EDUCATE</span>
              <span className="font-playfair font-medium text-sm text-gold">EXCELLENCE</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-16">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="font-inter font-medium text-base text-white">
                {link}
              </a>
            ))}
          </div>
          <button className="flex items-center gap-1.5 bg-gold text-black font-inter font-medium text-base px-4 py-2.5 rounded-full">
            Join the Waitlist
            <ArrowRight size={20} />
          </button>
        </div>
      </nav>

      {/* Hero content */}
      <div className="flex flex-col items-start gap-6 max-w-300">
        <span className="font-inter font-medium text-lg text-gold">BEAUTY BUSINESS ACADEMY</span>
        <h1 className="font-playfair font-semibold text-[64px] leading-16.75 text-white">
          Build the business behind your beauty skills.
        </h1>
        <p className="font-inter font-normal text-lg text-white">
          Turn your beauty skills into a thriving business with practical education,
          modern tools, AI-powered marketing and systems designed to help you grow.
        </p>
        <button className="flex items-center gap-1.5 bg-gold text-black font-inter font-medium text-base px-4 py-2.5 rounded-full">
          Join the Waitlist
          <ArrowRight size={20} />
        </button>
        <div className="flex items-center gap-3">
          {audiences.map((label) => (
            <span key={label} className="flex items-center gap-1 font-inter font-medium text-sm text-gold">
              <Circle size={8} fill="currentColor" /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
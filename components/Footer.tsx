import { Copyright } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const exploreLinks = ["Home", "Programs", "Community", "Resources"];
  const socialIcons = [
    "/images/social-1.png",
    "/images/social-2.png",
    "/images/social-3.png",
    "/images/social-4.png",
    "/images/social-5.png",
  ];

  return (
    <footer
      className="w-full flex flex-col items-center px-30 py-10 gap-10"
      style={{ background: "linear-gradient(90deg, #E8C477 6%, #000000 86%)" }}
    >
      <div className="w-full max-w-300 flex flex-col items-center gap-10">
        {/* Top row: logo + link columns */}
        <div className="w-full flex items-start gap-11">
          {/* Logo */}
          <div className="flex items-center gap-6 w-84.25">
            <img src="/images/logo.png" alt="Beauty Stack logo" className="w-25 h-25" />
            <div className="flex flex-col items-start gap-2">
              <span className="font-playfair font-semibold text-2xl text-black">BEAUTY STACK</span>
              <div className="flex items-center gap-3">
                <span className="font-playfair font-medium text-sm text-black">BEAUTY</span>
                <span className="font-playfair font-medium text-sm text-black">EDUCATE</span>
                <span className="font-playfair font-medium text-sm text-black">EXCELLENCE</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-start gap-4">
            <span className="font-inter font-medium text-2xl text-gold">EXPLORE</span>
            <div className="flex flex-col items-start gap-3">
              {exploreLinks.map((link) => (
                <a key={link} href="#" className="font-inter font-normal text-lg text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start gap-4.5">
            <span className="font-inter font-medium text-2xl text-gold">CONTACT US</span>
            <div className="flex items-center gap-2">
              <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
              <span className="font-inter font-normal text-lg text-white">+234 812 258 0823</span>
            </div>
          </div>

          {/* Follow */}
          <div className="flex flex-col items-start gap-6">
            <span className="font-inter font-medium text-lg text-gold">FOLLOW US</span>
            <div className="flex items-center gap-2.5">
              {socialIcons.map((src, i) => (
                <img key={i} src={src} alt="" className="w-8 h-8 rounded-[10px]" />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center gap-1.5">
          <Copyright size={24} className="text-white" />
          <span className="font-inter font-medium text-lg text-white">
            2026 Beauty Stack. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
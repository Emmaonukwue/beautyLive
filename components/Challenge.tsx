import { GraduationCap, BarChart3, Tag, Settings, Rocket, Eye } from "lucide-react";

export default function Challenge() {
  const problems = [
    { icon: GraduationCap, label: "No Business Knowledge" },
    { icon: BarChart3, label: "Inconsistent Income" },
    { icon: Tag, label: "Low Pricing" },
    { icon: Settings, label: "Lack of Systems" },
    { icon: Rocket, label: "Lack of Strategy" },
    { icon: Eye, label: "Limited Visibility" },
  ];

  return (
    <section
      className="w-full flex flex-col items-start px-30 py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/challenge-bg.jpg')" }}
    >
      <div className="w-full max-w-300 mx-auto flex items-center gap-8">
        {/* Left: text */}
        <div className="flex flex-col items-start gap-6 max-w-150">
          <div className="flex items-center gap-4.5">
            <span className="w-12.5 border-t border-black"></span>
            <span className="font-inter font-medium text-lg text-black">THE CHALLENGE</span>
          </div>
          <h2 className="font-playfair font-semibold text-[64px] leading-16.75 text-black">
            Being great at beauty is only the beginning.
          </h2>
          <p className="font-inter font-normal text-lg text-black/80">
            You&apos;ve mastered your craft, but turning your skills into a sustainable business
            comes with its own set of challenges. Here are some of the key hurdles beauty
            professionals face on their journey to growth and success.
          </p>
        </div>

        {/* Right: 6 challenge cards */}
        <div className="grid grid-cols-3 gap-8">
          {problems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-3 bg-black border-2 border-gold rounded-2xl p-9 w-44.75 h-49"
            >
              <span className="flex items-center justify-center w-12.5 h-12.5 rounded-full border border-gold">
                <Icon size={24} className="text-gold" />
              </span>
              <span className="font-playfair font-medium text-lg text-white text-center">
                {label}
              </span>
              <span className="w-10 border-t border-gold"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
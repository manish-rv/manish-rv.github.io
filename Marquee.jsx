import { marqueeSkills } from "../data/content";

export default function Marquee() {
  // Duplicate list so the marquee loops seamlessly
  const items = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="relative z-10 border-t border-b border-[#333]/40 bg-[#0f0f0f] py-3 overflow-hidden">
      <div className="marquee-track">
        <div className="marquee-inner font-display text-[15px] tracking-[0.18em] text-[#444]">
          {items.map((skill, i) => (
            <span key={i}>
              &nbsp;&nbsp;{skill.toUpperCase()}&nbsp;<span className="text-[#333]">—</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

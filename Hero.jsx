import { hero } from "../data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-16 px-8 md:px-14 pt-28 overflow-hidden z-10"
    >
      {/* Vertical label */}
      <div className="absolute left-14 top-28 bottom-0 hidden md:flex flex-col items-center gap-4">
        <div className="w-px bg-[#333]/50 h-20" />
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#666] rotate-90 origin-center whitespace-nowrap mt-8">
          Manish Rudra Vijayakumar 2026
        </span>
      </div>

      <div className="relative">
        {/* Ghost background name */}
        <div className="absolute inset-0 flex items-end pointer-events-none select-none overflow-hidden">
          <span
            className="font-display leading-none tracking-tight text-white/[0.03] whitespace-nowrap"
            style={{ fontSize: "clamp(80px,18vw,220px)", letterSpacing: "-0.03em" }}
          >
            MANISH RUDRA VIJAYAKUMAR
          </span>
        </div>

        <div className="relative">
          {/* Tags row */}
          <div className="anim-fade-up flex flex-wrap items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#666]" />
            {hero.tags.map((tag, i) => (
              <span key={tag} className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#888]">
                {tag}
                {i < hero.tags.length - 1 && <span className="nav-dot inline-block ml-4" />}
              </span>
            ))}
          </div>

          {/* Name */}
          <h1
            className="anim-fade-up-1 font-display leading-[0.88] tracking-tight text-white"
            style={{ fontSize: "clamp(72px,13vw,172px)", letterSpacing: "-0.02em" }}
          >
            {hero.firstName}
            <br />
            <span className="text-[#f0ede6]/90">{hero.lastName}</span>
            <span className="text-[#333] anim-blink">_</span>
          </h1>

          {/* Role */}
          <p className="anim-fade-up-2 font-mono text-[clamp(12px,1.8vw,15px)] tracking-[0.2em] uppercase text-[#666] mt-4 mb-6">
            <span className="text-[#888]">// </span>{hero.role}
          </p>

          {/* Bio */}
          <div className="anim-fade-up-3 max-w-xl">
            <p
              className="font-body font-light text-[15px] leading-[1.85] text-[#888]"
              dangerouslySetInnerHTML={{ __html: hero.bio }}
            />
          </div>

          {/* Stats + CTAs */}
          <div className="anim-fade-up-4 mt-10 flex flex-wrap items-end gap-12 border-t border-[#333]/40 pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[52px] text-white leading-none mb-1">{s.value}</div>
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#666]">{s.label}</div>
              </div>
            ))}

            {/* CTAs pushed right */}
            <div className="ml-auto flex gap-4 items-end pb-2 flex-wrap">
              {hero.cta.map((btn) =>
                btn.primary ? (
                  <a key={btn.label} href={btn.href}
                    className="group inline-flex items-center gap-3 bg-white text-[#080808] font-cond font-semibold text-[12px] tracking-[0.12em] uppercase px-7 py-3.5 hover:bg-[#e8e4dc] transition-colors duration-200">
                    {btn.label}
                  </a>
                ) : (
                  <a key={btn.label} href={btn.href}
                    className="inline-flex items-center gap-3 border border-[#333] text-[#888] font-cond font-medium text-[12px] tracking-[0.12em] uppercase px-7 py-3.5 hover:border-[#f0ede6] hover:text-[#f0ede6] transition-all duration-200">
                    {btn.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="anim-fade-late absolute bottom-8 right-12 flex items-center gap-3 font-mono text-[9px] tracking-[0.18em] uppercase text-[#666]">
        {hero.scrollLabel}
        <div className="flex flex-col gap-0.5" style={{ animation: "bounce 1.6s ease-in-out infinite" }}>
          <span className="block w-3.5 h-px bg-[#666] rotate-45 origin-right" />
          <span className="block w-3.5 h-px bg-[#666] -rotate-45 -translate-y-px origin-right" />
        </div>
      </div>
    </section>
  );
}

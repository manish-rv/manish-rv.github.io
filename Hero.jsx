import { hero } from "../data/content";

export default function Hero() {
  return (
    <section id="hero"
      className="relative flex flex-col justify-end
        pb-16 px-6 md:px-14 pt-32 md:pt-36 overflow-hidden z-10">

      {/* Vertical label */}
      <div className="absolute left-14 top-28 bottom-0 hidden md:flex flex-col items-center gap-4">
        <div className="w-px bg-skin-border/50 h-20" />
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
            <div className="w-8 h-px bg-skin-faint" />
            {hero.tags.map((tag, i) => (
              <span key={tag} className="font-mono text-[10px] tracking-[0.2em] uppercase text-skin-sub">
                {tag}
                {i < hero.tags.length - 1 && <span className="nav-dot inline-block ml-4" />}
              </span>
            ))}
          </div>

          {/* Name */}
          <h1
            className="anim-fade-up-1 font-display leading-[0.88] tracking-tight text-skin-text"
            style={{ fontSize: "clamp(52px,13vw,100px)", letterSpacing: "-0.02em" }}
          >
            {hero.firstName}
            <br />
            <span className="text-skin-text/90">{hero.lastName}</span>
            <span className="text-skin-border anim-blink">_</span>
          </h1>

          {/* Role */}
          <p className="anim-fade-up-2 font-mono text-[clamp(10px,1.8vw,15px)]
            tracking-[0.2em] uppercase text-skin-faint mt-4 mb-6">
            <span className="text-skin-sub">// </span>{hero.role}
          </p>

          {/* Bio */}
          <div className="anim-fade-up-3 max-w-xl">
            <p
              className="font-body font-light text-[15px] leading-[1.85] text-skin-sub"
              dangerouslySetInnerHTML={{ __html: hero.bio }}
            />
          </div>

          {/* Stats + CTAs */}
          <div className="anim-fade-up-4 mt-8 md:mt-10 flex flex-wrap items-end gap-8 md:gap-12
            border-t border-skin-border/40 pt-6 md:pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[40px] md:text-[52px] text-skin-text leading-none mb-1">{s.value}</div>
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-skin-faint">{s.label}</div>
              </div>
            ))}

            {/* CTAs pushed right */}
            <div className="w-full md:w-auto md:ml-auto flex gap-3 md:gap-4 items-end pb-2 flex-wrap mt-2 md:mt-0">
              {hero.cta.map((btn) =>
                btn.primary ? (
                  <a key={btn.label} href={btn.href}
                    className="group inline-flex items-center gap-3 font-cond font-semibold
                      text-[12px] tracking-[0.12em] uppercase px-6 md:px-7 py-3 md:py-3.5
                      transition-all duration-200 primary-btn"
                    style={{ background: 'var(--btn-bg)', color: 'var(--btn-text)' }}>
                    {btn.label}
                  </a>
                ) : (
                  <a key={btn.label} href={btn.href}
                    className="inline-flex items-center gap-3 border border-skin-border text-skin-sub
                      font-cond font-medium text-[12px] tracking-[0.12em] uppercase
                      px-6 md:px-7 py-3 md:py-3.5 hover:border-skin-text hover:text-skin-text
                      transition-all duration-200">
                    {btn.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

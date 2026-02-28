function Hero() {
  const { hero } = CONTENT;
  return (
    <section id="hero"
      className="relative flex flex-col justify-end
        pb-16 px-6 md:px-14 pt-32 md:pt-36 overflow-hidden z-10">
      <div className="absolute left-14 top-28 bottom-0 hidden md:flex flex-col items-center gap-4">
        <div className="w-px bg-skin-border/50 h-20"/>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-end pointer-events-none select-none overflow-hidden">
          <span className="font-display leading-none tracking-tight text-white/[0.03] whitespace-nowrap"
            style={{fontSize:"clamp(20px,12vw,60px)",letterSpacing:"-0.03em"}}>
            Built by Claude; Customized by MRV
          </span>
        </div>
        <div className="relative">
          <div className="anim-fade-up flex flex-wrap items-center gap-4 mb-6">
            <div className="w-8 h-px bg-skin-faint"/>
            {hero.tags.map((tag,i)=>(
              <span key={tag} className="font-mono text-[10px] tracking-[0.2em] uppercase text-skin-sub">
                {tag}{i<hero.tags.length-1&&<span className="nav-dot inline-block ml-4"/>}
              </span>
            ))}
          </div>
          <h1 className="anim-fade-up-1 font-display leading-[0.88] tracking-tight text-skin-text"
            style={{fontSize:"clamp(52px,12vw,80px)",letterSpacing:"-0.02em"}}>
            {hero.firstName}<br/>
            <span className="text-skin-text/90">{hero.lastName}</span>
            <span className="text-skin-border anim-blink">_</span>
          </h1>
          <p className="anim-fade-up-2 font-mono text-[clamp(10px,1.8vw,15px)]
            tracking-[0.2em] uppercase text-skin-faint mt-4 mb-6">
            <span className="text-skin-sub">// </span>{hero.role}
          </p>
          <div className="anim-fade-up-3 max-w-xl">
            <p className="font-body font-light text-[15px] leading-[1.85] text-skin-sub">{hero.bio}</p>
          </div>
          <div className="anim-fade-up-4 mt-8 md:mt-10 flex flex-wrap items-end gap-8 md:gap-12
            border-t border-skin-border/40 pt-6 md:pt-8">
            {hero.stats.map(s=>(
              <div key={s.label}>
                <div className="font-display text-[40px] md:text-[52px] text-skin-text leading-none mb-1">{s.value}</div>
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-skin-faint">{s.label}</div>
              </div>
            ))}
            <div className="w-full md:w-auto md:ml-auto flex gap-3 md:gap-4 items-end pb-2 flex-wrap mt-2 md:mt-0">
              {hero.cta.map(btn=>(
                <LinkButton key={btn.label} href={btn.href} label={btn.label} primary={btn.primary}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

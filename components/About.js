function About() {
  const ref = useReveal();
  const { about } = CONTENT;
  return (
    <section id="about" className="relative z-10 bg-skin-base border-b-2 border-skin-border/60" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-14 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="rev">
          <SectionLabel number={about.sectionNumber} label={about.sectionLabel}/>
          <SectionHeading lines={about.heading} style={{marginBottom:"2rem"}}/>
          {about.bio.map((p,i)=>(
            <p key={i} className="font-body font-light text-[14.5px] leading-[1.9] text-skin-sub mb-6">{p}</p>
          ))}
          <div className="flex flex-wrap gap-2 mt-4">
            {about.skills.map(s=><span key={s} className="skill-tag">{s}</span>)}
          </div>
        </div>
        <div className="rev-r" style={{transitionDelay:"0.15s"}}>
          <div className="relative mb-6">
            <div className="w-full aspect-[3/4] bg-skin-card border border-skin-border/40
              overflow-hidden relative">
              <img src="data/assets/Manish.jpg" alt="Manish Rudra Vijayakumar"
                className="w-full h-full object-cover"/>
              <div className="absolute top-3 left-3  w-5 h-5 border-l border-t border-skin-ghost/60"/>
              <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-skin-ghost/60"/>
              <div className="absolute bottom-3 left-3  w-5 h-5 border-l border-b border-skin-ghost/60"/>
              <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-skin-ghost/60"/>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2"
              style={{background:'var(--btn-bg)', color:'var(--btn-text)'}}>
              <div className="font-display text-[11px] tracking-widest">SALESFORCE DEV</div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-px bg-skin-border/30">
            {about.info.map(item=>(
              <div key={item.label} className="bg-skin-card p-4">
                <div className="font-mono text-[9px] tracking-wider uppercase text-skin-faint mb-1">{item.label}</div>
                <div className={`font-cond font-medium text-[13px]
                  ${item.blink?"text-skin-text flex items-center gap-2":"text-skin-text"}`}>
                  {item.blink&&<span className="inline-block w-2 h-2 rounded-full anim-blink" style={{background:'var(--text-primary)'}}/>}
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

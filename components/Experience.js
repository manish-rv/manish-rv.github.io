function TimelineItem({ item, index, isLast }) {
  return (
    <div className="rev-l relative" style={{transitionDelay:`${index*0.1}s`}}>
      <div className="absolute -left-[33px] md:-left-[53px] top-2 w-3.5 h-3.5 border
        border-skin-text bg-skin-base rotate-45 z-10 transition-all duration-300
        hover:bg-skin-text hover:border-skin-text hover:scale-125 cursor-default"/>
      <div className={`group hover:bg-skin-card/40 transition-colors duration-300 p-4 -mx-4
        ${!isLast?"border-b-2 border-skin-border/60 pb-10 mb-10":""}`}>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <div className="font-cond font-semibold text-[18px] tracking-wide text-skin-text uppercase">{item.role}</div>
            <div className="font-mono text-[11px] tracking-wide text-skin-faint mt-0.5">{item.company}</div>
          </div>
          <span className="font-mono text-[10px] tracking-wider text-skin-ghost
            border border-skin-border/50 px-2.5 py-1">{item.period}</span>
        </div>
        <p className="font-body font-light text-[13.5px] leading-[1.85] text-skin-faint mb-4 max-w-2xl">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map(tag=><span key={tag} className={item.tagStyle==="primary"?"etag":"etag-w"}>{tag}</span>)}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const [secRef,fillRef] = useTimelineFill();
  const revRef = useReveal();
  const { experience } = CONTENT;
  return (
    <section id="experience" className="relative z-10 bg-skin-muted border-b-2 border-skin-border/60" ref={secRef}>
      <div className="max-w-5xl mx-auto px-6 md:px-14 py-16 md:py-24" ref={revRef}>
        <div className="rev flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-6">
          <div>
            <SectionLabel number={experience.sectionNumber} label={experience.sectionLabel}/>
            <SectionHeading lines={experience.heading}/>
          </div>
          <p className="font-body font-light text-[13px] text-skin-faint max-w-xs">{experience.summary}</p>
        </div>
        <div className="relative pl-8 md:pl-14">
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-skin-border/40 overflow-hidden">
            <div ref={fillRef} className="tl-fill w-full bg-gradient-to-b from-skin-text/60 via-skin-text/30 to-transparent"/>
          </div>
          {experience.items.map((item,i)=>(
            <TimelineItem key={item.role} item={item} index={i} isLast={i===experience.items.length-1}/>
          ))}
        </div>
      </div>
    </section>
  );
}

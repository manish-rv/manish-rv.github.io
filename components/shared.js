/* ── Shared hooks & components ─────────────── */

function useReveal(threshold=0.08) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      es=>es.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("on"); }),
      { threshold }
    );
    const el=ref.current;
    if(!el) return;
    el.querySelectorAll(".rev,.rev-l,.rev-r").forEach(n=>obs.observe(n));
    return ()=>obs.disconnect();
  },[threshold]);
  return ref;
}

function useTimelineFill(threshold=0.04) {
  const secRef=useRef(null), fillRef=useRef(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(
      es=>es.forEach(e=>{ if(e.isIntersecting&&fillRef.current) fillRef.current.classList.add("on"); }),
      { threshold }
    );
    if(secRef.current) obs.observe(secRef.current);
    return ()=>obs.disconnect();
  },[threshold]);
  return [secRef,fillRef];
}

function SectionHeading({ lines, style }) {
  return (
    <h2 className="font-display leading-[0.9] tracking-tight text-skin-text"
      style={{fontSize:"clamp(38px,7vw,80px)",letterSpacing:"-0.01em",...style}}>
      {lines.map((line,i)=>(
        <span key={i} className={i===lines.length-1?"text-skin-faint":""}>{line}<br/></span>
      ))}
    </h2>
  );
}

function LinkButton({ href, label, primary, target, rel }) {
  const base = "inline-flex items-center gap-2.5 font-cond font-semibold text-[12px] tracking-[0.12em] uppercase px-6 md:px-7 py-3 md:py-3.5 transition-all duration-200";
  return primary ? (
    <a href={href} target={target} rel={rel} className={`${base} primary-btn`}
      style={{background:'var(--btn-bg)', color:'var(--btn-text)'}}>{label}</a>
  ) : (
    <a href={href} target={target} rel={rel}
      className={`${base} border border-skin-border text-skin-sub hover:border-skin-text hover:text-skin-text`}>{label}</a>
  );
}

function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-skin-faint">{number} —</span>
      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-skin-faint">{label}</span>
      <div className="flex-1 h-px bg-skin-border/50 ml-2"/>
    </div>
  );
}

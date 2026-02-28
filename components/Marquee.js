function Marquee() {
  const items = [...CONTENT.marquee,...CONTENT.marquee];
  return (
    <div className="relative z-10 border-t-2 border-b-2 border-skin-border/70 bg-skin-muted py-3 overflow-hidden">
      <div className="marquee-track">
        <div className="marquee-inner font-display text-[15px] tracking-[0.18em] text-skin-ghost">
          {items.map((s,i)=><span key={i}>&nbsp;&nbsp;{s.toUpperCase()}&nbsp;<span className="text-skin-border">—</span></span>)}
        </div>
      </div>
    </div>
  );
}

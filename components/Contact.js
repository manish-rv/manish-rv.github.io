function Contact() {
  const ref = useReveal();
  const { contact } = CONTENT;
  return (
    <section id="contact" className="relative z-10 bg-skin-muted" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-14 py-16 md:py-24">
        <div className="rev border border-skin-border/30 p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-4 font-display text-[150px]
            text-white/[0.025] leading-none select-none pointer-events-none"
            style={{letterSpacing:"-0.03em"}}>HIRE</div>
          <SectionLabel number={contact.sectionNumber} label={contact.sectionLabel}/>
          <SectionHeading lines={contact.heading}
            style={{fontSize:"clamp(40px,9vw,110px)",letterSpacing:"-0.02em",lineHeight:"0.88",marginBottom:"2rem"}}/>
          <p className="font-body font-light text-[14px] leading-[1.85] text-skin-sub max-w-md mb-10 md:mb-12">{contact.body}</p>
          <div className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-14">
            {contact.links.map(link=>(
              <LinkButton key={link.label} href={link.href} label={link.label} primary={link.primary}
                target={!link.primary&&link.href.startsWith("http")?"_blank":undefined}
                rel={!link.primary&&link.href.startsWith("http")?"noopener noreferrer":undefined}/>
            ))}
          </div>
          <div className="border-t border-skin-border/30 pt-6 md:pt-8 flex flex-wrap items-center justify-between gap-3 md:gap-4">
            {[contact.footer.copyright, contact.footer.location, contact.footer.email].map(text=>(
              <span key={text} className="font-mono text-[9px] tracking-[0.14em] uppercase text-skin-ghost">{text}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

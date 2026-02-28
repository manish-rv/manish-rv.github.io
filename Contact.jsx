import { contact } from "../data/content";
import { useReveal } from "./useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="relative z-10 bg-skin-muted" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-14 py-16 md:py-24">

        <div className="rev border border-skin-border/30 p-8 md:p-14 relative overflow-hidden">
          {/* Decorative background text */}
          <div
            className="absolute -right-6 -bottom-4 font-display text-[150px]
              text-white/[0.025] leading-none select-none pointer-events-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            HIRE
          </div>

          {/* Section label */}
          <div className="flex items-start gap-3 mb-10">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-skin-faint">{contact.sectionNumber} —</span>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-skin-faint">{contact.sectionLabel}</span>
          </div>

          {/* Heading */}
          <h2
            className="font-display leading-[0.88] tracking-tight text-skin-text mb-8"
            style={{ fontSize: "clamp(40px,9vw,110px)", letterSpacing: "-0.02em" }}
          >
            {contact.heading.map((line, i) => (
              <span key={i} className={i === contact.heading.length - 1 ? "text-skin-faint" : ""}>
                {line}<br />
              </span>
            ))}
          </h2>

          {/* Body */}
          <p className="font-body font-light text-[14px] leading-[1.85] text-skin-sub max-w-md mb-10 md:mb-12">
            {contact.body}
          </p>

          {/* Link buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-14">
            {contact.links.map((link) =>
              link.primary ? (
                <a key={link.label} href={link.href}
                  className="inline-flex items-center gap-2.5 font-cond font-semibold
                    text-[12px] tracking-[0.14em] uppercase px-6 md:px-8 py-3 md:py-4
                    transition-colors duration-200"
                  style={{ background: 'var(--btn-bg)', color: 'var(--btn-text)' }}>
                  {link.label}
                </a>
              ) : (
                <a key={link.label} href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border border-skin-border/50 text-skin-sub
                    font-cond font-medium text-[12px] tracking-[0.14em] uppercase
                    px-6 md:px-8 py-3 md:py-4 hover:border-skin-text hover:text-skin-text
                    transition-all duration-200">
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Footer row */}
          <div className="border-t border-skin-border/30 pt-6 md:pt-8 flex flex-wrap items-center justify-between gap-3 md:gap-4">
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-skin-ghost">{contact.footer.copyright}</span>
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-skin-ghost">{contact.footer.location}</span>
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-skin-ghost">{contact.footer.email}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

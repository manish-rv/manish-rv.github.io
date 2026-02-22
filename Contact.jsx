import { contact } from "../data/content";
import { useReveal } from "./useReveal";

export default function Contact() {
  const sectionRef = useReveal();

  return (
    <section id="contact" className="relative z-10 bg-[#0f0f0f]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-8 md:px-14 py-24">

        <div className="rev border border-[#333]/30 p-10 md:p-14 relative overflow-hidden">
          {/* Decorative background text */}
          <div
            className="absolute -right-6 -bottom-4 font-display text-[150px] text-white/[0.025] leading-none select-none pointer-events-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            HIRE
          </div>

          {/* Section label */}
          <div className="flex items-start gap-3 mb-10">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#666]">{contact.sectionNumber} —</span>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#666]">{contact.sectionLabel}</span>
          </div>

          {/* Heading */}
          <h2
            className="font-display leading-[0.88] tracking-tight text-white mb-8"
            style={{ fontSize: "clamp(48px,9vw,110px)", letterSpacing: "-0.02em" }}
          >
            {contact.heading.map((line, i) => (
              <span key={i} className={i === contact.heading.length - 1 ? "text-[#666]" : ""}>
                {line}<br />
              </span>
            ))}
          </h2>

          {/* Body */}
          <p className="font-body font-light text-[14px] leading-[1.85] text-[#888] max-w-md mb-12">
            {contact.body}
          </p>

          {/* Link buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            {contact.links.map((link) =>
              link.primary ? (
                <a key={link.label} href={link.href}
                  className="inline-flex items-center gap-2.5 bg-white text-[#080808] font-cond font-semibold text-[12px] tracking-[0.14em] uppercase px-8 py-4 hover:bg-[#e8e4dc] transition-colors duration-200">
                  {link.label}
                </a>
              ) : (
                <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border border-[#333]/50 text-[#888] font-cond font-medium text-[12px] tracking-[0.14em] uppercase px-8 py-4 hover:border-[#f0ede6] hover:text-[#f0ede6] transition-all duration-200">
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Footer row */}
          <div className="border-t border-[#333]/30 pt-8 flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#444]">{contact.footer.copyright}</span>
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#444]">{contact.footer.location}</span>
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#444]">{contact.footer.email}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

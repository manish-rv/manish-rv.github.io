import { about } from "../data/content";
import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="relative z-10 bg-skin-base border-b-2 border-skin-border/60" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-14 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left — Text */}
        <div className="rev">
          <SectionLabel number={about.sectionNumber} label={about.sectionLabel} />

          <h2
            className="font-display leading-[0.9] tracking-tight text-skin-text mb-8"
            style={{ fontSize: "clamp(38px,7vw,80px)", letterSpacing: "-0.01em" }}
          >
            {about.heading.map((line, i) => (
              <span key={i} className={i === about.heading.length - 1 ? "text-skin-faint" : ""}>
                {line}<br />
              </span>
            ))}
          </h2>

          {about.bio.map((p, i) => (
            <p key={i} className="font-body font-light text-[14.5px] leading-[1.9] text-skin-sub mb-6">
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 mt-4">
            {about.skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Right — Photo + Info */}
        <div className="rev-r" style={{ transitionDelay: "0.15s" }}>
          {/* Photo placeholder */}
          <div className="relative mb-6">
            <div className="w-full aspect-[3/4] bg-skin-card border border-skin-border/40
              flex flex-col items-center justify-center overflow-hidden relative">
              {/* Scanline */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="w-full h-12 bg-gradient-to-b from-transparent
                  via-skin-text/[0.02] to-transparent anim-scan-v" />
              </div>
              {/* Avatar icon */}
              <div className="w-24 h-24 rounded-full border border-skin-border/60 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-skin-ghost" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-skin-ghost">[ Photo ]</div>
              {/* Corner marks */}
              <div className="absolute top-3 left-3  w-5 h-5 border-l border-t border-skin-ghost/60" />
              <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-skin-ghost/60" />
              <div className="absolute bottom-3 left-3  w-5 h-5 border-l border-b border-skin-ghost/60" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-skin-ghost/60" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2"
              style={{ background: 'var(--btn-bg)', color: 'var(--btn-text)' }}>
              <div className="font-display text-[11px] tracking-widest">SALESFORCE DEV</div>
            </div>
          </div>

          {/* Info grid */}
          <div className="mt-8 grid grid-cols-2 gap-px bg-skin-border/30">
            {about.info.map((item) => (
              <div key={item.label} className="bg-skin-card p-4">
                <div className="font-mono text-[9px] tracking-wider uppercase text-skin-faint mb-1">{item.label}</div>
                <div className={`font-cond font-medium text-[13px]
                  ${item.blink ? "text-skin-text flex items-center gap-2" : "text-skin-text"}`}>
                  {item.blink && <span className="inline-block w-2 h-2 rounded-full anim-blink" style={{ background: 'var(--text-primary)' }} />}
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

/* ── Shared section label ── */
export function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-skin-faint">{number} —</span>
      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-skin-faint">{label}</span>
      <div className="flex-1 h-px bg-skin-border/50 ml-2" />
    </div>
  );
}

import { projects } from "../data/content";
import { useReveal } from "./useReveal";
import { SectionLabel } from "./About";

export default function Projects() {
  const sectionRef = useReveal();

  return (
    <section id="projects" className="relative z-10 bg-[#080808] border-b border-[#333]/30" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-8 md:px-14 py-24">

        {/* Header */}
        <div className="rev flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <SectionLabel number={projects.sectionNumber} label={projects.sectionLabel} />
            <h2
              className="font-display leading-[0.9] tracking-tight text-white"
              style={{ fontSize: "clamp(42px,7vw,80px)", letterSpacing: "-0.01em" }}
            >
              {projects.heading.map((line, i) => (
                <span key={i} className={i === projects.heading.length - 1 ? "text-[#666]" : ""}>
                  {line}<br />
                </span>
              ))}
            </h2>
          </div>
          <a
            href={projects.githubAllHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[15px] tracking-[0.14em] uppercase text-[#666] border-b border-[#333]/40 hover:text-white hover:border-white pb-0.5 transition-all duration-200"
          >
            View All on GitHub →
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#333]/20">
          {projects.items.length === 0 ? (
            <div className="col-span-2 flex items-center justify-center py-24">
              <span className="font-mono text-[39px] tracking-[0.14em] uppercase text-[#666]">
                Loading<span style={{ animation: "dotPulse 1.4s infinite", animationDelay: "0s" }}>.</span><span style={{ animation: "dotPulse 1.4s infinite", animationDelay: "0.2s" }}>.</span><span style={{ animation: "dotPulse 1.4s infinite", animationDelay: "0.4s" }}>.</span>
              </span>
            </div>
          ) : (
            projects.items.map((proj, i) => (
              <ProjectCard key={proj.index} project={proj} delay={i * 0.08} />
            ))
          )}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <div
      className="proj-card rev bg-[#0f0f0f] relative overflow-hidden group"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Header metadata */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#444]">{project.index}</span>
          <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#444] border border-[#333]/40 px-2 py-0.5">
            {project.stack}
          </span>
        </div>
        <h3 className="font-cond font-semibold text-[20px] tracking-wide uppercase text-white mb-2">{project.title}</h3>
        <p className="font-body font-light text-[13px] leading-[1.7] text-[#666] mb-4">{project.description}</p>
      </div>

      {/* Video / Demo area */}
      <div className="relative mx-6 mb-6 mt-2 aspect-video bg-[#161616] border border-[#333]/30 overflow-hidden">
        {project.videoSrc ? (
          <video src={project.videoSrc} controls className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            {/* Scanline */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="w-full h-8 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent anim-scan-v" />
            </div>
            {/* Play button */}
            <div className="w-10 h-10 border border-[#444]/60 flex items-center justify-center group-hover:border-white group-hover:bg-white/5 transition-all duration-300">
              <svg className="w-4 h-4 ml-0.5 text-[#666] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 18 20">
                <path d="M1 1L17 10L1 19V1Z" />
              </svg>
            </div>
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#444]">Demo Video</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 pb-5 flex items-center justify-between border-t border-[#333]/30 pt-4">
        <a href={project.githubHref} target="_blank" rel="noopener noreferrer" className="ghlink">
          ↗ GitHub
        </a>
        <div className="w-5 h-5 border border-[#333]/50 group-hover:border-white transition-colors duration-300 rotate-45 group-hover:bg-white/5" />
      </div>
    </div>
  );
}

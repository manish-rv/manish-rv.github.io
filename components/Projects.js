function ProjectCard({ project, delay }) {
  return (
    <div className="proj-card rev bg-skin-muted relative overflow-hidden group" style={{transitionDelay:`${delay}s`}}>
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-skin-ghost">{project.index}</span>
          <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-skin-ghost
            border border-skin-border/40 px-2 py-0.5">{project.stack}</span>
        </div>
        <h3 className="font-cond font-semibold text-[20px] tracking-wide uppercase text-skin-text mb-2">{project.title}</h3>
        <p className="font-body font-light text-[13px] leading-[1.7] text-skin-faint mb-4">{project.description}</p>
      </div>
      <div className="relative mx-6 mb-6 mt-2 aspect-video bg-skin-card border border-skin-border/30 overflow-hidden">
        {project.videoSrc ? (
          <video src={project.videoSrc} controls className="w-full h-full object-cover"/>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="w-full h-8 bg-gradient-to-b from-transparent
                via-skin-text/[0.015] to-transparent anim-scan-v"/>
            </div>
            <div className="w-10 h-10 border border-skin-ghost/60 flex items-center justify-center
              group-hover:border-skin-text group-hover:bg-skin-text/5 transition-all duration-300">
              <svg className="w-4 h-4 ml-0.5 text-skin-faint group-hover:text-skin-text transition-colors"
                fill="currentColor" viewBox="0 0 18 20"><path d="M1 1L17 10L1 19V1Z"/></svg>
            </div>
            <span className="font-mono text-[9px] tracking-widest uppercase text-skin-ghost">Demo Video</span>
          </div>
        )}
      </div>
      <div className="px-6 pb-5 flex items-center justify-between border-t border-skin-border/30 pt-4">
        <a href={project.githubHref} target="_blank" rel="noopener noreferrer" className="ghlink">↗ GitHub</a>
        <div className="w-5 h-5 border border-skin-border/50 group-hover:border-skin-text
          transition-colors duration-300 rotate-45 group-hover:bg-skin-text/5"/>
      </div>
    </div>
  );
}

function Projects() {
  const ref = useReveal();
  const { projects } = CONTENT;
  return (
    <section id="projects" className="relative z-10 bg-skin-base border-b-2 border-skin-border/60" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-14 py-16 md:py-24">
        <div className="rev flex items-end justify-between mb-12 md:mb-16 flex-wrap gap-6">
          <div>
            <SectionLabel number={projects.sectionNumber} label={projects.sectionLabel}/>
            <SectionHeading lines={projects.heading}/>
          </div>
          <a href={projects.githubAllHref} target="_blank" rel="noopener noreferrer"
            className="nav-link font-mono text-[20px] tracking-[0.14em] uppercase text-skin-faint
              hover:text-skin-text transition-all duration-200">
            View All on GitHub →
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-skin-border/20">
          {projects.items.length===0 ? (
            <div className="col-span-2 flex items-center justify-center py-24">
              <span className="font-mono text-[39px] tracking-[0.14em] uppercase text-skin-muted">
                Loading<span style={{animation:"dotPulse 1.4s infinite",animationDelay:"0s"}}>.</span><span style={{animation:"dotPulse 1.4s infinite",animationDelay:"0.2s"}}>.</span><span style={{animation:"dotPulse 1.4s infinite",animationDelay:"0.4s"}}>.</span>
              </span>
            </div>
          ) : projects.items.map((proj,i)=><ProjectCard key={proj.index} project={proj} delay={i*0.08}/>)}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { nav } from "../data/content";

export default function Nav() {
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      navRef.current.style.borderBottomColor =
        window.scrollY > 40 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.06)";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      id="nav"
      style={{ background: "rgba(8,8,8,0.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-5 border-b border-white/10"
    >
      {/* Logo */}
      <a href="#hero" className="font-display text-[22px] tracking-widest text-white hover:text-[#d8d4cc] transition-colors duration-300">
        {nav.name}<span className="text-[#666]">.</span>{nav.surname}
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        {nav.links.map((l) => (
          <a key={l.href} href={l.href}
            className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#888] hover:text-white transition-colors duration-200">
            {l.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href={nav.cta.href}
        className="hidden md:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase border border-[#333] text-[#888] hover:border-white hover:text-white px-5 py-2.5 transition-all duration-300"
      >
        {nav.cta.label}
      </a>
    </nav>
  );
}

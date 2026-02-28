function ThemeToggle() {
  const [light, setLight] = useState(() => {
    try { return localStorage.getItem('theme') === 'light'; } catch(e) { return false; }
  });

  const toggle = () => {
    const next = !light;
    setLight(next);
    try { localStorage.setItem('theme', next ? 'light' : 'dark'); } catch(e) {}
    if (next) {
      document.documentElement.dataset.theme = 'light';
    } else {
      delete document.documentElement.dataset.theme;
    }
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center border border-skin-border
        hover:border-skin-text transition-all duration-200 shrink-0 cursor-none">
      {light ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f5c542" stroke="#f5c542" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>

      )}
    </button>
  );
}

function MobileMenu({ open, onClose, nav }) {
  useEffect(() => {
    if (open) document.body.classList.add('menu-open');
    else document.body.classList.remove('menu-open');
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center
      transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      style={{ background: 'var(--bg-primary)' }}>
      <button onClick={onClose}
        className="absolute top-6 right-8 font-mono text-[10px] tracking-[0.2em] uppercase
          text-skin-sub hover:text-skin-text transition-colors flex items-center gap-2">
        <span className="text-[18px] leading-none">✕</span> Close
      </button>
      <nav className="flex flex-col items-center gap-6">
        {nav.links.map(l => (
          <a key={l.href} href={l.href} onClick={onClose}
            className="font-display text-[clamp(28px,8vw,48px)] tracking-widest text-skin-text
              hover:text-skin-sub transition-colors duration-200">
            {l.label}
          </a>
        ))}
        <a href={nav.cta.href} onClick={onClose}
          className="mt-4 inline-flex items-center gap-2 font-mono text-[10px]
            tracking-[0.14em] uppercase border border-skin-border text-skin-sub
            hover:border-skin-text hover:text-skin-text px-6 py-3 transition-all duration-200">
          {nav.cta.label}
        </a>
      </nav>
    </div>
  );
}

function Nav() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(() => document.documentElement.dataset.theme === 'light');
  useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsLight(document.documentElement.dataset.theme === 'light');
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);
  const { nav } = CONTENT;

  useEffect(()=>{
    const onScroll=()=>{
      if(!navRef.current) return;
      const isLight = document.documentElement.dataset.theme === 'light';
      const border = getComputedStyle(document.documentElement).getPropertyValue('--border-primary').trim();
      navRef.current.style.borderBottomColor = scrollY > 40 ? border : 'transparent';
    };
    addEventListener("scroll",onScroll);
    return ()=>removeEventListener("scroll",onScroll);
  },[]);

  return (
    <>
      <nav ref={navRef} id="nav"
        style={{ background:'var(--nav-bg)', backdropFilter:"blur(12px)", WebkitBackdropFilter:"blur(12px)" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
          px-6 md:px-14 py-4 md:py-5 border-b-2 border-skin-border/60">
        <a href="#" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}
          className="nav-logo flex items-center gap-3 font-display text-[18px] md:text-[22px] tracking-widest text-skin-text
            hover:text-[var(--hover-text)] transition-colors duration-300">
          <img src={isLight ? 'data/assets/logo.png' : 'data/assets/logo_black.png'} alt={nav.name}
            className="w-11 h-11 object-contain shrink-0 rounded-md"/>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {nav.links.map(l=>(
            <a key={l.href} href={l.href}
              className="nav-link font-mono text-[13px] tracking-[0.16em] uppercase text-skin-text
                hover:text-skin-text/70 transition-colors duration-200">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle/>
          <a href={nav.cta.href}
            className="hidden md:inline-flex items-center gap-2 font-mono text-[13px]
              tracking-[0.14em] uppercase border border-skin-border text-skin-sub
              hover:border-skin-text hover:text-skin-text px-5 py-2.5 transition-all duration-300">
            {nav.cta.label}
          </a>
          <button onClick={() => setMenuOpen(true)} aria-label="Open menu"
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 text-skin-sub
              hover:text-skin-text transition-colors">
            <span className="block w-5 h-px bg-current"/>
            <span className="block w-5 h-px bg-current"/>
            <span className="block w-3 h-px bg-current"/>
          </button>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} nav={nav}/>
    </>
  );
}

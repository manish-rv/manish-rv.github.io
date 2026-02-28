function Cursor() {
  if (typeof CONFIG !== 'undefined' && CONFIG.features && !CONFIG.features.showCursor) return null;
  const crossRef = useRef(null), dotRef = useRef(null);
  useEffect(() => {
    let mx=0,my=0;
    const onMove = e => { mx=e.clientX; my=e.clientY; };
    document.addEventListener("mousemove", onMove);
    let raf;
    const tick = () => {
      if(crossRef.current){ crossRef.current.style.left=mx+"px"; crossRef.current.style.top=my+"px"; }
      if(dotRef.current)  { dotRef.current.style.left=mx+"px";   dotRef.current.style.top=my+"px"; }
      raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
    return () => { document.removeEventListener("mousemove",onMove); cancelAnimationFrame(raf); };
  },[]);
  return (<>
    <div ref={crossRef} className="cursor-cross"><div className="cursor-cross-inner"/></div>
    <div ref={dotRef}  className="cursor-dot"/>
  </>);
}

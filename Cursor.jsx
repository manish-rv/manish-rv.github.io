import { useEffect, useRef } from "react";

export default function Cursor() {
  const crossRef = useRef(null);
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);

    let raf;
    const tick = () => {
      if (crossRef.current) { crossRef.current.style.left = mx + "px"; crossRef.current.style.top  = my + "px"; }
      if (dotRef.current)   { dotRef.current.style.left   = mx + "px"; dotRef.current.style.top    = my + "px"; }
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (ringRef.current)  { ringRef.current.style.left  = rx + "px"; ringRef.current.style.top   = ry + "px"; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={crossRef} className="cursor-cross">
        <div className="cursor-cross-inner" />
      </div>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

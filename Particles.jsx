import { useEffect, useRef } from "react";

export default function Particles({ count = 40 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv  = canvasRef.current;
    const ctx = cv.getContext("2d");
    let W, H, pts = [], raf;

    const resize = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;
    };

    const mkPt = () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.18,
      dy: (Math.random() - 0.5) * 0.18,
      a:  Math.random() * 0.25 + 0.05,
    });

    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < count; i++) pts.push(mkPt());

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle  = "#fff";
        ctx.globalAlpha = p.a;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          Object.assign(p, mkPt());
          p.x = Math.random() * W;
          p.y = Math.random() * H;
        }
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [count]);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}

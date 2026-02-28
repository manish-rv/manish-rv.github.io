function Particles({ count=40 }) {
  const cvRef = useRef(null);
  useEffect(() => {
    const cv=cvRef.current, ctx=cv.getContext("2d");
    let W,H,pts=[],raf;
    const resize=()=>{ W=cv.width=innerWidth; H=cv.height=innerHeight; };
    const mk=()=>({ x:Math.random()*W, y:Math.random()*H, r:Math.random()*1.2+.3,
      dx:(Math.random()-.5)*.18, dy:(Math.random()-.5)*.18, a:Math.random()*.25+.05 });
    resize(); addEventListener("resize",resize);
    for(let i=0;i<count;i++) pts.push(mk());
    const draw=()=>{
      ctx.clearRect(0,0,W,H);
      const color = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim() || '#fff';
      pts.forEach(p=>{
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=color; ctx.globalAlpha=p.a; ctx.fill();
        p.x+=p.dx; p.y+=p.dy;
        if(p.x<0||p.x>W||p.y<0||p.y>H){ Object.assign(p,mk()); p.x=Math.random()*W; p.y=Math.random()*H; }
      });
      ctx.globalAlpha=1; raf=requestAnimationFrame(draw);
    };
    raf=requestAnimationFrame(draw);
    return ()=>{ removeEventListener("resize",resize); cancelAnimationFrame(raf); };
  },[count]);
  return <canvas ref={cvRef} className="particles-canvas"/>;
}

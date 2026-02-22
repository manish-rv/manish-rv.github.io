import { useEffect, useRef } from "react";

/**
 * useReveal — attaches an IntersectionObserver to a container ref.
 * All children with class "rev", "rev-l", or "rev-r" will receive
 * the "on" class when they scroll into view, triggering CSS transitions
 * defined in globals.css.
 *
 * @param {number} threshold - visibility ratio to trigger (default 0.08)
 * @returns React ref to attach to the section wrapper
 */
export function useReveal(threshold = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }),
      { threshold }
    );

    const el = ref.current;
    if (!el) return;

    el.querySelectorAll(".rev, .rev-l, .rev-r").forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * useTimelineFill — triggers the timeline line-fill animation
 * when the section scrolls into view.
 *
 * @returns [sectionRef, fillRef]
 */
export function useTimelineFill(threshold = 0.04) {
  const sectionRef = useRef(null);
  const fillRef    = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting && fillRef.current) fillRef.current.classList.add("on"); }),
      { threshold }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [sectionRef, fillRef];
}

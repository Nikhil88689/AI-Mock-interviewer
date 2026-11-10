"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

/** Pin a section and crossfade children marked with data-story-panel. */
export function useScrollStory<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const reducedMotion = useReducedMotionPreference();

  useGSAP(() => {
    const container = containerRef.current;
    if (!container || reducedMotion || window.matchMedia("(max-width: 760px)").matches) return;

    const panels = gsap.utils.toArray<HTMLElement>("[data-story-panel]", container);
    if (panels.length < 2) return;

    gsap.set(panels.slice(1), { autoAlpha: 0, yPercent: 10 });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${window.innerHeight * (panels.length - 1)}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    panels.slice(1).forEach((panel, index) => {
      const previous = panels[index];
      const position = index;
      timeline.to(previous, { autoAlpha: 0, yPercent: -8, duration: 1 }, position);
      timeline.to(panel, { autoAlpha: 1, yPercent: 0, duration: 1 }, position);
    });

    return () => timeline.scrollTrigger?.kill();
  }, { scope: containerRef, dependencies: [reducedMotion] });

  return containerRef;
}

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function ServicesAnimations() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray<HTMLElement>(".service").forEach((el, id) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0.3,
        },
        x: id % 2 === 0 ? -100 : 100,
        opacity: 0,
        ease: "none",
      });
    });
  }, []);

  return null;
}



"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function WhyUsAnimations() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".point", {
      x: -100,
      duration: 1,
      ease: "back.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".point",
        start: "top bottom",
      },
    });

    gsap.from(".bigPoint", {
      x: 100,
      duration: 1,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".bigPoint",
        start: "top bottom",
      },
    });

    gsap.fromTo(
      ".whyUsBg",
      {
        y: -200,
      },
      {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: ".whyUs",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      }
    );
  }, []);

  return null;
}



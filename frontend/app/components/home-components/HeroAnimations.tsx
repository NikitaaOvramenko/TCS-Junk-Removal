"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function HeroAnimations() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".heroHeader", {
      y: "-20%",
      opacity: 0,
      duration: 1,
      ease: "back.out",
    });

    gsap.to(".heroBg", {
      scrollTrigger: {
        trigger: ".heroBg",
        start: "top top",
        end: "bottom top ",
        scrub: true,
      },
      y: 300,
    });
  }, []);

  return null;
}

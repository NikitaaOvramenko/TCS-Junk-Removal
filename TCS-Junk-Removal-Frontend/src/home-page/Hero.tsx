import Section from "../components/Section";
import Truck from "../assets/truck.svg?react";
import Trailer from "../assets/trailer2.svg?react";
import GarbageTower from "../assets/images/garbage-tower.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
  const truckRef = useRef<SVGSVGElement>(null);
  const trailerRef = useRef<SVGSVGElement>(null);
  const tl = gsap.timeline({});

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      { isMobile: "(max-width: 500px)", isDesktop: "(min-width: 501px" },
      (context) => {
        const { isMobile, isDesktop } = context.conditions || {};
        gsap.set(truckRef.current, {
          position: "absolute",
          top: "40%",
          left: "-10%",
          width: isMobile ? 200 : 400,
          height: "auto",
        });

        gsap.set(trailerRef.current, {
          position: "absolute",
          top: isDesktop ? "14%" : "27%",
          left: isDesktop ? "15%" : "25%",
          width: isMobile ? 200 : 400,

          height: isDesktop ? 350 : 180,
        });

        tl.to(
          truckRef.current,
          { x: isDesktop ? 250 : 50, duration: 2, ease: "power1.inOut" },
          0
        )
          .to(
            trailerRef.current,
            { x: isDesktop ? 250 : 50, duration: 2, ease: "power1.inOut" },
            0
          )
          .to(
            "#Wheel",
            {
              transformOrigin: "50% 50%",
              rotation: 360,
              duration: 2,
              ease: "power1.inOut",
            },
            0
          );

        tl.to("#trunk", {
          duration: 3,
          rotation: 45,
          x: 50,
          fill: "black",
          transformOrigin: "50% 50%",
        });
      }
    );
  }, []);

  return (
    <Section className="flex flex-col gap-3 bg-black bg-gradient-to-r from-[#38AC43] from-30% to-[#2D6B33] to-80%">
      {/* PART 1 — Title */}
      <div className="part1 flex w-full h-3/12 justify-center items-end px-4 text-center">
        <p
          className="
            font-bold 
            text-white 
            leading-tight
            text-[36px]
            sm:text-[50px]
            md:text-[65px]
            lg:text-[80px]
          "
        >
          Junk Removal In <span className="text-[#8CF152]">Toronto & GTA</span>
        </p>
      </div>

      <div className="part2 relative w-full h-6/12 flex items-center overflow-hidden">
        <Truck ref={truckRef} />
        <Trailer ref={trailerRef} />

        <img
          src={GarbageTower}
          className="absolute w-auto h-full -right-[60%] rotate-y-180 lg:rotate-y-0 lg:right-0 lg:scale-150"
        />
      </div>

      {/* PART 3 — Buttons */}
      <div
        className="
          part3 
          flex 
          flex-col sm:flex-row
          items-center 
          justify-center 
          gap-5 
          h-3/12 
          w-full 
          pb-8
        "
      >
        <button
          className="
            bg-[#16C834]
            text-white 
            font-bold 
            rounded-xl  
            text-xl sm:text-2xl
            px-10 sm:px-12 
            py-4 sm:py-5 
            w-[80%] sm:w-auto
            shadow-[0_6px_0_#0C8A23]
            hover:translate-y-[2px] 
            hover:shadow-[0_4px_0_#0C8A23]
            transition-all
          "
        >
          Book Removal
        </button>

        <button
          className="
            text-white/90
            font-bold 
            rounded-xl
            border border-white/60
            bg-white/10 backdrop-blur-md
            text-xl sm:text-2xl
            px-10 sm:px-12 
            py-4 sm:py-5
            w-[80%] sm:w-auto
            shadow-[0_6px_0_rgba(0,0,0,0.15)]
            hover:translate-y-[2px] 
            hover:shadow-[0_4px_0_rgba(0,0,0,0.15)]
            transition-all
          "
        >
          View Services
        </button>
      </div>
    </Section>
  );
}

import Section from "../components/Section";
import HeroBackground from "../assets/images/Home-Images/hero-bg.png";
import TruckTrailer2 from "../assets/images/Home-Images/truck_trailer.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import BookButton from "../components/BookButton";
import { useLocation } from "../context/LocationContext";

export default function Hero() {
  const headerRef = useRef<HTMLParagraphElement>(null);
  const { location } = useLocation();

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: "-20%",
      opacity: "0",
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

  return (
    <Section className=" Hero relative flex flex-col  gap-4  bg-linear-to-r from-[#38AC43] from-30% to-[#2D6B33] to-80% overflow-hidden">
      {/* Background-stuff */}
      <img
        src={HeroBackground}
        className=" heroBg absolute object-cover pointer-events-none z-0 opacity-60 w-full h-full "
        alt=""
      />

      <div className="filter absolute w-full h-full bg-black opacity-70"></div>

      {/* Content-stuff */}

      <div className="content relative z-20 flex flex-col gap-10 w-full h-full">
        <div className="part1 flex w-full h-3/12 justify-center items-end px-4 text-center">
          <p
            className="
            font-extrabold 
            text-white 
            leading-tight
            text-[clamp(2rem,6vw,4rem)]
            font-LemonMilk
            
          "
            ref={headerRef}
          >
            Junk Removal In{" "}
            <span className="bg-gradient-to-r from-[#C5FFEC] to-[#00FF00] bg-clip-text text-transparent">
              {location?.name}
            </span>
          </p>
        </div>

        <div className="part2 relative w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-6 lg:px-16">
          {/* LEFT — TEXT */}
          <div className="left w-full lg:w-1/2 text-white">
            <p className="  text-[clamp(0.85rem,1.5vw,2rem)]  leading-[180%]">
              We make getting rid of unwanted items fast and stress-free. From
              old furniture to household clutter, our team handles all the
              lifting and disposal for you. Serving Toronto & the GTA with
              same-day service and fair, upfront pricing. Clear your space the
              easy way — book your removal today.
            </p>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="right w-full lg:w-1/2 flex items-center justify-center">
            {/* <TruckTrailer className="w-[clamp(20rem,10vw,1000px)] h-[300px]" /> */}
            <img
              src={TruckTrailer2}
              className="w-[clamp(20rem,50vw,40rem)] h-auto object-contain"
              alt=""
            />
          </div>
        </div>

        {/* PART 3 — Buttons */}
        <div
          className="
          part3 
          flex 
          flex-col sm:flex-row
          items-center 
          justify-center 
          gap-12
          h-3/12 
          w-full 
          
        "
        >
          {/* <button
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
          </button> */}

          <BookButton
            className="
            text-center
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
          ></BookButton>

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
      </div>
    </Section>
  );
}

import Section from "../general/Section";
import Image from "next/image";
import BookButton from "../general/BookButton";
import HeroAnimations from "./HeroAnimations";

type Props = {
  locationName?: string;
};

export default function Hero({ locationName }: Props) {
  return (
    <Section className=" Hero relative flex flex-col  gap-4  bg-linear-to-r from-[#38AC43] from-30% to-[#2D6B33] to-80% overflow-hidden">
      <HeroAnimations />
      {/* Background-stuff */}
      <Image
        src="/home-images/hero-bg.png"
        className=" heroBg absolute object-cover pointer-events-none z-0 opacity-60 w-full h-full "
        alt=""
        fill
        priority
        sizes="100vw"
      />

      <div className="filter absolute w-full h-full bg-black opacity-70"></div>

      <div className="content relative z-20 flex flex-col gap-10 w-full h-full">
        <div className="part1 flex w-full h-3/12 justify-center items-end px-4 text-center">
          <h1
            className="
            heroHeader
            font-extrabold 
            text-white 
            leading-tight
            text-[clamp(2rem,6vw,4rem)]
            font-LemonMilk
            
          "
          >
            Junk Removal In{" "}
            <span className="bg-gradient-to-r from-[#C5FFEC] to-[#00FF00] bg-clip-text text-transparent">
              {locationName}
            </span>
          </h1>
        </div>

        <div className="part2 relative w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-6 lg:px-16">
          {/* LEFT — TEXT */}
          <div className="left w-full lg:w-1/2 text-white">
            <p className="  text-[clamp(0.85rem,1.5vw,2rem)]  leading-[180%]">
              We make getting rid of unwanted items fast and stress-free. From
              old furniture to household clutter, our team handles all the
              lifting and disposal for you. Serving <span>{locationName}</span>{" "}
              with same-day service and fair, upfront pricing. Clear your space
              the easy way — book your removal today.
            </p>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="right w-full lg:w-1/2 flex items-center justify-center">
            {/* <TruckTrailer className="w-[clamp(20rem,10vw,1000px)] h-[300px]" /> */}
            <Image
              src="/home-images/truck_trailer.png"
              className="w-[clamp(20rem,50vw,40rem)] h-auto object-contain"
              alt=""
              width={1200}
              height={675}
              sizes="(max-width: 1024px) 90vw, 50vw"
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
            Call Us
          </button>
        </div>
      </div>
    </Section>
  );
}

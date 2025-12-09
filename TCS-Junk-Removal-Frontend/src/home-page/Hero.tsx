import Section from "../components/Section";
import Truck from "../assets/truck.svg?react";
import Trailer from "../assets/trailer2.svg?react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
  const truckRef = useRef<HTMLOrSVGElement>(null);
  const trailerRef = useRef<HTMLOrSVGElement>(null);

  useGSAP(() => {
    gsap.to(truckRef, {});
  }, []);

  return (
    <Section className=" flex flex-col gap-3 bg-black bg-gradient-to-r from-[#38AC43] from-30% to-[#2D6B33] to-80%">
      <div className="part1 flex w-full h-3/12 justify-center items-end">
        <p className="text-[80px] text-white font-bold">
          Junk Removal In <span className="text-[#8CF152]">Toronto & GTA</span>
        </p>
      </div>
      <div className="part2 relative w-full h-6/12">
        <Truck
          ref={truckRef}
          className="absolute top-[30%] left-0 w-[400px] h-[180px]"
        />
        <Trailer
          ref={trailerRef}
          className="absolute top-[30%] left-[35%] w-1/3 h-auto"
        />
      </div>

      <div className="part3 h-3/12 w-full"></div>
    </Section>
  );
}

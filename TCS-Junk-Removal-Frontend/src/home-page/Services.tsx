import Section from "../components/Section";
import FurnitureRemovalIcon from "../assets/images/Home-Images/furniture-removal.svg?react";
import PropertyCleanoutsIcon from "../assets/images/Home-Images/property-cleanouts.svg?react";
import ApplianceRemovalIcon from "../assets/images/Home-Images/appliance-removal.svg?react";
import WasteRemovalIcon from "../assets/images/Home-Images/waste-removal.svg?react";
import FurnitureRemovalBg from "../assets/images/Home-Images/furniture-removal-bg.png";
import PropertyCleanoutBg from "../assets/images/Home-Images/property-cleanouts-bg.png";
import ApplianceRemovalBg from "../assets/images/Home-Images/appliance-removal-bg.png";
import WasteRemovalBg from "../assets/images/Home-Images/waste-removal-bg.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Services() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
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
  });

  const services = [
    {
      name: "Furniture Removal",
      icon: FurnitureRemovalIcon,
      bg: FurnitureRemovalBg,
    },
    {
      name: "Property Cleanouts",
      icon: PropertyCleanoutsIcon,
      bg: PropertyCleanoutBg,
    },
    {
      name: "Appliance Removal",
      icon: ApplianceRemovalIcon,
      bg: ApplianceRemovalBg,
    },
    { name: "Waste Removal", icon: WasteRemovalIcon, bg: WasteRemovalBg },
  ];

  return (
    <Section className="  services flex flex-col justify-center gap-8 overflow-x-clip ">
      <div className="part1 flex justify-center items-center h-[10%]">
        <h1 className="font-LemonMilk text-[clamp(1.2rem,6vw,64px)] bg-gradient-to-r from-[#14D10B] from-18 to-[#51D488] to-45% bg-clip-text text-transparent">
          Our Services
        </h1>
      </div>
      <div className="part2 flex flex-col justify-center h-[85%] w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-full">
          {services.map((service, id) => (
            <div
              key={id}
              className={`service h-full flex ${
                id % 2 === 0
                  ? "justify-center md:justify-end"
                  : "justify-center md:justify-start"
              }`}
            >
              <div className="box w-[80%] sm:w-[80%] md:w-[70%] h-auto drop-shadow-2xl flex justify-center items-center relative rounded-xl bg-[#14BD24] overflow-hidden">
                <img
                  className="absolute inset-0 opacity-90 pointer-events-none object-cover w-full h-full"
                  src={service.bg}
                  alt=""
                />
                <div className="content flex flex-col items-center z-10">
                  <service.icon className="h-[clamp(3rem,6vw,100px)] w-auto mb-2" />
                  <p className="text-white font-bold text-center">
                    {service.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

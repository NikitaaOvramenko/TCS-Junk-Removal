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
          end: "bottom 70%",
          scrub: true,
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
    <Section className=" services flex flex-col gap-8 justify-evenly items-center mt-4  overflow-x-clip ">
      <h1 className="font-LemonMilk text-[clamp(1.2rem,6vw,64px)] bg-gradient-to-r from-[#14D10B] from-18 to-[#51D488] to-45% bg-clip-text text-transparent">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ">
        {services.map((service, id) => (
          <div
            id={`${id}`}
            className={` service ${id} flex items-end justify-center`}
          >
            <div
              className="box drop-shadow-2xl flex justify-center items-center relative w-[90vw] max-w-[400px]
 h-[200px] lg:w-[548px] lg:h-[271px] rounded-xl bg-[#14BD24]"
            >
              <img
                className="absolute opacity-90  pointer-events-none object-cover rounded-xl w-full h-full"
                src={service.bg}
                alt=""
              />

              <div className="content flex flex-col items-center ">
                <service.icon className="z-20 h-[clamp(3rem,6vw,100px)] w-auto" />

                <p className="text-white font-bold  z-20">{service.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

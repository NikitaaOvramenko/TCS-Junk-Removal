import Section from "../general/Section";
import { services } from "../../data/ServiceData";
import Image from "next/image";
import ServicesAnimations from "./ServicesAnimations";

export default function Services() {
  return (
    <Section className="  services flex flex-col justify-center gap-8 overflow-x-clip ">
      <ServicesAnimations />
      <div className="part1 flex justify-center items-center h-[10%]">
        <h1 className="font-LemonMilk text-[clamp(1.2rem,6vw,64px)] bg-gradient-to-r from-[#14D10B] from-18 to-[#51D488] to-45% bg-clip-text text-transparent">
          Our Services
        </h1>
      </div>
      <div className="part2 flex flex-col justify-center h-[85%] w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
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
                <Image
                  className="absolute inset-0 opacity-90 pointer-events-none object-cover"
                  src={service.bgSrc}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 80vw, 35vw"
                />
                <div className="content flex flex-col items-center z-10">
                  <Image
                    alt="Icon Image of Service"
                    src={service.iconSrc}
                    className="h-[clamp(3rem,6vw,100px)] w-auto mb-2"
                    width={120}
                    height={120}
                    sizes="120px"
                  />
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

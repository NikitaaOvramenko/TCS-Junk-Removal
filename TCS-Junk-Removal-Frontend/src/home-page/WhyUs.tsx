import Section from "../components/Section";
import TruckTrailer from "../assets/images/Home-Images/truck_trailer.png";

export default function WhyUs() {
  const points = [
    {
      name: "Fast & Reliable",
      text: "Same-day and next-day service available. We show up on time and get the job done right the first time.",
    },
    {
      name: "Upfront Pricing",
      text: "You’ll receive a clear, honest quote before we start. No hidden fees, no last-minute surprises.",
    },
    {
      name: "Professional & Insured",
      text: "Fully insured, trained team that handles your space with care and respect from start to finish.",
    },
  ];

  return (
    <Section className="whyUs bg-black flex flex-col justify-center gap-8 overflow-x-clip px-4 md:px-8">
      <div className="part1 flex justify-center items-center h-[10%]">
        <h1 className="font-LemonMilk text-[clamp(1.2rem,6vw,64px)] bg-gradient-to-r from-[#14D10B] from-18 to-[#51D488] to-45% bg-clip-text text-transparent text-center">
          Why Us?
        </h1>
      </div>

      <div className="part2 flex flex-col justify-center h-[85%] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 h-full w-full items-center">
          {/* LEFT — POINTS */}
          <div className="flex flex-col gap-6 items-center lg:items-end justify-center">
            {points.map((point, i) => (
              <div
                key={i}
                className="bg-white w-[92%] sm:w-[80%] lg:w-[85%] rounded-2xl p-6 sm:p-7 shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex flex-col gap-3"
              >
                <h3 className="text-[clamp(1rem,1.6vw,1.25rem)] font-semibold text-black">
                  {point.name}
                </h3>
                <p className="text-[clamp(0.9rem,1.2vw,1rem)] text-gray-700 leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT — VISUAL / CTA */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[92%] sm:w-[80%] lg:w-[85%] h-[clamp(18rem,28vw,28rem)] rounded-2xl overflow-hidden bg-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex items-end">
              <img
                src={TruckTrailer}
                alt="TCS Junk Removal truck"
                className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/55" />

              <div className="relative z-10 p-6 sm:p-7 text-white flex flex-col gap-3">
                <p className="font-LemonMilk text-[clamp(1.1rem,2.2vw,1.8rem)] leading-tight">
                  Clear your space today
                </p>
                <p className="text-white/90 text-[clamp(0.9rem,1.2vw,1rem)] leading-relaxed max-w-[40ch]">
                  Friendly, insured crew. Fast pickup. Honest pricing. We handle
                  the heavy lifting so you don’t have to.
                </p>

                <button className="mt-2 w-fit bg-[#16C834] text-white font-bold rounded-xl px-6 py-3 shadow-[0_6px_0_#0C8A23] hover:translate-y-[2px] hover:shadow-[0_4px_0_#0C8A23] transition-all">
                  Book Removal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

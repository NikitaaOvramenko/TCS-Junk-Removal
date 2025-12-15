import Section from "../components/Section";

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
    <Section className="bg-black flex flex-col items-center justify-center gap-12">
      {/* Title */}
      <h1 className="font-LemonMilk text-[clamp(1.5rem,6vw,4rem)] bg-gradient-to-r from-[#14D10B] to-[#51D488] bg-clip-text text-transparent">
        Why Us?
      </h1>

      {/* GRID LAYOUT */}
      <div className="w-full grid gap-12 grid-cols-1 lg:grid-cols-2">
        {/* LEFT COLUMN */}
        <div className="grid grid-rows-3 gap-8 justify-items-center lg:justify-items-end">
          {points.map((point, i) => (
            <div
              key={i}
              className="bg-white w-[80%]  rounded-2xl p-6 flex flex-col gap-3"
            >
              <h3 className="text-lg font-semibold text-black">{point.name}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT BIG CARD */}
        <div className="bg-white rounded-2xl w-[80%] h-full flex items-center justify-center">
          <p className="text-black/60">Big content block</p>
        </div>
      </div>
    </Section>
  );
}

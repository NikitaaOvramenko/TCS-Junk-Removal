import { useId, useState } from "react";
import Section from "../components/Section";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "pricing",
    question: "How much does junk removal cost?",
    answer:
      "Pricing depends on volume and item type. We provide an upfront quote before we start—no hidden fees.",
  },
  {
    id: "items",
    question: "What items do you take?",
    answer:
      "We remove most household and commercial junk including furniture, appliances, bags of clutter, and more. If you’re unsure about an item, ask and we’ll confirm.",
  },
  {
    id: "timing",
    question: "Do you offer same-day service?",
    answer:
      "Yes—same-day and next-day service is often available in Toronto & the GTA depending on schedule.",
  },
  {
    id: "prep",
    question: "Do I need to move items outside first?",
    answer:
      "No. Our team handles the lifting and loading. Just point to what you want removed and we’ll take it from there.",
  },
];

export default function FAQ() {
  const reactId = useId();
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <Section className="faq relative bg-white overflow-hidden px-4 md:px-8 py-10 md:py-14 h-auto min-h-dvh">
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-8">
        <div className="flex justify-center items-center">
          <h1 className="font-LemonMilk text-[clamp(1.2rem,6vw,64px)] bg-gradient-to-r from-[#14D10B] from-18 to-[#51D488] to-45% bg-clip-text text-transparent text-center">
            FAQ
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const buttonId = `${reactId}-faq-btn-${item.id}`;
            const panelId = `${reactId}-faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-black/15 bg-black/5 backdrop-blur-sm overflow-hidden"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenId((prev) => (prev === item.id ? null : item.id))
                  }
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="text-black font-semibold text-[clamp(1rem,1.5vw,1.25rem)]">
                    {item.question}
                  </span>

                  <span
                    className={`shrink-0 text-black/80 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-5 sm:px-6 pb-6 text-black/90 text-[clamp(0.95rem,1.2vw,1.05rem)] leading-relaxed transition-all duration-300 ${
                        isOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-1"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

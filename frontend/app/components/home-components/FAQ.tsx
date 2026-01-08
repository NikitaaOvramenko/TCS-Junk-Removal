"use client";

import Section from "../general/Section";
import FaqItemButton from "../general/FaqItemButton";
import { useState } from "react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type Props = {
  locationName?: string;
};

export default function FAQ({ locationName }: Props) {
  const [openId, SetOpenId] = useState<string | null>("pricing");
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
        "We remove most household and commercial junk including furniture, appliances, bags of clutter, and more.",
    },
    {
      id: "timing",
      question: "Do you offer same-day service?",
      answer: `Yes—same-day and next-day service is often available in ${locationName}.`,
    },
    {
      id: "prep",
      question: "Do I need to move items outside first?",
      answer:
        "No. Our team handles the lifting and loading. Just point to what you want removed.",
    },
  ];

  return (
    <Section className="faq relative bg-white overflow-hidden px-4 md:px-8 py-10 md:py-14 min-h-dvh">
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-8">
        <h1 className="font-LemonMilk text-[clamp(1.2rem,6vw,64px)] bg-gradient-to-r from-[#14D10B] to-[#51D488] bg-clip-text text-transparent text-center">
          FAQ
        </h1>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => (
            <FaqItemButton
              key={item.id}
              {...item}
              isOpen={openId == item.id}
              onToggle={() => {
                SetOpenId((prev) => (prev === item.id ? null : item.id));
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

"use client";

import { useId } from "react";

type Props = {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItemButton({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: Props) {
  const reactId = useId();

  const buttonId = `${reactId}-faq-btn-${id}`;
  const panelId = `${reactId}-faq-panel-${id}`;

  return (
    <div className="rounded-2xl border w-[80%] border-black/15 bg-black/5 backdrop-blur-sm overflow-hidden">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4"
      >
        <span className="text-black font-semibold text-[clamp(1rem,1.5vw,1.25rem)]">
          {question}
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
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
            }`}
          >
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

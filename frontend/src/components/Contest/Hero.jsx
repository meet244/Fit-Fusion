import React from "react";
import { FlipWords } from "../ui/flip-words";

export default function Hero() {
  const words = ["Stronger", "Faster", "Healthier", "Better"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Be
        <FlipWords words={words} />
        than yesterday with
        <br />
        <span className="text-6xl font-semibold text-neutral-900 dark:text-neutral-100">
          FitFussion
        </span>
      </div>
    </div>
  );
}

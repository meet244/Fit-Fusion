"use client";
import React, { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Mohit Nippanikar...",
  },
  {
    text: "Meet Patel...",
  },
  {
    text: "Harshil Damania...",
  },
  {
    text: "Pranay Mistry...",
  },
];

export default function BigLoader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-[vh] flex items-center justify-center">
      <Loader loadingStates={loadingStates} loading={loading} duration={700} />
      {/* <button
        onClick={() => setLoading(true)}
        className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}>
        Click to load
      </button> */}
    </div>
  );
}

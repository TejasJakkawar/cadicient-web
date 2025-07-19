import React, { useEffect, useState } from "react";
import "./heading.css";

type headingProps = {
  heading: string;
};

export const Heading = ({ heading }: headingProps) => {
  const [visibleLetters, setVisibleLetters] = useState<string>("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentLength = visibleLetters.length;

    if (currentLength < heading.length) {
      timeout = setTimeout(() => {
        setVisibleLetters(heading.slice(0, currentLength + 1));
      }, 100); // adjust delay for smoothness
    } else {
      timeout = setTimeout(() => {
        setVisibleLetters("");
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [visibleLetters, heading]);

  return (
    <div className="flex w-full justify-center">
      <div className="text-2xl text-primary-accent-color tracking-[3px] relative text-left h-[20px] w-fit font-bold">
        {/* Static placeholder to fix width */}
        <div className="opacity-0 whitespace-nowrap pointer-events-none">
          {heading}
        </div>

        {/* Animated layer over it */}
        <div className="absolute top-0 left-0 whitespace-nowrap tracking-[2px]">
          {visibleLetters.split("").map((char, i) => (
            <span
              key={i}
              className="animated-letter"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

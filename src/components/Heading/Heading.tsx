import React, { useEffect, useRef, useState } from "react";
import "./heading.css";

type headingProps = {
  heading: string;
};

const Heading = ({ heading }: headingProps) => {
  const [visibleLetters, setVisibleLetters] = useState<string>("");
  const [animationKey, setAnimationKey] = useState<number>(0);
  const headingRef = useRef<HTMLDivElement>(null);

  // Watch when heading comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Fully reset and restart the animation
          setVisibleLetters("");
          setAnimationKey((prev) => prev + 1); // force remount
          setTimeout(() => {
            setVisibleLetters(heading.slice(0, 1));
          }, 50);
        }
      },
      { threshold: 0.5 }
    );

    const node = headingRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [heading]);

  // Type each letter
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (visibleLetters.length < heading.length) {
      timeout = setTimeout(() => {
        setVisibleLetters(heading.slice(0, visibleLetters.length + 1));
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [visibleLetters, heading]);

  return (
    <div ref={headingRef} className="flex w-full justify-center">
      <div className="text-2xl text-primary-accent-color tracking-[3px] relative text-left h-[20px] w-fit font-bold">
        {/* Invisible full-length spacer to preserve layout */}
        <div className="opacity-0 whitespace-nowrap pointer-events-none">
          {heading}
        </div>

        {/* Re-rendered animated text block */}
        <div
          key={animationKey}
          className="absolute top-0 left-0 whitespace-nowrap tracking-[2px]"
        >
          {visibleLetters.split("").map((char, i) => (
            <span
              key={i}
              className="animated-letter"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heading;

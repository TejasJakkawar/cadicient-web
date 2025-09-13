import { useEffect, useRef, useState } from "react";

const useCountUpOnView = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);

          const step = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              frame = requestAnimationFrame(step);
            } else {
              setCount(end);
              cancelAnimationFrame(frame);
            }
          };

          // Start animation every time it enters view
          setCount(0); // Reset to 0 before starting
          frame = requestAnimationFrame(step);
        } else {
          // Reset count when out of view if you want (optional)
          setCount(0);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return { count, ref };
};

export default useCountUpOnView;

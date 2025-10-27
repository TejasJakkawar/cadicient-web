import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const transforms = {
    up: useTransform(scrollYProgress, [0, 1], [0, -50 * speed]),
    down: useTransform(scrollYProgress, [0, 1], [0, 50 * speed]),
    left: useTransform(scrollYProgress, [0, 1], [0, -50 * speed]),
    right: useTransform(scrollYProgress, [0, 1], [0, 50 * speed])
  };

  const getTransformStyle = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: transforms[direction] };
      case 'left':
      case 'right':
        return { x: transforms[direction] };
      default:
        return { y: transforms.up };
    }
  };

  return (
    <motion.div
      ref={ref}
      style={getTransformStyle()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
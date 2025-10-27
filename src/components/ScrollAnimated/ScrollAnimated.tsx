import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export type AnimationType = 
  | 'fadeIn'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scaleIn'
  | 'rotateIn'
  | 'bounceIn'
  | 'flipIn'
  | 'zoomIn'
  | 'cardFlip'
  | 'typewriter';

interface ScrollAnimatedProps {
  children: React.ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  distance?: number;
  triggerOnce?: boolean;
}

const animationVariants: Record<AnimationType, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0 }
  },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  },
  flipIn: {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  },
  cardFlip: {
    hidden: { opacity: 0, rotateX: -90, transformPerspective: 1000 },
    visible: { opacity: 1, rotateX: 0, transformPerspective: 1000 }
  },
  typewriter: {
    hidden: { width: 0 },
    visible: { width: "auto" }
  }
};

const ScrollAnimated: React.FC<ScrollAnimatedProps> = ({
  children,
  animation = 'fadeIn',
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className = '',
  distance = 50,
  triggerOnce = true
}) => {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    delay: delay * 1000, 
    triggerOnce 
  });

  // Customize animation based on distance prop
  const customVariants = { ...animationVariants[animation] };
  if (animation === 'slideUp' && customVariants.hidden) {
    customVariants.hidden = { ...customVariants.hidden, y: distance };
  } else if (animation === 'slideDown' && customVariants.hidden) {
    customVariants.hidden = { ...customVariants.hidden, y: -distance };
  } else if (animation === 'slideLeft' && customVariants.hidden) {
    customVariants.hidden = { ...customVariants.hidden, x: distance };
  } else if (animation === 'slideRight' && customVariants.hidden) {
    customVariants.hidden = { ...customVariants.hidden, x: -distance };
  }

  return (
    <motion.div
      ref={ref as any}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={customVariants}
      transition={{ duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimated;
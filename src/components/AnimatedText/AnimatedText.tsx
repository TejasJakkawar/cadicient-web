import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationType?: 'typewriter' | 'wordByWord' | 'letterByLetter' | 'slideUp';
  speed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  animationType = 'wordByWord',
  speed = 50
}) => {
  const { ref, isVisible } = useScrollAnimation({ delay: delay * 1000 });
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    if (animationType === 'typewriter') {
      const timer = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    } else {
      setDisplayedText(text);
    }
  }, [isVisible, text, currentIndex, speed, animationType]);

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'wordByWord':
        return {
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
              }
            }
          },
          word: {
            hidden: { 
              opacity: 0, 
              y: 20,
              rotateX: -90
            },
            visible: { 
              opacity: 1, 
              y: 0,
              rotateX: 0,
              transition: {
                type: "spring",
                damping: 15,
                stiffness: 100
              }
            }
          }
        };
      case 'letterByLetter':
        return {
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1
              }
            }
          },
          letter: {
            hidden: { 
              opacity: 0, 
              y: 50,
              scale: 0
            },
            visible: { 
              opacity: 1, 
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                damping: 10,
                stiffness: 100
              }
            }
          }
        };
      case 'slideUp':
        return {
          container: {
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }
        };
      default:
        return {
          container: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }
        };
    }
  };

  const variants = getAnimationVariants();

  if (animationType === 'typewriter') {
    return (
      <motion.div
        ref={ref as any}
        className={`${className} inline-block`}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      >
        {displayedText}
        {currentIndex < text.length && (
          <span className="animate-pulse">|</span>
        )}
      </motion.div>
    );
  }

  if (animationType === 'slideUp') {
    return (
      <motion.div
        ref={ref as any}
        className={className}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants.container}
      >
        {text}
      </motion.div>
    );
  }

  if (animationType === 'letterByLetter') {
    return (
      <motion.div
        ref={ref as any}
        className={className}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants.container}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={variants.letter}
            style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // wordByWord animation
  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants.container}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          variants={variants.word}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
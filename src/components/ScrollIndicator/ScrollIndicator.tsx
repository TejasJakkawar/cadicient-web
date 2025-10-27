import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop < 100); // Hide when scrolled down
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Floating Scroll Indicator */}
      {isVisible && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
          <div className="bg-orange-500 rounded-full p-3 shadow-lg hover:bg-orange-600 transition-colors cursor-pointer"
               onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <ChevronDown className="text-white w-6 h-6" />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollIndicator;
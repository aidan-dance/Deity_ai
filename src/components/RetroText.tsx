import React, { useEffect, useState } from 'react';

interface RetroTextProps {
  text: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
  showUnderscore?: boolean;
}

const RetroText: React.FC<RetroTextProps> = ({ 
  text, 
  className = '', 
  delay = 0, 
  children,
  showUnderscore = true
}) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Speed of typing

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <div className={`retro-text font-aquire ${className}`}>
      {displayText}
      {showUnderscore && displayText.length === text.length && (
        <span className="animate-pulse">_</span>
      )}
      {children}
    </div>
  );
};

export default RetroText;
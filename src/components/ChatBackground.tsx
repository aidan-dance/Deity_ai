import React, { useEffect, useRef } from 'react';

const CHAT_SYMBOLS = ['💬', '🤖', '📩', '💻', '🔔', '⚡', '💡', '🎯', '🗨️', '📱', '🔄', '✨'];

interface Drop {
  x: number;
  y: number;
  speed: number;
  symbol: string;
  opacity: number;
  scale: number;
  pulse: {
    size: number;
    speed: number;
    offset: number;
  };
}

const ChatBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize drops
    const drops: Drop[] = [];
    const numberOfDrops = Math.floor(canvas.width / 45); // Balanced density for readability

    for (let i = 0; i < numberOfDrops; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.8, // Slower fall speed for better readability
        symbol: CHAT_SYMBOLS[Math.floor(Math.random() * CHAT_SYMBOLS.length)],
        opacity: 0.1 + Math.random() * 0.3,
        scale: 0.8 + Math.random() * 0.4,
        pulse: {
          size: 0.1 + Math.random() * 0.2, // Pulse magnitude
          speed: 0.02 + Math.random() * 0.03, // Pulse speed
          offset: Math.random() * Math.PI * 2 // Random start phase
        }
      });
    }

    const draw = () => {
      // Semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        ctx.save();

        // Calculate pulse effect
        const pulseScale = 1 + Math.sin(drop.pulse.offset) * drop.pulse.size;
        
        // Set up the transform for this symbol
        ctx.translate(drop.x, drop.y);
        ctx.scale(drop.scale * pulseScale, drop.scale * pulseScale);

        // Create glowing effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00ff00';
        
        // Set varying opacity
        ctx.fillStyle = `rgba(0, 255, 0, ${drop.opacity})`;
        
        // Draw the symbol
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(drop.symbol, 0, 0);
        
        // Reset shadow for performance
        ctx.shadowBlur = 0;

        ctx.restore();

        // Update position and pulse
        drop.y += drop.speed;
        drop.pulse.offset += drop.pulse.speed;

        // Reset to top when reaching bottom
        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
          drop.symbol = CHAT_SYMBOLS[Math.floor(Math.random() * CHAT_SYMBOLS.length)];
          drop.opacity = 0.1 + Math.random() * 0.3;
          drop.scale = 0.8 + Math.random() * 0.4;
          drop.pulse = {
            size: 0.1 + Math.random() * 0.2,
            speed: 0.02 + Math.random() * 0.03,
            offset: Math.random() * Math.PI * 2
          };
        }
      });

      requestAnimationFrame(draw);
    };

    const animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ 
        zIndex: 0,
        opacity: 0.5,
        background: 'black'
      }}
    />
  );
};

export default ChatBackground;
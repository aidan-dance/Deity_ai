import React, { useEffect, useRef } from 'react';

const EMAIL_SYMBOLS = ['📩', '✉️', '📬', '📨', '📧', '📮', '📫', '📪'];

interface Drop {
  x: number;
  y: number;
  speed: number;
  symbol: string;
  opacity: number;
}

const EmailBackground: React.FC = () => {
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
    const numberOfDrops = Math.floor(canvas.width / 30); // Adjust density

    for (let i = 0; i < numberOfDrops; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 1.5, // Varying speeds for parallax effect
        symbol: EMAIL_SYMBOLS[Math.floor(Math.random() * EMAIL_SYMBOLS.length)],
        opacity: 0.1 + Math.random() * 0.3, // Random opacity for depth
      });
    }

    const draw = () => {
      // Semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = '20px Arial';

      drops.forEach((drop, index) => {
        // Create glowing effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00ff00';
        
        // Set varying opacity
        ctx.fillStyle = `rgba(0, 255, 0, ${drop.opacity})`;
        
        // Draw the symbol
        ctx.fillText(drop.symbol, drop.x, drop.y);
        
        // Reset shadow for performance
        ctx.shadowBlur = 0;

        // Move drop down
        drop.y += drop.speed;

        // Reset to top when reaching bottom
        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
          drop.symbol = EMAIL_SYMBOLS[Math.floor(Math.random() * EMAIL_SYMBOLS.length)];
          drop.opacity = 0.1 + Math.random() * 0.3;
        }
      });
    };

    const interval = setInterval(draw, 33); // Approximately 30 FPS

    return () => {
      clearInterval(interval);
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

export default EmailBackground;
import React, { useEffect, useRef } from 'react';

const WEBSITE_SYMBOLS = ['🌐', '💻', '📱', '⚙️', '🔍', '🚀', '📊', '🔒', '🎨', '📝', '🔌', '📈'];

interface Drop {
  x: number;
  y: number;
  speed: number;
  symbol: string;
  opacity: number;
  scale: number;
  rotation: number;
}

const WebsiteBackground: React.FC = () => {
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
    const numberOfDrops = Math.floor(canvas.width / 40); // Balanced density

    for (let i = 0; i < numberOfDrops; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.4 + Math.random() * 1.0, // Slower fall speed for better readability
        symbol: WEBSITE_SYMBOLS[Math.floor(Math.random() * WEBSITE_SYMBOLS.length)],
        opacity: 0.1 + Math.random() * 0.3, // Random opacity for depth
        scale: 0.8 + Math.random() * 0.4, // Random size for depth
        rotation: Math.random() * Math.PI * 2 // Random rotation
      });
    }

    const draw = () => {
      // Semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        ctx.save(); // Save current context state

        // Set up the transform for this symbol
        ctx.translate(drop.x, drop.y);
        ctx.rotate(drop.rotation);
        ctx.scale(drop.scale, drop.scale);

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

        ctx.restore(); // Restore context state

        // Move drop down
        drop.y += drop.speed;
        drop.rotation += 0.01; // Slow rotation effect

        // Reset to top when reaching bottom
        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
          drop.symbol = WEBSITE_SYMBOLS[Math.floor(Math.random() * WEBSITE_SYMBOLS.length)];
          drop.opacity = 0.1 + Math.random() * 0.3;
          drop.scale = 0.8 + Math.random() * 0.4;
          drop.rotation = Math.random() * Math.PI * 2;
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

export default WebsiteBackground;

import React, { useEffect, useRef } from 'react';

interface BinaryRainProps {
  opacity?: number;
}

const BinaryRain: React.FC<BinaryRainProps> = ({ opacity = 0.3 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Array to track the y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100); // Random starting positions
    }

    const draw = () => {
      // Set the background with transparency
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity/10})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set color and font for the binary
      ctx.fillStyle = '#0a0';
      ctx.font = `${fontSize}px monospace`;

      // Draw the binary
      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Randomly reset some drops back to the top
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move the drop down
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 70);

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [opacity]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity }}
    />
  );
};

export default BinaryRain;

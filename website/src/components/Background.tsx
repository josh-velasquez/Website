import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const createShape = (centerX: number, centerY: number, radius: number, points: number, color: string) => {
      ctx.beginPath();
      ctx.filter = 'blur(60px)';
      
      const angleStep = (Math.PI * 2) / points;
      const time = Date.now() * 0.001;
      
      // Create points around the center
      const vertices = [];
      for (let i = 0; i < points; i++) {
        const angle = i * angleStep;
        // Add some wave motion to the radius
        const radiusNoise = Math.sin(time + i * 2) * (radius * 0.2);
        const currentRadius = radius + radiusNoise;
        const x = centerX + Math.cos(angle) * currentRadius;
        const y = centerY + Math.sin(angle) * currentRadius;
        vertices.push({ x, y });
      }

      // Start the path
      ctx.beginPath();
      ctx.moveTo(vertices[0].x, vertices[0].y);

      // Create a smooth curve through the points
      for (let i = 0; i < vertices.length; i++) {
        const current = vertices[i];
        const next = vertices[(i + 1) % vertices.length];
        const prev = vertices[i === 0 ? vertices.length - 1 : i - 1];

        // Calculate control points for the curve
        const controlPoint1 = {
          x: current.x + (next.x - prev.x) * 0.2,
          y: current.y + (next.y - prev.y) * 0.2
        };
        const controlPoint2 = {
          x: next.x - (next.x - current.x) * 0.2,
          y: next.y - (next.y - current.y) * 0.2
        };

        ctx.bezierCurveTo(
          controlPoint1.x, controlPoint1.y,
          controlPoint2.x, controlPoint2.y,
          next.x, next.y
        );
      }

      ctx.closePath();

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const render = () => {
      mouseX = lerp(mouseX, targetMouseX, 0.1);
      mouseY = lerp(mouseY, targetMouseY, 0.1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0f0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Interactive shape following mouse
      createShape(
        mouseX,
        mouseY,
        200,
        6,
        'rgba(255,99,99,0.12)'
      );

      // Background shapes
      const shapes = [
        {
          x: Math.sin(time * 0.3) * canvas.width * 0.3 + canvas.width * 0.5,
          y: Math.cos(time * 0.2) * canvas.height * 0.3 + canvas.height * 0.5,
          radius: 300,
          points: 8,
          color: 'rgba(255,71,87,0.06)',
        },
        {
          x: Math.cos(time * 0.4) * canvas.width * 0.2 + canvas.width * 0.3,
          y: Math.sin(time * 0.3) * canvas.height * 0.2 + canvas.height * 0.7,
          radius: 250,
          points: 7,
          color: 'rgba(190,75,219,0.08)',
        },
        {
          x: Math.sin(time * 0.5) * canvas.width * 0.3 + canvas.width * 0.7,
          y: Math.cos(time * 0.4) * canvas.height * 0.3 + canvas.height * 0.3,
          radius: 350,
          points: 5,
          color: 'rgba(255,99,72,0.05)',
        },
      ];

      shapes.forEach(shape => {
        createShape(shape.x, shape.y, shape.radius, shape.points, shape.color);
      });

      // Darker vignette
      const vignette = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.7
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.5)');

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 1,
      }}
    />
  );
};

export default Background; 
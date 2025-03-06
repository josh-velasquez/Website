import React, { useEffect, useRef, useState } from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';
import catImage from '../assets/cat.png';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}

const MiniGame: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  
  const playerRef = useRef<GameObject>({
    x: 50,
    y: 300,
    width: 40,
    height: 40,
    speed: 5
  });
  const obstaclesRef = useRef<GameObject[]>([]);
  const animationFrameRef = useRef<number>(0);
  const gameLoopRef = useRef<() => void>(() => {});
  const keysPressed = useRef<Set<string>>(new Set());

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
  };

  // Handle game logic
  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    obstaclesRef.current = [];
    playerRef.current.y = canvas.height / 2;

    // Load images and setup water drop style
    const playerImg = new Image();
    playerImg.src = catImage;

    const drawImage = (ctx: CanvasRenderingContext2D, image: HTMLImageElement, x: number, y: number, width: number, height: number) => {
      ctx.drawImage(image, x, y, width, height);
    };

    const drawWaterDrop = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
      ctx.save();
      ctx.fillStyle = '#80C4FF';
      ctx.beginPath();
      const centerX = x + width / 2;
      const bottomY = y + height;
      
      // Draw a teardrop shape
      ctx.moveTo(centerX, y);
      ctx.bezierCurveTo(
        x, y + height * 0.5,
        x, bottomY,
        centerX, bottomY
      );
      ctx.bezierCurveTo(
        x + width, bottomY,
        x + width, y + height * 0.5,
        centerX, y
      );
      
      ctx.fill();
      
      // Add a shine effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.beginPath();
      ctx.ellipse(
        centerX - width * 0.2,
        y + height * 0.3,
        width * 0.2,
        height * 0.2,
        -Math.PI / 4,
        0,
        2 * Math.PI
      );
      ctx.fill();
      ctx.restore();
    };

    let isGameRunning = true;

    const gameLoop = () => {
      if (!isGameRunning) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Player movement
      const player = playerRef.current;
      if (keysPressed.current.has('ArrowUp')) player.y -= player.speed;
      if (keysPressed.current.has('ArrowDown')) player.y += player.speed;
      
      // Keep player in bounds
      player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));

      // Draw player (cat image)
      drawImage(ctx, playerImg, player.x, player.y, player.width, player.height);
      
      // Update and draw obstacles
      obstaclesRef.current = obstaclesRef.current.filter(obstacle => {
        obstacle.x -= obstacle.speed;
        
        // Check collision with slightly smaller hitbox for fairness
        const hitboxPadding = 8;
        if (
          player.x < obstacle.x + obstacle.width - hitboxPadding &&
          player.x + player.width - hitboxPadding > obstacle.x &&
          player.y < obstacle.y + obstacle.height - hitboxPadding &&
          player.y + player.height - hitboxPadding > obstacle.y
        ) {
          setGameOver(true);
          isGameRunning = false;
          return false;
        }

        // Draw water drop obstacle
        drawWaterDrop(ctx, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        
        return obstacle.x > -obstacle.width;
      });

      if (isGameRunning) {
        setScore(prev => prev + 0.1);
        animationFrameRef.current = requestAnimationFrame(gameLoop);
      }
    };

    gameLoopRef.current = gameLoop;

    // Start the game loop immediately
    const spawnObstacle = () => {
      if (!isGameRunning) return;
      obstaclesRef.current.push({
        x: canvas.width,
        y: Math.random() * (canvas.height - 50),
        width: 30,
        height: 30,
        speed: 3 + Math.random() * 2
      });
    };

    const obstacleInterval = setInterval(spawnObstacle, 2000);
    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      isGameRunning = false;
      clearInterval(obstacleInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameStarted, gameOver]);

  // Handle keyboard events
  useEffect(() => {
    if (!open) {
      setGameStarted(false);
      setGameOver(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current.add(e.key);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          background: 'rgba(19, 17, 28, 0.95)',
          padding: 4,
          borderRadius: 2,
          border: '1px solid rgba(149, 128, 255, 0.2)',
          boxShadow: '0 0 30px rgba(149, 128, 255, 0.3)',
        }}
      >
        {gameOver ? (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Game Over!
            </Typography>
            <Typography color="primary" sx={{ mb: 2 }}>
              Score: {Math.floor(score)}
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={startGame}
              sx={{ mr: 2 }}
            >
              Play Again
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={onClose}
            >
              Close
            </Button>
          </Box>
        ) : !gameStarted ? (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" color="primary" gutterBottom>
              Cat Dodge!
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Help the cat avoid the water drops using ↑ and ↓ arrow keys
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={startGame}
            >
              Start Game
            </Button>
          </Box>
        ) : (
          <>
            <Typography color="primary" sx={{ mb: 2 }}>
              Score: {Math.floor(score)}
            </Typography>
            <canvas
              ref={canvasRef}
              width={600}
              height={400}
              style={{
                border: '1px solid rgba(149, 128, 255, 0.3)',
                borderRadius: 4,
              }}
            />
          </>
        )}
      </Box>
    </Modal>
  );
};

export default MiniGame; 
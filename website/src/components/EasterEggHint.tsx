import React from 'react';
import { Box, Typography } from '@mui/material';
import { SportsEsports } from '@mui/icons-material';

const EasterEggHint: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        opacity: 0.15,
        transition: 'all 0.3s ease',
        '&:hover': {
          opacity: 0.7,
          transform: 'scale(1.05)',
        },
      }}
    >
      <SportsEsports 
        sx={{ 
          fontSize: '1.2rem',
          color: 'primary.main',
          filter: 'drop-shadow(0 0 4px rgba(149, 128, 255, 0.5))',
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%': {
              filter: 'drop-shadow(0 0 4px rgba(149, 128, 255, 0.3))',
            },
            '50%': {
              filter: 'drop-shadow(0 0 8px rgba(149, 128, 255, 0.6))',
            },
            '100%': {
              filter: 'drop-shadow(0 0 4px rgba(149, 128, 255, 0.3))',
            },
          },
        }} 
      />
      <Typography
        variant="caption"
        sx={{
          color: 'primary.main',
          fontFamily: 'monospace',
          letterSpacing: '0.1em',
        }}
      >
        type "game" + enter
      </Typography>
    </Box>
  );
};

export default EasterEggHint; 
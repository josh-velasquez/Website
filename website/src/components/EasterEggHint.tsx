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
        opacity: 0.1,
        transition: 'opacity 0.3s ease',
        '&:hover': {
          opacity: 0.6,
        },
      }}
    >
      <SportsEsports 
        sx={{ 
          fontSize: '0.9rem',
          color: 'primary.main',
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
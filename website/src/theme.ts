import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9580FF',     // Purple
      light: '#B8A8FF',    // Light purple
      dark: '#7B61FF',     // Dark purple
    },
    secondary: {
      main: '#FF80BF',     // Pink
      light: '#FFA8D4',    // Light pink
      dark: '#FF61B0',     // Dark pink
    },
    background: {
      default: '#13111C',  // Dark background
      paper: 'rgba(31, 27, 46, 0.7)', // Slightly lighter with transparency
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '2.4rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#0a0a0a',
          overflowX: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontSize: '1rem',
          padding: '0.7rem 1.5rem',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17, 17, 17, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(25, 25, 25, 0.8)',
            border: '1px solid rgba(100,255,218,0.1)',
            transform: 'translateY(-8px)',
          },
        },
      },
    },
  },
}); 
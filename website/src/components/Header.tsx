import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton } from '@mui/material';
import { Code, GitHub, LinkedIn } from '@mui/icons-material';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0} 
        sx={{ 
          backdropFilter: 'blur(8px)',
          background: 'rgba(15, 10, 10, 0.8)',
        }}
      >
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Code /> JV
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {['about', 'skills', 'projects', 'experience'].map((section) => (
                <Button
                  key={section}
                  href={`#${section}`}
                  color="inherit"
                  sx={{
                    position: 'relative',
                    textTransform: 'capitalize',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: 'primary.main',
                      transform: activeSection === section ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'bottom right',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom left',
                    },
                  }}
                >
                  {section}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                color="inherit" 
                href="https://github.com/josh-velasquez" 
                target="_blank"
                sx={{ 
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://linkedin.com/in/joshleevelasquez" 
                target="_blank"
                sx={{ 
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <Box
        component="header"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0a0a 0%, #1a0f0f 100%)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
            Josh Velasquez
          </Typography>
          <Typography variant="h2" component="h2" color="primary" sx={{ mb: 4 }}>
            Full Stack Developer
          </Typography>
        </motion.div>
      </Box>
    </>
  );
};

export default Header; 
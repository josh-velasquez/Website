import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton } from '@mui/material';
import { Code, GitHub, LinkedIn } from '@mui/icons-material';

const HeaderContainer: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience'];
      const scrollPosition = window.scrollY + 100;

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
          background: 'rgba(17, 17, 23, 0.8)',
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
          background: 'linear-gradient(135deg, #13111C 0%, #1F1B2E 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: 'rgba(149, 128, 255, 0.3)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}

        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(149, 128, 255, 0.1) 0%, rgba(17, 17, 23, 0) 70%)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <Typography variant="h1" component="h1" sx={{ 
            mb: 2,
            textShadow: '0 0 10px rgba(149, 128, 255, 0.3)',
            color: '#ffffff',
          }}>
            Josh Velasquez
          </Typography>
          <Typography variant="h2" component="h2" sx={{ 
            mb: 4,
            textShadow: '0 0 8px rgba(149, 128, 255, 0.2)',
            color: '#9580FF',
          }}>
            Full Stack Developer
          </Typography>

          <motion.div
            style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, rgba(149, 128, 255, 0.8) 0%, rgba(149, 128, 255, 0.2) 100%)',
              margin: '0 auto',
              borderRadius: '2px',
            }}
            animate={{
              width: ['100px', '200px', '100px'],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </Box>
    </>
  );
};

export default HeaderContainer; 
import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './theme';
import Background from './components/Background';
import Header from './components/Header';
import AboutContainer from './components/AboutContainer';
import Skills from './components/Skills';
import ProjectsContainer from './components/ProjectsContainer';
import ExperienceContainer from './components/ExperienceContainer';
import MiniGame from './components/MiniGame';
import EasterEggHint from './components/EasterEggHint';

function App() {
  const [gameOpen, setGameOpen] = useState(false);
  const [secretCode, setSecretCode] = useState('');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setSecretCode(prev => {
        const newCode = (prev + e.key).slice(-4);
        if (newCode === 'game') {
          setGameOpen(true);
          return '';
        }
        return newCode;
      });
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Background />
      <div className="App">
        <Header />
        <main>
          <AboutContainer />
          <Skills />
          <ProjectsContainer />
          <ExperienceContainer />
        </main>
        <EasterEggHint />
      </div>
      <MiniGame open={gameOpen} onClose={() => setGameOpen(false)} />
    </ThemeProvider>
  );
}

export default App;

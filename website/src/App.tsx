import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './theme';
import Background from './components/Background';
import HeaderContainer from './components/containers/HeaderContainer';
import AboutContainer from './components/containers/AboutContainer';
import SkillsContainer from './components/containers/SkillsContainer';
import ProjectsContainer from './components/containers/ProjectsContainer';
import ExperienceContainer from './components/containers/ExperienceContainer';
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
        <HeaderContainer />
        <main>
          <AboutContainer />
          <SkillsContainer />
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

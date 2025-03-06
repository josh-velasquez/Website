import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './theme';
import Background from './components/Background';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Background />
      <div className="App">
        <Header />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

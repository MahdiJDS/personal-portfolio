import React from 'react';
import Navbar from './Components/navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import { ThemeProvider } from "./Context/ThemeContext";
import UpButton from './Components/UpButton';



function App() {
  return (
      <ThemeProvider>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <UpButton />
      </ThemeProvider>
  );
}

export default App;

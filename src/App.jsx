import React, { Suspense, lazy } from 'react';
import Loader from './Components/Loader'
import Navbar from './Components/navbar';
import UpButton from './Components/UpButton';
import { ThemeProvider } from "./Context/ThemeContext";

const Hero = lazy(()=>import('./Components/Hero'))
const About = lazy(() => import('./Components/About'));
const Projects = lazy(() => import('./Components/Projects'));
const Skills = lazy(() => import('./Components/Skills'));
const Contact = lazy(() => import('./Components/Contact'));
const Footer = lazy(() => import('./Components/Footer'));



function App() {
  return (
    <ThemeProvider>
      <Navbar />

       <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>

      <UpButton />
    </ThemeProvider >
  );
}

export default App;

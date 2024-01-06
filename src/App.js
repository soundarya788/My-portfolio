import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';

export default function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <About />
      <Skills/>
      <Experience/>
      <Contact/>
      
    </>
  );
}


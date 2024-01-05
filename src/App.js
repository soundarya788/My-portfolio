import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact/>
    </>
  );
}


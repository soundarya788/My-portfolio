import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Home from './components/Home';
import Contact from './components/Contact';
import Skill from './components/Skill';
import 'normalize.css';
import './App.css';

function App() {
  return (
    <div className="text" >
      <Router>
        <div className='app'>
          <nav style={{  marginTop: '30px',marginLeft:'800px',position:'relative' }}>
          
          <Link to='/Home' className='nav-link' activeClassName='active-link'>
          <span class="border-bottom" >
              Home
              </span>
            </Link>
            <Link to='/About' className='nav-link'>
              About
            </Link>
            <Link to='/Skill' className='nav-link'>
              Skill
            </Link>
            <Link to='/Projects' className='nav-link'>
              Projects
            </Link>
            <Link to='/Experience' className='nav-link'>
              Experience
            </Link>
            
            <Link to='/Contact' className='nav-link'>
              Contact
            </Link>
            
          </nav>

          <Routes>
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Skill' element={<Skill />} />
            <Route path='/Experience' element={<Experience />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;



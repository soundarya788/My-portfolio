import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Skill from './components/Skill'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Home from './components/Home'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    
    <Router>
      

       <div className="app" style={{backgroundColor:"black",display: 'flex',height:'60px' }} >

        <li>
      <Link style={{ textDecoration:'none',color:'white'}} to='/About'>
        <div style={{marginLeft:'759px',position:'absolute',marginTop:'20px'}}>
        About
        </div>
        </Link>
      </li>

      <li>
      <Link style={{textDecoration:'none',color:'white'}} to='/Skill'>
        <div style={{marginLeft:'820px',position:'absolute',marginTop:'20px'}}>
        Skill
        </div>
        </Link>
      </li>

      <li>
      <Link style={{textDecoration:'none',color:'white'}} to='/Projects'>
        <div style={{marginLeft:'860px',position:'absolute',marginTop:'20px'}}>
        Projects
        </div>
        </Link>
      </li>

      <li>
      <Link style={{textDecoration:'none',color:'white'}} to='/Experience'>
        <div style={{marginLeft:'930px',position:'absolute',marginTop:'20px'}}>
        Experience
        </div>
        </Link>
      </li>

      <li>
      <Link style={{textDecoration:'none',color:'white'}} to='/Home'>
        <div style={{marginLeft:'700px',position:'absolute',marginTop:'20px'}}>
        Home
        </div>
        </Link>
      </li>

      <li>
      <Link style={{textDecoration:'none',color:'white'}} to='/Contact'>
        <div style={{marginLeft:'1020px',position:'absolute',marginTop:'20px'}}>
        Contact
        </div>
        </Link>
      </li>



      
      
        </div>


      



      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Skill' element={<Skill/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>

        
      </Routes>
  


    </Router>
  )
}

export default App

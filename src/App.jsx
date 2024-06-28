import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './component/Header';
import Navigation from './component/Navigation';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact'; 
import Clock from './component/Clock'; 
import Footer from './component/Footer'; 
import Cat from './component/Cat';  
function App() { 
  return (
    <div> 
    <Navigation />
    <Header /> 
    <About/> 
    <Projects />
    <Cat/> 
    <Clock/>   
    <Contact /> 
    <Footer/>  
    </div>
  )
}
export default App

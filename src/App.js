import logo from './Images/logo.png';
import './App.css';
import styles from "./Styles/navbar.module.css"
import Home from './Components/Home';
import { useState,useEffect } from 'react';
import Navbar from './Sections/Navbar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import GithubStats from './Components/GithubStats';
import Contact from './Components/Contact';
import About from './Components/About';
import Tools from './Components/Tools';
function App() {
  return (
    <div className="App" style={{border:"1px solid blue"}}>
      <div ><Navbar/></div>
      <div>
      <Home/>
      <About/>
      <Skills/>
      <Tools/>
      <Projects/>
      <GithubStats/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;

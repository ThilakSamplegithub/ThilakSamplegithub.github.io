import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div id='home'>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
{/* <About/>
      <ServicesSection/>
      <PortfolioSection/>
      <ContactSection/> */}
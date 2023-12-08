import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import GithubStats from '../Components/GithubStats'

const Home = () => {
  return (
    <div id='home'>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <GithubStats/>
      <Contact/>
    </div>
  )
}

export default Home
{/* <About/>
      <ServicesSection/>
      <PortfolioSection/>
      <ContactSection/> */}
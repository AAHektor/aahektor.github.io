import React from 'react'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import About from '../components/About'
import LinkedinConnect from '../components/LinkedinConnect'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className='page-wrapper'>

      <Header></Header>

      <Hero></Hero>

      {/* <div className='card-container-hero'>
        <div className='card card-feature'>
          <h3>About Me</h3>
          <p>
            I'm a web development student based in Sweden with a passion for building modern and responsive websites.
            <br /> <br /> Currently studying .NET, C#, React and fullstack development. <br /> <br /> Looking for new challenges to sharpen my skills
            and grow as a developer.
          </p>
        </div>

        <div className='card-container-column'>
          <div className='card card-hero'>
            <div>
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind / Styled Components</li>
              </ul>
            </div>
          </div>
          <div className='card card-hero'>
            <div>
            <h3>Backend</h3>
            <ul>
              <li>ASP.NET Core</li>
              <li>C#</li>
              <li>REST APIs</li>
              <li>SQL / Entity Framework</li>
            </ul>
            </div>
          </div>
        </div>

        <div className='card card-hero'>
          <div>
            <h3>Tools & Deployment</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Azure</li>
              <li>Visual Studio / VS Code</li>
            </ul>
          </div>
          <div>
            <h3>Other Skills</h3>
            <ul>
              <li>UI/UX Design (Figma)</li>
              <li>Responsive Design</li>
              <li>Basic SEO</li>
            </ul>
          </div>

        </div>



      </div> */}

      <Projects></Projects>

      <Skills></Skills>

      <About></About>

      <LinkedinConnect></LinkedinConnect>

      <Footer></Footer>

    </div>
  )
}

export default LandingPage
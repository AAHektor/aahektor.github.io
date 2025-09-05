import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <section id='header-section'>
      <div className='page-wrapper'>
        <div className='header'>
          <h1>AronHektor</h1>
          {/* <img className='logotype' src="/mywebsite/images/header/Logo.svg" alt="" /> */}
          <nav className='navlinks'>
            <a href="/mywebsite/CV.pdf" target="_blank" rel="noopener noreferrer">Resume 
              <svg className='external-link'
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                <path d="M11 13l9 -9" />
                <path d="M15 4h5v5" />
              </svg>
            </a>
            <Link to="project-section" spy={true} smooth={true} offset={10} duration={100}>Projects</Link>
            <Link to="linkedin-section" spy={true} smooth={true} offset={-100} duration={100}>Socials</Link>
            <NavLink>Resources</NavLink>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero-content'>

        <div className='hero-content-left'>
          <div className='hero-content-header'>
            <h1>Hey! I'm Aron Hektor.</h1>
            <h2>Fullstack Developer</h2>
            <span>Aspiring fullstack developer from Sweden, turning ideas into user-friendly web experiences.</span>
          </div>
          <div className='socials-links'>
            <a target="_blank" href="https://github.com/AAHektor"><img src="/images/hero/github.svg" alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/aron-hektor-b5676327a/"><img src="/images/hero/linkedin.svg" alt="" /></a>
            <NavLink to=""><img src="/images/hero/envelope.svg" alt="" /></NavLink>
          </div>
          {/* <button className='btn btn-contact'> CONTACT 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-6v-6h6z" />
              <path d="M3 9v6" />
            </svg>
          </button> */}
        </div>

        <div className='hero-content-right'>
          <div className='profile-wrapper'>
            <img className='profile-img' src="/images/hero/jag5.jpg" alt="" />
          </div>
        </div>

    </div>
  )
}

export default Hero
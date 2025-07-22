import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <img src="/mywebsite/images/header/Logo.svg" alt="" />
      <nav className='navlinks'>
        <NavLink>Resume</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Socials</NavLink>
        <NavLink>Resources</NavLink>
      </nav>
    </div>
  )
}

export default Header
import React from 'react'
import './Navbar.css'
import useResponsiveNav from '../hooks/useResponsiveNav'

const Navbar = () => {

  useResponsiveNav();

  return (
    <div className='navbar_container'>
        <header>
            <a href="" className="brand">Mateo</a>
            <div className="menu-btn"></div>

            <div className="navigation">
                <a href="#main">Home</a>
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </div>
        </header>
    </div>
  )
}

export default Navbar
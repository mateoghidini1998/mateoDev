import React from 'react'
import Cta from '../atoms/Cta'
import './Main.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='main_container'>
        <section className="main" id="main">
        <div className="content">
            <h2>
                Hello, I´m <br/> 
                <span className='bounce'>M</span>
                <span className='bounce'>a</span>
                <span className='bounce'>t</span>
                <span className='bounce'>e</span>
                <span className='bounce'>o</span>
                &nbsp; 
                <span className='bounce'>G</span>
                <span className='bounce'>h</span>
                <span className='bounce'>i</span>
                <span className='bounce'>d</span>
                <span className='bounce'>i</span>
                <span className='bounce'>n</span>
                <span className='bounce'>i</span>
            </h2>
            <div className="animated-text">
                <h3>Web Designer</h3>
                <h3>Jr Advance Software Engineer</h3>
            </div>
            <Cta className="btn" content="See My Work"/>
            <div className="media-icons">
                <a href="https://www.linkedin.com/in/mghidini/"><FaLinkedin/></a>
                <a href="https://github.com/mateoghidini1998"><FaGithub/></a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Main
import React from 'react'
import './Contact.css'
import { FaPhone } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
function Contact() {
  return (
    <div className='main-container'>
        <section id='contact'>
            <div className='section-title'>
                <h2>Contact</h2>
            </div>
            <div className='info-container'>
                <p><FaPhone/>ghidinimateo1@gmail.com</p>
                <p><FiMail/>https://www.linkedin.com/in/mghidini/</p>
                <p><FiPhone/>+5491136176018</p>
            </div>
        </section>
    </div>
  )
}

export default Contact
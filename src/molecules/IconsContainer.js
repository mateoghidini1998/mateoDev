import React from 'react'
import Cta from '../atoms/Cta'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const IconsContainer = () => {
  return (
    <div className="media-icons">
        <Cta link="https://www.linkedin.com/in/mghidini/" content={<FaLinkedin/>}/>
        <Cta link="https://github.com/mateoghidini1998" content={<FaGithub/>}/>
    </div>
  )
}

export default IconsContainer
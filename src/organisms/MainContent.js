import React from 'react'
import Cta from '../atoms/Cta'
import AnimatedHeading from '../molecules/AnimatedHeading'
import AnimatedText from '../molecules/AnimatedText'
import IconsContainer from '../molecules/IconsContainer'

function MainContent() {
  return (
    <div className="content">
        <AnimatedHeading/>
        <AnimatedText/>
        <Cta  link="https://github.com/mateoghidini1998" className="btn" content="See My Work"/>
        <IconsContainer/>
    </div>
  )
}

export default MainContent
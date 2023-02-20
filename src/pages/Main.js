import React from 'react'
import MainContent from '../organisms/MainContent'
import './Main.css'
import Section from './Section'

const Main = () => {
  return (
    <div className='main_container'>
        <Section className="main" id="main">
            <MainContent/>
        </Section>
    </div>
  )
}

export default Main
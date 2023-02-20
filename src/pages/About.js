import React from 'react'
import './About.css'
import Section from './Section'
import AboutSectionTitle from '../molecules/AboutSectionTitle'

const About = () => {
  return (
    <div className='main-container'>
        <Section className="about" id="about">
        <AboutSectionTitle/>
        <div className="content">
            <div className="column col-right reveal">
                <h2 className="content-title">Hey there! I´m Mateo Ghidini</h2>
                <p className="paragraph-text">
                    I'm a 24 years old student and self taught Full Stack Web Developer, passionate about functionality
                    and Back-End. I am looking to take my first steps in a company where I can develop myself
                    professionally. I love doing proyects and learning about different technologies every day, i´m a
                    great coworker and a kind person to work with. I currently enrole myself into different web
                    development courses through different platforms, and studied Tecnicatura Superior en Programación at
                    Universidad Tecnológica Nacional (UTN) in Argentina.
                </p>
            </div>
            <div className="column col-left reveal">
                <div className="box skills">
                    <span>Skills</span>
                    <ul>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>Css</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Git</li>
                    </ul>
                </div>
                <div className="box tecnologies">
                    <span>Tecnologies</span>
                    <ul>
                        <li>Laravel</li>
                        <li>ReactJs</li>
                        <li>React Native</li>
                        <li>NodeJs</li>
                        <li>NextJs</li>
                        <li>Express js</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
                <div className="box tools">
                    <span>Tools</span>
                    <ul>
                        <li>Jira</li>
                        <li>BitBucket</li>
                        <li>SourceTree</li>
                        <li>Github</li>
                        <li>Trello</li>
                    </ul>
                </div>
            </div>

            <div className="fake-big-3">Blog</div>
        </div>
    </Section>
    </div>
  )
}

export default About
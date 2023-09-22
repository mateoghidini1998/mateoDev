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
                Im a Full stack web developer with a junior advance seniority, proficient in a range of technologies including HTML, CSS, JavaScript, ReactJs, Nodejs, TypeScript, NextJS, and Laravel. With a strong foundation in web development, I enjoy bringing design concepts to life through elegant and functional code. My passion for learning and eagerness to take on new challenges have enabled me to deliver high-quality solutions for clients across a variety of industries. If you're looking for a skilled developer to help bring your ideas to life, I'd love to connect!
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
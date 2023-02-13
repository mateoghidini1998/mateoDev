import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
        <section className="about" id="about">
        <div id="header">
            <h2 className="section-title">
                About me
            </h2>
        </div>
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
                <div className="img-card">
                    
                </div>
            </div>

            <div className="fake-big-3">Blog</div>
        </div>
    </section>
    </div>
  )
}

export default About
import React from 'react'
import AboutBoxSkills from '../molecules/AboutBoxSkills';
import AboutBoxTechnologies from '../molecules/AboutBoxTecnologies';
import AboutBoxTools from '../molecules/AboutBoxTools';

function AboutContent() {

  return (
    function AboutContent() {
        return (
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
              <AboutBoxSkills />
              <AboutBoxTechnologies />
              <AboutBoxTools />
            </div>
      
            <div className="fake-big-3">Blog</div>
          </div>
        );
      }
      
  )
}

export default AboutContent
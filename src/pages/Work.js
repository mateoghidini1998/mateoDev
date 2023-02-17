import React, { useEffect, useState } from 'react'
import './Work.css'
import Cta from '../atoms/Cta'
import Headphone from '../assets/images/headphones3.png'
import Calendar from '../assets/images/calendar.png'
import DevConnector from '../assets/images/dev.png'
import Bulls from '../assets/images/bulls2.png'
import Expenses from '../assets/images/reactExpenses.png'
import SixFlags from '../assets/images/sixflags.png'
import useDots from '../hooks/useDots';


const images = [Calendar, Headphone, SixFlags, DevConnector, Bulls, Expenses];

const Work = () => {
    const [activeIndex, setActiveIndex] = useDots(images.length);
    const [showDots, setShowDots] = useState(false);

    useEffect(() => {
        function handleResize() {
          setShowDots(window.innerWidth <= 810);
        }
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    function handleDotClick(index) {
        console.log("Clicked dot with index:", index);
      
        setActiveIndex(index);
      
        const targetCard = document.querySelector(`[data-id="${index}"]`);
        console.log("Target card:", targetCard);
      
        if (targetCard) {
          const magicWall = document.getElementById('home-magicwall');
          console.log("Magic wall:", magicWall);
          console.log("Target card offsetLeft:", targetCard.offsetLeft);
          console.log("Magic wall offsetLeft:", magicWall.offsetLeft);
      
          magicWall.scroll({
            left: targetCard.offsetLeft - magicWall.offsetLeft,
            behavior: 'smooth'
          });
          console.log(magicWall.scroll)
        }

      }
  
    

    return (
      <div className="main-container">
        <section id="work">
          <div id="header">
            <h2>My Work</h2>
          </div>
          <div className="text-zone-2">
            <div>
              <p>
                A small gallery of recent projects chosen by me. I've done them all together with amazing people from
                companies around the globe. It's only a drop in the ocean compared to the entire list. Interested to see
                some more? Visit my work page.
                <br />
              </p>
            </div>
            <div className="btn-container">
              <Cta className="btn" link="https://github.com/mateoghidini1998" content="See More" />
            </div>
          </div>
          <div className="fake-big-2">Work</div>
        </section>
        {showDots && (
          <div className="dots">
            {images.map((image, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        )}
        <div id="home-magicwall" className="fake-magicwall">
          <ul>
            {images.map((image, index) => (
              <li key={index} className={`magic-wall_item ${index === activeIndex ? 'active' : ''}`}>
                <img src={image} alt="image" />
                <div className="hover-content"></div>
                <a href="/" className="colorbox" data-id={index}></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Work;

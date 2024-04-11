import React, { useEffect, useState } from 'react'
import './Work.css'
import Cta from '../atoms/Cta'
import Twitter from '../assets/images/twitter.png'
import goTravel from '../assets/images/gotravel.png'
import Expenses from '../assets/images/reactExpenses.png'
import DevConnector from '../assets/images/dev.png'
import SixFlags from '../assets/images/sixflags.png'
import attractionPark from '../assets/images/attractionPark.jpg'
import useDots from '../hooks/useDots';


const images = [Twitter, DevConnector, goTravel, attractionPark, SixFlags, Expenses];

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
          const magicWall = document.querySelector('#home-magicwall ul');
          const magicWallRect = magicWall.getBoundingClientRect();
          const targetCardRect = targetCard.getBoundingClientRect();
          /* const magicWallOffsetLeft = magicWallRect.left + window.scrollX; */
         
      
          magicWall.scroll({
            left: targetCardRect.left - magicWallRect.left/2 + magicWall.scrollLeft,
            behavior: 'smooth'
          });
        }

      }
  
      const dotColors = [ "#08fdd8", "#da007a", "#f6c544", "#0e9fb7", "#7f5d42", "#a892ee" ]

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
                style={{
                  backgroundColor: dotColors[index],
                  boxShadow: index === activeIndex ? `0 0 5px 0 ${dotColors[index]}` : 'none'
                }}
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

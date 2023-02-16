import React from 'react'
import './Work.css'
import Cta from '../atoms/Cta'
import Headphone from '../assets/images/headphones3.png'
import Calendar from '../assets/images/calendar.png'
import DevConnector from '../assets/images/dev.png'
import Bulls from '../assets/images/bulls.png'
import Axis from '../assets/images/axis_login.png'
import Expenses from '../assets/images/reactExpenses.png'
import SixFlags from '../assets/images/sixflags.png'

const Work = () => {
  return (
    <div className='main-container'>
        <section id="section-work">
            <div id="header">
                <h2>My Work</h2>
            </div>
            <div className="text-zone-2">
                <div>
                    <p>
                    A small gallery of recent projects chosen by me. I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list.
                    Interested to see some more? Visit my work page.
                        <br />
                    </p>
                </div>
                <div className='btn-container'>
                    <Cta className="btn" link="https://github.com/mateoghidini1998" content="See More"/>
                </div>
            </div>
            <div className="fake-big-2">Work</div>
        </section>

        <div id="home-magicwall" className='fake-magicwall'>
            <ul>
                <li className='magic-wall_item lazyload'>
                    <img src={Calendar} alt="image" />
                    <div className="hover-content"></div>
                    <a href="" className="colorbox"></a>
                </li>
                <li className='magic-wall_item lazyload'>
                    <img src={Headphone} alt="image" />
                    <div className="hover-content"></div>
                    <a href="" className="colorbox"></a>
                </li>
                <li className='magic-wall_item lazyload'>
                    <img src={DevConnector} alt="image" />
                    <div className="hover-content"></div>
                    <a href="" className="colorbox"></a>
                </li>
                <li className='magic-wall_item lazyload'>
                    <img src={SixFlags} alt="image" />
                    <div className="hover-content"></div>
                    <a href="" className="colorbox"></a>
                </li>
                <li className='magic-wall_item lazyload'>
                    <img src={Bulls} alt="image" />
                    <div className="hover-content"></div>
                    <a href="" className="colorbox"></a>
                </li>
                <li className='magic-wall_item lazyload'>
                    <img src={Expenses} alt="image" />
                    <div className="hover-content"></div>
                    <a href="" className="colorbox"></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Work
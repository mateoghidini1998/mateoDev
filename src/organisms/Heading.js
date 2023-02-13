import React from 'react'
import './Heading.css';

const Heading = () => {
  return (
    <div className='presentation_container'>
        <div className="name_container">
            <div className="hello_container">
                <p className='hi'>Hello I am,</p>
            </div>
            <h1 className='name'>Mateo Ghidini</h1>
        </div>
        <h4 className='profession'>Web Designer</h4>
    </div>
  )
}

export default Heading
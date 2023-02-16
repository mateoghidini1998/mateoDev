import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button className='btn'><a href={props.link}>{props.content}</a></button>
  )
}

export default Button
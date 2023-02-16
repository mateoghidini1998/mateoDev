import React from 'react'
import './Cta.css'

function Cta(props) {
  return (
    <a className='btn' href={props.link}>{props.content}</a>
  )
}

export default Cta
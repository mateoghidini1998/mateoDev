import React from 'react'

const ContactInfo = (props) => {
  return (
    <div className="info">
        <h3>{props.title}</h3>
        <span>{props.content}</span>
    </div>
  )
}

export default ContactInfo
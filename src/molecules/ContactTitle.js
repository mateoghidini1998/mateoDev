import React from 'react'

const ContactTitle = (props) => {
  return (
    <div className="title" id="header" style={{width: '100%'}}>
        <h2 className="section-title">{props.title}</h2>
    </div>
  )
}

export default ContactTitle
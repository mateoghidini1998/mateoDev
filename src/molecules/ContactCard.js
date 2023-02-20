import React from 'react'
import ContactIcon from '../atoms/ContactIcon'
import ContactInfo from '../atoms/ContactInfo'

const ContactCard = (props) => {
  return (
    <div className="card reveal">
        <ContactIcon icon={props.icon}/>
        <ContactInfo title={props.title} content={props.content}/>
    </div>
  )
}

export default ContactCard
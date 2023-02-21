import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import CloseBtn from '../atoms/CloseBtn'


function EmailSentCard({ onClick }) {

  return (
    <div className="message-card reveal email-sent-card">
        <CloseBtn className="close" onClick={onClick}/>
        <div className="message-icon">
            <FaThumbsUp/>
        </div>
        <div className="message-title">
            <h2 className="section-title-message">Message submited!</h2>
        </div>
    </div>
  )
}

export default EmailSentCard
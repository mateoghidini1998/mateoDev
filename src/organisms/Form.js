import React from 'react'
import Input from '../atoms/Input'

const Form = (props) => {
  return (
    <div>
        <form ref={props.ref} onSubmit={props.onSubmit} className="contact-form reveal">
            <h3>Send Message</h3>
            <Input type="text" name="user_name" placeholder="Name"/>
            <Input type="text" name="user_mail" placeholder="Email"/>
            <div className="input-box">
                <textarea  id="" cols="30" rows="10"  name="message" placeholder="Message"></textarea>
            </div>
            <div className="input-box">
                <input type="submit" className="send-btn" value="Send"/>
            </div>
        </form>
    </div>
  )
}

export default Form
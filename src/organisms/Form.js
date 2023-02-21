import React, { forwardRef, useState } from 'react'
import Input from '../atoms/Input'

const Form = forwardRef((props, ref) => {

  const [formValues, setFormValues] = useState({ user_name: '', user_email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formValues);
    setFormValues({ user_name: '', user_email: '', message: '' });
};

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <form ref={ref} onSubmit={handleSubmit} className="contact-form reveal">
            <h3>Send Message</h3>
            <Input type="text" name="user_name" placeholder="Name" value={formValues.user_name} onChange={handleChange}/>
            <Input type="text" name="user_email" placeholder="Email" value={formValues.user_email} onChange={handleChange} />
            <div className="input-box">
                <textarea  id="" cols="30" rows="10"  name="message" placeholder="Message" value={formValues.message} onChange={handleChange}></textarea>
            </div>
            <div className="input-box">
              <button type="submit" className="send-btn">Send</button>
            </div>
        </form>
    </div>
  )
})

export default Form

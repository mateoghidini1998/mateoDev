import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone } from 'react-icons/fi'
import { MdLocationPin } from 'react-icons/md'
import ContactCard from '../molecules/ContactCard';
import ContactTitle from '../molecules/ContactTitle';
import Form from '../organisms/Form';
import Section from './Section';
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a0bn1ms', 'template_6fehwfa', form.current, 'YiYX3sMzC5_i4CTmq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='main-container'>
        <Section className="contact reveal" id="contact">
        <ContactTitle title="Contact Me" />
        <div className="content">
            <div className="row">
              <ContactCard title="Address" content="Tigre, Buenos Aires, Argentina" icon={<MdLocationPin/>}/>
              <ContactCard title="Phone" content="+5491136176018" icon={<FiPhone/>}/>
              <ContactCard title="Email Address" content="ghidinimateo1@gmail.com" icon={<FiMail/>}/>
            </div>
            <div className="row">
                <Form ref={form} onSubmit={sendEmail} />
            </div>
        </div>

    </Section>
    </div>
  )
}

export default Contact
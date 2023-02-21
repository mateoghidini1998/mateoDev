import { useState } from 'react'
import './Contact.css'
import { FiMail, FiPhone } from 'react-icons/fi'
import { MdLocationPin } from 'react-icons/md'
import { FaDownload } from 'react-icons/fa'
import CV from '../assets/images/CV-Ghidini-Mateo.jpeg'
import ContactCard from '../molecules/ContactCard';
import ContactTitle from '../molecules/ContactTitle';
import Form from '../organisms/Form';
import Section from './Section';
import useEmailSender from '../hooks/UseEmailSender';
import EmailSentCard from '../molecules/EmailSentCard'

function Contact() {
  const [formRef, sendEmail] = useEmailSender();
  const [ showConfirmation, setShowConfirmation ] = useState(false);

  const handleSendEmail = () => {
    sendEmail();
    setShowConfirmation(true);
  }


  const handleButtonClick = () => {
    setShowConfirmation(false);
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
              <a href={CV} download style={{textDecoration:"none"}}>
                <ContactCard title="CV" content="Download my CV!" icon={<FaDownload/>}/>
              </a>
            </div>
            <div className="row">
                { showConfirmation && <EmailSentCard className="email-sent-card" onClick={handleButtonClick}/> }
                <Form ref={formRef} onSubmit={handleSendEmail} />
            </div>
        </div>

    </Section>
    </div>
  )
}

export default Contact
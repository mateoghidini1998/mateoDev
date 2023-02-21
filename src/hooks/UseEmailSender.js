import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function useEmailSender() {
  const formRef = useRef();

  const sendEmail = () => {
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formRef.current, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    
      console.log(formRef.current)
  };

  return [formRef, sendEmail];
}

export default useEmailSender;

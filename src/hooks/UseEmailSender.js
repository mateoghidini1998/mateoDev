import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function useEmailSender() {
  const formRef = useRef();

  const sendEmail = () => {
    emailjs.sendForm('service_a0bn1ms', 'template_6fehwfa', formRef.current, 'YiYX3sMzC5_i4CTmq')
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

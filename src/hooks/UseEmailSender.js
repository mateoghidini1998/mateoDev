import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function useEmailSender() {
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

  return [form, sendEmail];
}

export default useEmailSender;

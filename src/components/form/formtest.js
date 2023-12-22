import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cb7mkz8', 'template_rycht7c', form.current, 'p8JsVRCVhWp7ns37L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="submit" value="Send" />
      <textarea />
    </form>
  );
};
export default ContactUs;
import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jlg3hbp', 'template_8t8c5fw', form.current, 'L68OVPrXj6jXRMUDS')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_icon' />
            <h4>Email</h4>
            <h5>Mano</h5>
            <a href="manofullstackdeveloper2000@gmail.com">Send a Message</a>
          </article>
          {/* <article className='contact_option'>
            <BsMessenger className='contact_icon' />
            <h4>Messenger</h4>
            <h5>Mano</h5>
            <a href="https://messenger.com">Send a Message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineInstagram className='contact_icon' />
            <h4>Instagram</h4>
            <h5>Mano</h5>
            <a href="https://instagram.com">Send a Message</a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='Name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
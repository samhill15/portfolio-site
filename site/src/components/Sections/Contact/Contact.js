import React from 'react';
import { useState } from 'react';

import { ArrowRight } from 'akar-icons';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  

  const handleSubmit = e => {
    console.log(`Email: ${email}`);
    console.log(`Name: ${name}`);
    console.log(`Message: ${message}`);
    
    setEmail('');
    setName('');
    setMessage('');

    e.preventDefault();
  }

  const handleChange = e => {
    const inputName = e.target.name;
    const val = e.target.value;

    if (inputName === 'email') {
      setEmail(val);
    }

    if (inputName === 'name') {
      setName(val);
    }

    if (inputName === 'message') {
      setMessage(val);
    }
  }

  return (
    <section id="contact">
        <h2>Let's Get in Touch</h2>
        <form onSubmit={handleSubmit} id="contact-form">
            <div className="form-input-container">
              <label htmlFor="name">Name</label>
              <input onChange={handleChange} required className="form-input" type="text" id="name" name="name" />
            </div>

            <div className="form-input-container">
              <label htmlFor="email">Email</label>
              <input onChange={handleChange} required className="form-input" type="email" id="email" name="email" />
            </div>

            <div className="form-input-container">
              <label htmlFor="message">Message</label>
              <textarea onChange={handleChange} required className="form-input" id="message" name="message" rows="4"></textarea>
            </div>

            <div className="submit-btn-container">
              <input className="btn submit-btn" type="submit" value="Submit" />
              <ArrowRight className="submit-icon" />
            </div>
        </form>
    </section>
  );
}

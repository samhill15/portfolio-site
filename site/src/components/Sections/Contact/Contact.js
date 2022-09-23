import React from 'react';
import { useState } from 'react';

import { ArrowRight } from 'akar-icons';

export default function Contact() {

  const [inputs, setInputs] = useState({
    email: {
      val: '',
      error: false
    },
    name: {
      val: '',
      error: false
    },
    message: {
      val: '',
      error: false
    }
  });

  const handleSubmit = e => {
    console.log(inputs);

    // Error handling
    // for (let key in inputs) {
    //   console.log(`${key}: ${inputs[key].val}`);
    // }
  
    e.preventDefault();
  }

  const handleChange = e => {
    const inputName = e.target.name;
    const val = e.target.value;

    setInputs(prevVals => {
      return {
        ...prevVals,
        [inputName]: {
          ...prevVals[inputName],
          val: val
        }
      }
    });
  }

  return (
    <section id="contact">
        <h2>Let's Get in Touch</h2>
        <form onSubmit={handleSubmit} id="contact-form">
            <div className="form-input-container name-container">
              <label htmlFor="name">Name</label>
              <input onChange={handleChange} className="form-input" type="text" id="name" name="name" />
            </div>

            <div className="form-input-container email-container">
              <label htmlFor="email">Email</label>
              <input onChange={handleChange} className="form-input" id="email" name="email" />
            </div>

            <div className="form-input-container message-container">
              <label htmlFor="message">Message</label>
              <textarea onChange={handleChange} className="form-input" id="message" name="message" rows="4"></textarea>
            </div>

            <div className="submit-btn-container">
              <input className="btn submit-btn" type="submit" value="Send" />
              <ArrowRight className="submit-icon" />
            </div>
        </form>
    </section>
  );
}

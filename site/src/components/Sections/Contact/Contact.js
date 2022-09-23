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

    let inputError = false;

    // Error handling
    for (let key in inputs) {

      if (inputs[key].val.length === 0) {
        inputError = true;

        setInputs(prevVals => {
          return {
            ...prevVals,
            [key]: {
              ...prevVals[key],
              error: true
            }
          }
        });

      }
    }

    // send email and clear fields
    if (!inputError) {
      console.log("Ready to send an email!");

      // setting all of the input vals to empty
      // setting all of the error flags to false
      for (let key in inputs) {
        setInputs(prevVals => {
          return {
            ...prevVals,
            [key]: {
              val: '',
              error: false
            }
          }
        });
      }
    } else {
      console.log("Errors Exist!");
      console.log(inputs);
    }
  
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
            <div className={`form-input-container name-container ${inputs.name.error ? 'form-input-error': ''}`}>
              <label htmlFor="name">Name</label>
              <input 
                onChange={handleChange} 
                className="form-input" 
                type="text" 
                id="name" 
                name="name" 
                value={inputs.name.val} 
              />
            </div>

            <div className={`form-input-container email-container ${inputs.email.error ? 'form-input-error': ''}`}>
              <label htmlFor="email">Email</label>
              <input onChange={handleChange} 
                className="form-input"
                id="email" 
                name="email"
                value={inputs.email.val} 
              />
            </div>

            <div className={`form-input-container message-container ${inputs.message.error ? 'form-input-error': ''}`}>
              <label htmlFor="message">Message</label>
              <textarea 
                onChange={handleChange} 
                className="form-input" 
                id="message" 
                name="message" 
                rows="4"
                value={inputs.message.val}
              >
              </textarea>
            </div>

            <div className="submit-btn-container">
              <input className="btn submit-btn" type="submit" value="Send" />
              <ArrowRight className="submit-icon" />
            </div>
        </form>
    </section>
  );
}

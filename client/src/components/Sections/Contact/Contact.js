import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import { ArrowRight } from 'akar-icons';

export default function Contact() {

  const defaultInputs = {
  email: {
    val: '',
    empty: true,
    isValid: true
  },
  name: {
    val: '',
    empty: true
  },
  message: {
    val: '',
    empty: true
  }
}

  const [inputs, setInputs] = useState(defaultInputs);

  const [formValidationEnabled, setFormValidationEnabled] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = e => {
    let emptyFields = false;

    setFormValidationEnabled(true);

    for (let key in inputs) {
      if (inputs[key].empty) {
        emptyFields = true;
      }
    }

    // no errors exist so send the email
    if (!emptyFields && inputs.email.isValid) {
      setFormValidationEnabled(false);
      setInputs(defaultInputs);

      //sending email
      axios.post('/send', {
        email: inputs.email.val,
        name: inputs.name.val,
        message: inputs.message.val
      })
      .then((response) => {
        setDisplayMessage(true);
        setEmailSent(true);
      })
      .catch((error) => {
        setDisplayMessage(false);
        setEmailSent(false);
      });

    }

    e.preventDefault();
  }

  const handleChange = e => {
    const name = e.target.name;
    const val = e.target.value;

    // handling empty values
    setInputs(prevVals => {
      return {
        ...prevVals,
        [name]: {
          ...prevVals[name],
          val: val,
          empty: val.length === 0
        }
      }
    });

    // handing valid emails
    if (name === "email") {
      setInputs(prevVals => {
        return {
          ...prevVals,
          email: {
            ...prevVals.email,
            isValid: isValidEmail(inputs.email.val)
          }
        }
      });
    }
  };

  const isValidEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <section id="contact">
        <h2>Let's Get in Touch</h2>
        <form onSubmit={handleSubmit} id="contact-form">
            <div className={`form-input-container name-container ${(formValidationEnabled && inputs.name.empty) ? 'form-input-error': ''}`}>
              <label htmlFor="name">Name *</label>
              <input 
                onChange={handleChange} 
                className="form-input" 
                type="text" 
                id="name" 
                name="name" 
                value={inputs.name.val} 
              />
            </div>

            <div className={`form-input-container email-container ${formValidationEnabled && (inputs.email.empty || !inputs.email.isValid) ? 'form-input-error': ''}`}>
              <label htmlFor="email">Email *</label>
              <input onChange={handleChange} 
                className="form-input"
                id="email" 
                name="email"
                value={inputs.email.val} 
              />
            </div>

            <div className={`form-input-container message-container ${(formValidationEnabled && inputs.message.empty) ? 'form-input-error': ''}`}>
              <label htmlFor="message">Message *</label>
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

            <div className="centered status-container">
              {formValidationEnabled && (inputs.email.empty || inputs.message.empty || inputs.name.empty) && <div className="error-message">Please fill out all of the required forms.</div>}
              {formValidationEnabled && (!inputs.email.empty && !inputs.email.isValid) && <div className="error-message">Please enter a valid email.</div>}
              {displayMessage && emailSent && <div className="success-message">Email successfully sent!</div>}
              {displayMessage && !emailSent && <div className="error-message">Email failed to send :(</div>}
            </div>

            <div className="submit-btn-container">
              <input className="btn submit-btn" type="submit" value="Send" />
              <ArrowRight className="submit-icon" />
            </div>
        </form>
    </section>
  );
}

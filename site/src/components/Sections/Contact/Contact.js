import React from 'react'

import { ArrowRight } from 'akar-icons';

export default function Contact() {
  return (
    <section id="contact">
        <h2>Let's Get in Touch</h2>
        <form id="contact-form">
            <div className="form-input-container">
              <label for="name">Name</label>
              <input className="form-input" type="text" id="name" name="name" />
            </div>

            <div className="form-input-container">
              <label for="email">Email</label>
              <input className="form-input" type="email" id="email" name="name" />
            </div>

            <div className="form-input-container">
              <label for="message">Message</label>
              <textarea className="form-input" id="message" name="message" rows="4"></textarea>
            </div>

            <div className="submit-btn-container">
              <input className="btn submit-btn" type="submit" value="Submit" />
              <ArrowRight className="submit-icon" />
            </div>
        </form>
    </section>
  );
}

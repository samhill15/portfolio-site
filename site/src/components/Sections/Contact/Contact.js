import React from 'react'

import { ArrowRight } from 'akar-icons';

export default function Contact() {
  return (
    <section id="contact">
        <h2>Let's Get in Touch</h2>
        <form id="contact-form">
            <div className="form-input">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>

            <div className="form-input">
              <label for="email">Email</label>
              <input type="email" id="email" name="name" />
            </div>

            <div className="form-input">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>

            <div className="centered">
              <input className="btn submit-btn" type="submit" value="Submit" />
              <ArrowRight className="submit-icon" />
            </div>
        </form>
    </section>
  );
}

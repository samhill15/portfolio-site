import React from 'react'

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

            <input type="submit" value="Submit" />
        </form>
    </section>
  );
}

import React from 'react'

export default function Contact() {
  return (
    <section>
        <h2>Let's Get in Touch</h2>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />

            <label for="email">Email</label>
            <input type="email" id="email" name="name" />

            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" cols="50"></textarea>

            <input type="submit" value="Submit" />
        </form>
    </section>
  );
}

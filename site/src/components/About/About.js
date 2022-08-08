import React from 'react'

import profilePic from '../../assets/images/profile-place-holder.jpg';

export default function About() {
  return (
    <section id="#about">
        <h2>About Me</h2>
        <p>
            I'm a Computer Science Undergrad at SDSU who loves
            to learn about the web and computer security. In my
            my free time, you can find me surfing, working out,
            or building fun projects.
        </p>
        <img src={profilePic} height="300px" alt="This is me." />
    </section>
  )
}

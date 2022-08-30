import React from 'react'

import profilePic from '../../assets/images/profile-place-holder.jpg';

export default function About() {
  return (
    <section id="#about">
        <h2>About Me</h2>
        <div className="split">
          <div className="my-description bio">
            <p>
                I'm a Computer Science Undergrad at SDSU who loves
                to learn about the web and computer security. In my
                my free time, you can find me surfing, working out,
                or building fun projects.
            </p>
          </div>
          <img className="profile-pic" src={profilePic} alt="This is me." />
        </div>
    </section>
  )
}

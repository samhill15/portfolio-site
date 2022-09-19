import React from 'react'

import profilePic from '../../../assets/images/profile-pic.jpg';

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
            <p>
              I'm a San Diego native (Go Padres!) so I love going to the
              beach and enjoying the outdoors in general. I also love all things
              Pokemon (<span id="trainer-code">Just gonna leave my trainer code here</span>),
              skating with friends, and eating food.
            </p>
          </div>
          <img className="profile-pic" src={profilePic} alt="This is me." />
        </div>
    </section>
  )
}

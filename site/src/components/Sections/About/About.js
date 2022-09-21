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
                to learn about the web and computer security. If all
                things go according to plan, I'll be set to graduate
                in the Spring of 2023!
            </p>
            <p>
              I'm a San Diego native (Go Padres!) so I love going to the
              beach and enjoying the outdoors in general. I also love all things
              Pokemon (if you play PoGo, my trainer code is 272428688419),
              skating, surfing, going to the gym, and eating good food. My favorite
              surfer is <a href="https://www.worldsurfleague.com/athletes/1380/michael-february">Mikey February</a> so
              definitely check out some of his edits if you haven't heard of him.
            </p>
          </div>
          <img className="profile-pic" src={profilePic} alt="This is me." />
        </div>
    </section>
  )
}

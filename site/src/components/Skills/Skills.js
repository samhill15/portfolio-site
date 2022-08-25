import React from 'react'
import SkillCard from '../SkillCard/SkillCard'

export default function Skills() {
  return (
    <section id="skills">
        <h2>Skills and Experience</h2>
        <div className="skills-bio">
          <p>
            My main area of expertise is developing fast and
            responsive web applications using modern technologies
            such as Node, React, and MongoDB. 
          </p>
          <p>
            I am also very passionate about learning cybersecurity, 
            so I've gained considerable knowledge
            about web application and general penetration testing by participating
            in clubs and competitions through school, and just by learning on
            my own.
          </p>
          <p>
            Working as a Quality Assurance Software Engineer Intern
            at <a href="https://www.servicenow.com/">ServiceNow</a> testing
            web applications and their platform has taught me how to manage data,
            carefully assess applications, and work closesly with others in the
            Agile development as part of a SCRUM team.
          </p>
          <p>For more details check out my <a href="https://www.linkedin.com/in/sam-hilliard-35941b1aa/">LinkedIn</a> profile.</p>
        </div>
        <div className="skill-cards-container">
          <SkillCard 
            name="Web Development"
            details={<>HTML &#9679; CSS &#9679; Javascript 
            &#9679; React &#9679; Node &#9679; 
            Express &#9679; SQL &#9679; PHP &#9679; 
            MongoDB &#9679; Responsive Design &#9679; 
            RESTful APIs &#9679; JSON</>}
          />

          <SkillCard
            name="Security"
            details={<>Burpsuite &#9679; Zap Proxy &#9679; 
            Metasploit &#9679; Linux Administration &#9679; 
            Web App Penetration Testing &#9679; Shell 
            Scripting</>}
          />

          <SkillCard
            name="Programming"
            details={<>Java &#9679; Python &#9679; Git 
            &#9679; GitHub &#9679; Agile Development</>}
          />
        </div>
    </section>
  )
}

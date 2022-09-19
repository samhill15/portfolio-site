import React from 'react'
import SkillCard from '../../SkillCard/SkillCard'

export default function Skills() {
  return (
    <section id="skills">
        <h2>Skills & Experience</h2>
        <div class="skills-container split">
          <div className="skill-cards-container">
            <SkillCard 
              name="Web Development"
              details={<>Design, Develop, and Deploy fast 
              and responsive full stack web applications.</>}
            />

            <SkillCard
              name="Security"
              details={<>Web application penetration testing, 
              systems administration, and a variety of offensive strategies learned in CTFs.</>}
            />

            <SkillCard
              name="Programming"
              details={<>Knowledge of multiple programming language, 
              object oriented concepts, and collaborating in an enterprise environment.</>}
            />
          </div>
          <div className="bio skills-bio">
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
              my own. One of the competitions I particpated included 
              the <a href="https://nationalcyberleague.org/">National Cyber League</a>, which is
              Capture the Flag oriented and taught me a variety of offensive techniques some of which include
              cryptography and password cracking. I also competed in the <a href="https://www.nationalccdc.org/index.php/">National Collegiate Cyber Defense Competition</a> in which
              I worked on a team to defend a virtual enterprise network from attackers. 
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
        </div>
    </section>
  )
}

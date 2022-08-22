import React from 'react'
import SkillCard from '../SkillCard/SkillCard'

export default function Skills() {
  return (
    <section>
        <h2>Skills</h2>
        <SkillCard 
          name="Web Development"
          details="HTML &#9679; CSS &#9679; Javascript &#9679; React &#9679; Node &#9679; Express &#9679; SQL &#9679; PHP &#9679; MongoDB &#9679; Responsive Design &#9679; RESTful APIs &#9679; JSON"
        />

        <SkillCard
          name="Security"
          details="Burpsuite &#9679; Zap Proxy &#9679; Metasploit &#9679; Linux Administration &#9679; Web App Penetration Testing &#9679; Shell Scripting"
        />

        <SkillCard
          name="Programming"
          details="Java &#9679; Python &#9679; Git &#9679; GitHub &#9679; Agile Development"
        />
    </section>
  )
}

import React from 'react'

export default function SkillCard (props) {
  return (
    <div className="skill-card">
        <h3 className="skill-name">{props.name}</h3>
        <p className="skill-details">{props.details}</p>
    </div>
  )
}

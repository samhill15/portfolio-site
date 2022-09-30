import React from 'react'

export default function SkillCard (props) {
  return (
    <div className="skill-card">
        <h4 className="skill-name">{props.name}</h4>
        <p className="skill-details">{props.details}</p>
    </div>
  )
}

import React from 'react'

export default function SkillCard (props) {
  return (
    <div className="skill-card split">
        <div className="skill-name">{props.name}</div>
        <div className="skill-details">{props.details}</div>
    </div>
  )
}

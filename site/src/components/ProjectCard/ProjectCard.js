import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className="project-card">
        <div className="project-body">
            <h3 className="project-title">{props.title}</h3>
            <p className="project-description">{props.description}</p>
        </div>
        <div className="project-links">
            <a href={props.hostedURL}>View</a>
            <a href={props.githubURL}>Repo</a>
        </div>
    </div>
  )
}

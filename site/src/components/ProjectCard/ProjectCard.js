import React from 'react';
import { LinkOut, GithubFill } from 'akar-icons';

export default function ProjectCard(props) {
  return (
    <div className="project-card">
        <div className="project-body">
            <h4 className="project-title">{props.title}</h4>
            <p className="project-description">{props.description}</p>
        </div>
        <div className="project-links">
            <a href={props.hostedURL}><LinkOut /></a>
            <a href={props.githubURL}><GithubFill /></a>
        </div>
    </div>
  )
}

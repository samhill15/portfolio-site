import React from 'react';
import { LinkOut, GithubFill } from 'akar-icons';

export default function ProjectCard(props) {
  return (
    <div className="project-card">
        <div className="project-body">
            <h4 className="project-title">{props.title}</h4>
            <div className="project-description" dangerouslySetInnerHTML={{__html: props.description}}></div>
        </div>
        <div className="project-links">
            <a href={props.hostedURL}><LinkOut className="icon icon-outlined" /></a>
            <a href={props.githubURL}><GithubFill className="icon" /></a>
        </div>
    </div>
  )
}

import React from 'react';
import { GithubFill, LinkedinBoxFill, Envelope, Paper } from 'akar-icons';

export default function Footer() {
  return (
    <footer className="centered">
        <div className="icon-tray">
          <a href="https://github.com/samhill15?tab=followers">
            <GithubFill className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/sam-hilliard-35941b1aa/">
            <LinkedinBoxFill className="icon" />
          </a>
          <a href="mailto:samhilliard51@gmail.com">
            <Envelope className="icon icon-outlined" />
          </a>
          <a href="">
            <Paper className="icon icon-outlined" />
          </a>
        </div>
        <p>Developed and Designed by Sam Hilliard</p>
    </footer>
  )
}

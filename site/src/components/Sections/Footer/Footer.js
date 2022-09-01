import React from 'react';
import { GithubFill, LinkedinBoxFill, Envelope, Paper } from 'akar-icons';

export default function Footer() {
  return (
    <footer className="centered">
        <ul>
            <li>
              <a href="https://github.com/samhill15?tab=followers">
                <GithubFill className="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sam-hilliard-35941b1aa/">
                <LinkedinBoxFill className="icon" />
              </a>
            </li>
            <li>
              <a href="mailto:samhilliard51@gmail.com">
                <Envelope className="icon" />
              </a>
            </li>
            <li><a href=""><Paper className="icon" /></a></li>
        </ul>
        <p>Developed and Designed by Sam Hilliard</p>
    </footer>
  )
}

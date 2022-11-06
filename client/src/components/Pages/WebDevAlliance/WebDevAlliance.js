import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {ChevronUp} from 'akar-icons';

export default function WebDevAlliance() {
  return (
    <div className="container job-container">
        <div className="centered">
          <h1>WebDev Alliance</h1>
        </div>

        <div>
          <h2>About</h2>
          <p>
              WebDev Alliance is a startup that aims to bring developers, designers, 
              and marketers together to deliver web applications to clients. 
              Let’s face it, freelancing for the web can be a daunting task. 
              It takes a lot of time, effort, and experience to be able to develop and design web 
              applications by yourself and consistently bring in clients. Working at WebDev Alliance allows you to reap 
              all the benefits of being a freelancer (flexible hours and freedom) without having to bear all of the workload yourself.
          </p>
        </div>

        <div>
          <h2>Why Join a Startup?</h2>
          <p>
              Many people perceive joining a startup as a risky venture. However, that’s not usually 
              the case, especially with WebDev Alliance. The only capital required are laptops and brains, so there’s 
              no initial investment needed that might turn people away. There is also no need to worry about 
              relocation or quitting the job you might have now as hours are flexible and can be virtual or in person.
          </p>
          <p>
              In fact, joining a startup only has benefits. You have the option to be 
              part of something that can potentially take off and change the course of the rest of your life. 
              And if you don’t decide to stay, building experience in your field and having a leadership position 
              will open so many career opportunities for you in the future.
          </p>
          <p>So, what are you waiting for? Take your next best step and apply!</p>
        </div>

        <div>
          <h2>Roles</h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronUp />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>Developer</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                A developer’s main role is to develop and deploy websites based on the 
                client’s requested specifications and designs. Teamwork is a must as 
                you will be working as part of a team of developers, as well as 
                with other departments to meet deadlines.
              </p>

              <div className="skill-specifications">
                <div className="required-skills">
                  <h5>Required Skills</h5>
                  <ul>
                    <li>Strong understanding of web languages (HTML, CSS, Javascript)</li>
                    <li>Responsive development practices</li>
                    <li>Experience with Git/GitHub</li>
                    <li>Collaborative and communication skills</li>
                  </ul>
                </div>

                <div className="recommended-skills">
                  <h5>Recommended Skills</h5>
                  <ul>
                    <li>
                      Modern web technologies/frameworks: React, Vue, Angular, EJS, 
                      and WordPress
                    </li>
                    <li>
                      Backend and database technologies: Python (Flask), 
                      MongoDB/Mongoose, Express, Node, 
                      PHP, and SQL
                    </li>
                    <li>Experience working at the Enterprise level</li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronUp />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h4>Designer</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Designers create the visual final product developers will then implement. 
                To be successful you don’t need to be a creative genius. Just keep up 
                to date with the latest trends in user interface and user experience 
                for the web.
              </p>

              <div className="skill-specifications">
                <div className="required-skills">
                  <h5>Required Skills</h5>
                  <ul>
                    <li>Graphical design (Adobe Photoshop/Illustrator or similar software)</li>
                    <li>UI/UX Web Design</li>
                    <li>Knowledge of the latest design trends</li>
                    <li>Collaborative and communication skills</li>
                  </ul>
                </div>

                <div className="recommended-skills">
                  <h5>Recommended Skills</h5>
                  <ul>
                    <li>Experience using Figma</li>
                    <li>Experience working at the Enterprise level</li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronUp />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <h4>Marketer</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                As a marketer, you will be responsible for seeking out 
                clients and finding ways for clients to consistently come to us 
                to do business. It is a must to know how to navigate the web 
                effectively, dig through social media, and promote our business to 
                keep a steady stream of clients coming our way. 
              </p>

              <div className="skill-specifications">
                <div className="required-skills">
                  <h5>Required Skills</h5>
                  <ul>
                    <li>Be able to communicate effectively and courteously</li>
                    <li>Be able to leverage the web and social networking platforms</li>
                    <li>Be able to create attention drawing ads and place them effectively</li>
                  </ul>
                </div>

                <div className="recommended-skills">
                  <h5>Recommended Skills</h5>
                  <ul>
                    <li>Experience promoting a company or other entity</li>
                    <li>experience creating effective advertisments</li>
                    <li>Be able to build or already have a strong social media profile</li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="centered">
          <a className="btn" target="_blank" rel="noopener noreferrer" href="https://forms.gle/fw4WmGiuE9Arn9Jm6">Apply</a>
        </div>
    </div>
  );
}

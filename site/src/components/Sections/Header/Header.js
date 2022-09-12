import React from 'react'

export default function Header() {
  return (
    <header>
      <div className="container centered header-container">
          <div className="header-titles">
            <h5>I'm Sam Hillard.</h5>
            <h1>Web Developer</h1>
            <h3>Security Enthusiast</h3>
          </div>
          <a className="btn header-btn" href="#contact">Message Me</a>
      </div>
    </header>
  )
}

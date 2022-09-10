import React from 'react'

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="header-titles">
          <h4>I'm Sam Hillard.</h4>
          <h1>Web Developer</h1>
          <h2>Security Enthusiast</h2>
        </div>
        <div>
          <a className="btn header-btn" href="#contact">Message Me</a>
        </div>
      </div>
    </header>
  )
}

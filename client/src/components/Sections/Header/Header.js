import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Header() {
  return (
    <header>
      <div className="container centered header-container">
          <div className="header-titles">
            <h5>I'm Sam Hillard.</h5>
            <h1>Web Developer</h1>
            <h3>Security Enthusiast</h3>
          </div>
          <HashLink className="btn header-btn" to="/#contact">Message Me</HashLink>
      </div>
    </header>
  )
}

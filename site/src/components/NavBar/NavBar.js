import React from 'react'
import { useState } from 'react'

export default function NavBar() {

  const [navItemsActive, setNavItemsActive] = useState(false);

  const handleClick = () => {
    setNavItemsActive(prevVal => !prevVal);
  }

  return (
    <nav className="navbar">
      <div className="logo">SH</div>
      <ul className={"nav-items" + (navItemsActive ? " nav-items-active" : "")}>
        <li><a className="nav-links" href="#">Home</a></li>
        <li><a className="nav-links" href="#about">About</a></li>
        <li><a className="nav-links" href="#skills">Skills</a></li>
        <li><a className="nav-links" href="#projects">Projects</a></li>
        <li><a className="nav-links" href="#contact">Contact</a></li>
      </ul>
      <div className="nav-collapse-btn">
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </nav>
  )
}
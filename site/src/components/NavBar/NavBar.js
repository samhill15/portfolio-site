import React from 'react';
import { useState } from 'react';
import { TextAlignRight } from 'akar-icons';

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
        <TextAlignRight 
          className="icon nav-collapse-btn" 
          onClick={handleClick} 
        />
    </nav>
  )
}
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
        <div class="container">
          <div className="logo">SH</div>
          <ul className={"nav-items" + (navItemsActive ? " nav-items-active" : "")}>
            <li><a className="nav-links" href="#">Home</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#about">About</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#skills">Skills</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#projects">Projects</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#contact">Contact</a><span className="nav-underline"></span></li>
          </ul>
          <TextAlignRight 
            className="icon nav-collapse-btn" 
            onClick={handleClick} 
          />
        </div>
    </nav>
  )
}
import React from 'react';
import { useState } from 'react';
import { TextAlignRight, Cross } from 'akar-icons';

export default function NavBar() {

  const [navItemsActive, setNavItemsActive] = useState(false);

  const handleClick = () => {
    setNavItemsActive(prevVal => !prevVal);

    // disable scrolling on body
    document.body.style.overflow = "hidden";
  }

  return (
    <nav className="navbar">
        <div className="container">
          <div className="logo">SH</div>
          <ul className={"nav-items" + (navItemsActive ? " nav-items-active" : "")}>
            <li><a className="nav-links" href="#">Home</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#about">About</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#skills">Skills</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#projects">Projects</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#contact">Contact</a><span className="nav-underline"></span></li>
          </ul>
          <TextAlignRight 
            className="icon nav-collapse-btn nav-expand-btn" 
            onClick={handleClick} 
          />
          <Cross 
            className="icon nav-collapse-btn nav-close-btn" 
            onClick={handleClick} />
        </div>
    </nav>
  )
}
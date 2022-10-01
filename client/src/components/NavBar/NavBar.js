import React from 'react';
import { useState, useEffect } from 'react';
import { TextAlignRight, Cross } from 'akar-icons';

export default function NavBar() {

  const [navItemsActive, setNavItemsActive] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
          setWindowSize(getWindowSize());
      }

      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

  const handleClick = () => {
    setNavItemsActive(prevVal => !prevVal);

    // disable scrolling on body when in responsive mode
    if (windowSize.innerWidth <= 600) {
      document.body.style.overflow = navItemsActive ? "scroll" : "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  return (
    <nav className="navbar">
        <div className="container">
          <div className="logo">SH</div>
          <ul className={"nav-items" + (navItemsActive ? " nav-items-active" : "")}>
            <li><a className="nav-links" href="#" onClick={handleClick}>Home</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#about" onClick={handleClick}>About</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#skills" onClick={handleClick}>Skills</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#projects" onClick={handleClick}>Projects</a><span className="nav-underline"></span></li>
            <li><a className="nav-links" href="#contact" onClick={handleClick}>Contact</a><span className="nav-underline"></span></li>
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

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
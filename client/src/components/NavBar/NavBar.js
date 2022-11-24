import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
    if (windowSize.innerWidth <= 900) {
      document.body.style.overflow = navItemsActive ? "scroll" : "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  return (
    <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">SH</Link>
          <ul className={"nav-items" + (navItemsActive ? " nav-items-active" : "")}>
            <li><Link className="nav-links" to="/" onClick={handleClick}>Home</Link><span className="nav-underline"></span></li>
            <li><HashLink className="nav-links" to="/#about" onClick={handleClick}>About</HashLink><span className="nav-underline"></span></li>
            <li><HashLink className="nav-links" to="/#skills" onClick={handleClick}>Skills</HashLink><span className="nav-underline"></span></li>
            <li><HashLink className="nav-links" to="/#projects" onClick={handleClick}>Projects</HashLink><span className="nav-underline"></span></li>
            <li><HashLink className="nav-links" to="/#contact" onClick={handleClick}>Contact</HashLink><span className="nav-underline"></span></li>
            <li><Link className="nav-links" to="/blog" onClick={handleClick}>Blog</Link><span className="nav-underline"></span></li>
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
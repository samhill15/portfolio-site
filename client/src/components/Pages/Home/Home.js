import React from 'react';

import Header from '../../Sections/Header/Header';
import About from '../../Sections/About/About';
import Skills from '../../Sections/Skills/Skills';
import Projects from '../../Sections/Projects/Projects';
import Contact from '../../Sections/Contact/Contact';

export default function Home() {
  return (
    <>
        <Header />
        <div className="container main-container centered">
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    </>
  );
}

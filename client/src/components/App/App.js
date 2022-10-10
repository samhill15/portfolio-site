import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import NavBar from '../NavBar/NavBar';
import Footer from '../Sections/Footer/Footer';
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog';
import WebDevAlliance from '../Pages/WebDevAlliance/WebDevAlliance';

// css
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/webdevalliance" element={<WebDevAlliance />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
// components
import NavBar from '../NavBar/NavBar';
import Header from '../Sections/Header/Header';
import About from '../Sections/About/About';
import Skills from '../Sections/Skills/Skills';
import Projects from '../Sections/Projects/Projects';
import Contact from '../Sections/Contact/Contact';
import Footer from '../Sections/Footer/Footer';

// css
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Header />
      <div className="container main-container centered">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
// components
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

// css
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-container">
        <Header />
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
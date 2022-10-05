import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from '../NavBar/NavBar';
import Footer from '../Sections/Footer/Footer';
import Home from '../Pages/Home/Home';
import WebDevAlliance from '../Pages/WebDevAlliance/WebDevAlliance';

// css
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/webdevalliance" element={<WebDevAlliance />} />
            </Route>
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
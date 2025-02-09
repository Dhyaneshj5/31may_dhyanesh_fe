import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './Aboutus';
import Contact from './Contact';

const App1 = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav >
          <ul >
            <li >
              <Link to="/" >Home</Link>
            </li>
            <li >
              <Link to="/about" >About</Link>
            </li>
            <li >
              <Link to="/contact" >Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App1;

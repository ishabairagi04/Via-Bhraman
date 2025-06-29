// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import './App.css';  // or wherever you placed the CSS
import { useNavigate } from "react-router-dom";
import Footer from './components/Footer/Footer';

import About from './components/About Us/About';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>

      
      
    </div>

    </Router>

  );
}

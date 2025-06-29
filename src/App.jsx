// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';  // or wherever you placed the CSS
import { useNavigate } from "react-router-dom";
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero />
      <Footer/>
      
      
    </div>
  );
}

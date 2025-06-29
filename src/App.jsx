// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import './App.css';  // or wherever you placed the CSS
import { useNavigate } from "react-router-dom";
import Footer from './components/Footer/Footer';
import DiscoverSection from './components/Destinations/Destinations';
export default function App() {
  return (
    <div className="font-sans">
     
    <DiscoverSection/>
    </div>
  );
}

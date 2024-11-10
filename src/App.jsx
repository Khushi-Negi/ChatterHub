// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from './Frontend/HeroSection';
import AboutPage from './Frontend/AboutPage';
import LoginPage from './Frontend/LoginPage';
import SignupForm from './Frontend/SignupPage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignupForm" element={<SignupForm />} />
           
      </Routes>
    </Router>
    
    
  );
}


export default App;


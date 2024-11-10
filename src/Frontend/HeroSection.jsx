import React from 'react';
import './HeroSection.css'; // Import the CSS file
import logo from './logo.png'; 
import { useNavigate } from "react-router-dom";



const HeroSection = () => {
    const navigate = useNavigate();

    // Navigation handler
    const handleClick = (path) => {
      navigate(path);
      
   
    };
  return (
    <div className="hero-section">
      {/* Header */}
      <header className="header">
        {/* Logo */}
        <div className="logo">
          <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Discord-Server-Logos-and-How-to-Make-Your-Own-image19.png" alt="Discord Logo" />
          <span>ChatterHub</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#download">Download</a>
          <a href="#nitro">Nitro</a>
          <a href="#discover">Discover</a>
          <a href="#quests">Quests</a>
          <a href="#safety">Safety</a>
          <a href="#support">Support</a>
          <a href="#blog">Blog</a>
          <a href="#careers">Careers</a>
        </nav>

        {/* Login Button */}
        
        <button className="login-button" onClick={() => handleClick("/Login")}>Login</button>
        <button className="about-button" onClick={() => handleClick("/about")}>About</button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Heading */}
        <h1 className="hero-heading">
          GROUP CHAT <br /> THAT'S ALL <br /> FUN & GAMES
        </h1>
        
        {/* Subheading */}
        <p className="hero-subheading">
          ChatterHub is great for playing games and chilling with friends, or even building a worldwide community. 
          Customize your own space to talk, play, and hang out.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="cta-buttons">
          <a href='https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64'><button className="cta-button windows-button">Download for Windows</button></a>
          <a href='https://discord.com/channels/@me'><button className="cta-button browser-button" >Open ChatterHub in your browser</button></a>
        </div>
      </main>

      {/* Illustration Section */}
      <div className="illustration">
        <img
          src={logo} alt="Discord Illustration"
        />
        
      </div>

    </div>
  );
};

export default HeroSection;

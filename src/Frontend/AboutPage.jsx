import React from 'react';
import './AboutPage.css';
import logo2 from './logo2.png'; 
import logo4 from './logo4.png'; 
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="hero-section-1">
      <header className="header-2">
        {/* Logo */}
        <div className="logo-2">
          <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Discord-Server-Logos-and-How-to-Make-Your-Own-image19.png" alt="Discord Logo" />
          <span>ChatterHub</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="nav-links-2">
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
        
        <button className="login-button-2" onClick={() => handleClick("/Login")}>Login</button>
        <button className="about-button-2" onClick={() => handleClick("/about")}>About</button>
      </header>
  
      <section>
        <main className="main-content-1">
          <h1 className="hero-heading-1">
            MAKE YOUR <br /> GROUP CHATS <br /> MORE FUN
          </h1>
          <p className="hero-subheading-1">
            Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, 
            or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.
          </p>
        </main>
        <div className="illustration-1">
          <img src={logo2} alt="Discord Illustration" />
        </div>
      </section>

      <section>
        <main className="main-content-1">
          <h1 className="hero-heading-1">
            STREAM LIKE  <br /> YOU ARE IN  <br /> THE SAME ROOM 
          </h1>
          <p className="hero-subheading-1" >
            High quality and low latency streaming makes it feel like you're hanging out on
            the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.
          </p>
        </main>
        <div className="illustration-1">
          <img src={logo4} alt="Discord Illustration" />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

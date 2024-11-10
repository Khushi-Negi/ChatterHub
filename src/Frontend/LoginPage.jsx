import React from "react";
import "./LoginPage.css";
import Logo8 from './Logo8.png';
import Logo5 from './logo5.png';
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";


function LoginPage() {
  const navigate = useNavigate();

    // Navigation handler
    const handleClick = (path) => {
      navigate(path);
      
   
    };
  return (
    <div className="login-container">
      <header className="header-1">
        {/* Logo */}
        <div className="logo-1">
          <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Discord-Server-Logos-and-How-to-Make-Your-Own-image19.png" alt="Discord Logo" />
          <span>ChatterHub</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="nav-links-1">
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
        
        <button className="login-button-1" onClick={() => handleClick("/Login")}>Login</button>
        <button className="about-button-1" onClick={() => handleClick("/about")}>About</button>
      </header>
      <div className="login-box">
        <h1>Welcome back!</h1>
        <p>We're so excited to see you again!</p>
        <form>
          <label>Email or Phone Number</label>
          <input type="text" placeholder="Email or phone number" required />
          
          <label>Password</label>
          <input type="password" placeholder="Password" required />
          
          <a href="/" className="forgot-password">Forgot your password?</a>
          
          <button type="submit" className="login-button-4">Log In</button>
        </form>
        <div className="qr-section">
          <img
            src={Logo8}
            alt="QR Code"
            className="qr-code"
          />
          <p>Log in with QR Code</p>
          <span>Scan this with the ChatterHub mobile app to log in instantly.</span>
        </div>
        <Link to="/SignupForm"> <p className="register-link">Need an account? Register</p></Link>
      </div>
      <div className="illustration-2">
        <img
          src={Logo5} alt="Discord Illustration"
        />
        
      </div>
    </div>
  );
}

export default LoginPage;
// src/SignupForm.js
import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm() {
    const [form, setForm] = useState({
        email: '',
        displayName: '',
        username: '',
        password: '',
        month: '',
        day: '',
        year: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        // Add form submission logic here
    };

    return (
        <div className="form-container">
            <header className="header-3">
        {/* Logo */}
        <div className="logo-3">
          <img src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Discord-Server-Logos-and-How-to-Make-Your-Own-image19.png" alt="Discord Logo" />
          <span>ChatterHub</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="nav-links-3">
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
        
        <button className="login-button-3" onClick={() => handleClick("/Login")}>Login</button>
        <button className="about-button-3" onClick={() => handleClick("/about")}>About</button>
      </header>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create an account</h2>

                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />

                <label>Display Name</label>
                <input type="text" name="displayName" value={form.displayName} onChange={handleChange} />

                <label>Username</label>
                <input type="text" name="username" value={form.username} onChange={handleChange} required />

                <label>Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} required />

                <label>Date of Birth</label>
                <div className="dob">
                    <select name="month" value={form.month} onChange={handleChange} required>
                        <option value="">Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        {/* Add other months */}
                    </select>
                    <select name="day" value={form.day} onChange={handleChange} required>
                        <option value="">Day</option>
                        {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                    <select name="year" value={form.year} onChange={handleChange} required>
                        <option value="">Year</option>
                        {Array.from({ length: 100 }, (_, i) => (
                            <option key={i} value={2024 - i}>{2024 - i}</option>
                        ))}
                    </select>
                </div>

                <div className="terms">
                    <input type="checkbox" />
                    <span>It's okay to send me emails with updates and offers</span>
                </div>

                <button type="submit">Continue</button>
                <p className="footer-text">
                    By registering, you agree to the Terms of Service and Privacy Policy.
                </p>
                <p className="login-link">Already have an account?</p>
            </form>
        </div>
    );
}

export default SignupForm;

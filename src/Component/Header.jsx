import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      {/* Header */}
      <header id="HeaderContainer" className="header" data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
        <div className="logo">
          <img src={logo} alt="Diamond" />
        </div>

        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
          <Link to="/service" className={location.pathname === "/service" ? "active" : ""}>Our Services</Link>
          <button className="login-button" onClick={handleLogin}>Login</button>
        </nav>
      </header>
    </>
  );
};

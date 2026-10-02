import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
  <h2>Placement Portal</h2>

  <div
    className="menu-icon"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </div>

  <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/test">Tests</Link></li>
    <li><Link to="/results">Results</Link></li>
    <li><Link to="/profile">Profile</Link></li>
   </ul>
  </nav>
  );
}

export default Navbar;
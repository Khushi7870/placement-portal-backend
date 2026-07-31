import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Placement Preparation Portal</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Login</li>
        <li>Register</li>
        <li>Tests</li>
        <li>Results</li>
      </ul>
    </nav>
  );
}

export default Navbar;
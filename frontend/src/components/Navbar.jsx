import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Placement Preparation Portal</h2>

      <ul className="nav-links">

  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/login">Login</Link>
  </li>

  <li>
    <Link to="/register">Register</Link>
  </li>

  <li>
    <Link to="/test">Tests</Link>
  </li>

  <li>
    <Link to="/results">Results</Link>
  </li>

       </ul>
    </nav>
  );
}

export default Navbar;
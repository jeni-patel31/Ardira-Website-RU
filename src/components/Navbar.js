import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <Link to="/" className="logo">
          <img src="assets/ArdiraLogo.webp" alt="Ardira" />
        </Link>
        <ul className="nav-menu">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#features">Why Native</a>
          </li>
          <li>
            <a href="#contact">Company</a>
          </li>
          <li>
            <a href="#contact" className="btn-demo">
              Book Demo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

//The footer should appear at the bottom of every page
//Only Anthony changes this code

import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <p>
          <span className="copyright">&copy; 2020</span>
          Anthony Amaro & Victoria Topham
        </p>
      </div>
    </footer>
  );
}

export default Footer;

//The header should appear at the top of every page
//Only Anthony changes this code

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>
          <NavLink to="/">Logo</NavLink>
        </h1>
        <nav>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import Navbar from "./Navbar";

import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src="/calendar-logo.png" alt="" className="logo"></img>
        </a>
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;

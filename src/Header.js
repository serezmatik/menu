import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="https://stonehenge.pl">
          <span className="logo">STONEHENGE</span>
        </a>
      </div>
      <a href="https://serezmatik.github.io/menu/">
        <button className="language-btn">PL</button>
      </a>
    </header>
  );
};

export default Header;

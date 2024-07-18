import React from "react";
import "./Header.css";

const Header = ({ onLocationChange }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="https://stonehenge.pl" className="logo">
          STONEHENGE
        </a>
      </div>
      <div className="location-buttons">
        <button
          className="filter-btn"
          onClick={() => onLocationChange("Sosnowiec")}
        >
          Sosnowiec
        </button>
        <button
          className="filter-btn"
          onClick={() => onLocationChange("Dąbrowa Górnicza")}
        >
          Dąbrowa Górnicza
        </button>
      </div>
    </header>
  );
};

export default Header;

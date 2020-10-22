import React from "react";
import "./index.scss";

/**
 * Navbar of the application:
 * => Access to home page by clicking 24i icon
 * => Access to search page through search icon
 */
function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://futureisbright.tech/wp-content/themes/amino-graduate/images/24i-logo-icon.png"
        alt="24i"
      />
      <div className="navbar__search">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/768px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
          alt="searchIcon"
        />
        <h3>Search</h3>
      </div>
    </div>
  );
}

export default Navbar;

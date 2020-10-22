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
        <input type="text" placeholder="Search movie" />
        <img
          src="https://cdn3.iconfinder.com/data/icons/video-player-1/154/search-find-magnifier-function-player-keyword-name-512.png"
          alt="searchIcon"
        />
      </div>
    </div>
  );
}

export default Navbar;

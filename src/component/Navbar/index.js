import React from "react";

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
          src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
          alt="searchIcon"
        />
        <h3>Search</h3>
      </div>
    </div>
  );
}

export default Navbar;

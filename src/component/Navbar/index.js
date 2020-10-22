import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

/**
 * Navbar of the application:
 * => Access to home page by clicking 24i icon
 * => Access to search page through search icon
 */
function Navbar() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="https://futureisbright.tech/wp-content/themes/amino-graduate/images/24i-logo-icon.png"
          alt="24i"
        />
      </Link>
      <div className="navbar__search">
        <input
          type="text"
          placeholder="Search movie"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link to={`/search/${searchText}`}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/video-player-1/154/search-find-magnifier-function-player-keyword-name-512.png"
            alt="searchIcon"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./index.scss";
import { Link, useHistory } from "react-router-dom";

/**
 * Navbar of the application:
 * => Access to home page by clicking 24i icon
 * => Access to search page through search icon
 */
function Navbar() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  // const handleSearch = () => {
  //   history.push(`{/search/${searchText}}`);
  // };

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
          // onKeyUp={handleSearch}
        />
      </div>
    </div>
  );
}

export default Navbar;

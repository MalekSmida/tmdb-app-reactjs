import React, { useState, useEffect } from "react";
import "./index.scss";
import { Link, useHistory } from "react-router-dom";

/**
 * Navbar of the application:
 * => Access to home page by clicking 24i icon
 * => Access to search page through search icon
 */
function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [blackBackground, setBlackBackground] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
        ? setBlackBackground(true)
        : setBlackBackground(false);
    });
    return () => {};
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${searchText}`);
    setSearchText("");
  };

  return (
    <div className={`navbar ${blackBackground && "navbar--black"}`}>
      <Link to="/">
        <img
          src="https://iconape.com/wp-content/files/op/349358/svg/349358.svg"
          alt="24i"
        />
      </Link>
      <div className="navbar__search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search movie"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";

// Node module
import { Link, useHistory } from "react-router-dom";

// Local file
import "./index.scss";

/**
 * Navbar of the application:
 * => Access to home page by clicking 24i icon
 * => Access to search page by entering input and click Enter
 */

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [blackBackground, setBlackBackground] = useState(false);
  const history = useHistory();

  // Adding event listener => when scroll to 100, Navbar component will have black background
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
        ? setBlackBackground(true)
        : setBlackBackground(false);
    });
    return () => {};
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();

    /^[a-z0-9\s'\-?!:]+$/gi.test(searchText)
      ? history.push(`/search/${searchText}`)
      : alert("Invalid input, please try again!");
    setSearchText("");
  };

  return (
    <div className={`navbar ${blackBackground && "navbar--black"}`}>
      <Link to="/">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1_white-ff84c271cc8c93e00aa0264a425434c329089bdfc6a392987332b5f32903f75c.svg"
          // src="https://iconape.com/wp-content/files/op/349358/svg/349358.svg"
          alt="tmdb"
          // alt="24i"
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

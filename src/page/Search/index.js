import React from "react";

// Node module
import { useParams } from "react-router-dom";

// Local file
import "./index.scss";
import { Row } from "../../component";

/**
 * Search page that displays movies based on search name, fetched from TMDB
 */
function Search() {
  let { searchTerm } = useParams();
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to bottom, #111 0%, transparent 500%) ,url("https://mppmduse2pmpovwapp.azurewebsites.net/wp-content/uploads/2019/09/netflix-background-9.jpg")`,
        backgroundPosition: "center center",
        height: "100%",
        minHeight: "100vh",
        width: "100vw",
      }}
      className="search"
    >
      <div className="search__content">
        <Row
          title={`Search Result for : ${searchTerm}`}
          wrap
          requestUrl={`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`}
        />
      </div>
    </div>
  );
}

export default Search;

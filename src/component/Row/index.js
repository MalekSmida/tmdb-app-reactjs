import React, { useState, useEffect } from "react";

// Node module
import { Link } from "react-router-dom";

// Local file
import "./index.scss";
import { getTmdb } from "../../services/Tmdb";

/**
 * Row component shows title followed by a row of pictures
 *
 * @param {string} title => title of the row
 * @param {string} requestUrl => type of request, could be: popular movies, popular tv shows, families or documentaries
 * @param {boolean} wrap => if true, the content of row is wrapped (we need this in search page)
 */

function Row({ title, requestUrl, wrap }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await getTmdb(requestUrl);
      setMovies(request.response.data.results);
      return request;
    }
    getData();
  }, [requestUrl]);

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className={`row__movies ${wrap && "row__movies--wrap"}`}>
        {movies?.map((movie) => (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            {movie?.poster_path && (
              <img
                className="row__poster"
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} //Fetch movie picture from TMDB
                alt={movie.original_title}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;

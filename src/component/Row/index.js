import React, { useState, useEffect } from "react";
import Http from "../../services/Http";
import "./index.scss";
import { Link } from "react-router-dom";

/**
 * Row component shows title followed by a row of pictures
 *
 * @param {string} title => title of the row
 * @param {string} requestUrl => type of request, could be: popular movies, popular tv shows, families or documentaries
 * @param {boolean} wrap => if true, the content of row is wrapped (we need this in search page)
 */

function Row({ title, requestUrl, wrap }) {
  const [movies, setMovies] = useState([]);

  // Fetch data from TMDB based on requestUrl
  useEffect(() => {
    async function getData() {
      const data = await Http.get(requestUrl);
      setMovies(data.data.results);
      return data;
    }
    getData();
  }, [requestUrl]);

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className={`row__movies ${wrap && "row__movies--wrap"}`}>
        {movies?.map((movie) => (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            {movie && (
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

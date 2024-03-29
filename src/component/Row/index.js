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
  const [error, setError] = useState({});

  useEffect(() => {
    let ignore = false;
    async function getData() {
      const request = await getTmdb(requestUrl);
      if (!ignore)
        request.response
          ? setMovies(request.response.data.results)
          : setError(request.error);
    }
    getData();
    return () => {
      ignore = true;
    };
  }, [requestUrl]);

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className={`row__movies ${wrap && "row__movies--wrap"}`}>
        {movies?.map((movie) => (
          <Link
            key={movie.id}
            to={`/detail/${title === "Popular Tv Series" ? "tv" : "movie"}/${
              movie.id
            }`}
          >
            {
              <img
                className="row__poster"
                src={`${
                  movie?.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
                    : "https://video.itfaragtv.com/wp-content/themes/codlop-starter/inc/codlop-core/assets/img/no_cl_tax_poster.png"
                }`} //Fetch movie picture from TMDB
                alt={movie.original_title}
                title={movie.original_title}
              />
            }
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;

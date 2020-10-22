import React, { useState, useEffect } from "react";
import Http from "../../services/Http";
import "./index.scss";
import { Link } from "react-router-dom";

function Row({ title, requestUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await Http.get(requestUrl);
      setMovies(data.data.results);
    }
    getData();
  }, [requestUrl]);
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__movies">
        {movies?.map((movie) => (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            <img
              className="row__poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} //original
              alt={movie.original_title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;

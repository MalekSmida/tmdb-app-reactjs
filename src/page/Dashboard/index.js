import React, { useState, useEffect } from "react";

// Local file
import "./index.scss";
import { Row } from "../../component";
import request from "../../services/request";
import { getTmdb } from "../../services/Tmdb";

/**
 * Dashboard page that displays:
 * => cool header
 * => popular movies
 * => popular series
 * => family, documentation
 */
function Dashboard() {
  const [rendomMovie, setRendomMovie] = useState();
  const [error, setError] = useState({});

  // Fetch popular movies from TMDB and pick a rendom one to display its backdrop
  useEffect(() => {
    let ignore = false;
    async function getData() {
      const res = await getTmdb(request.popularMovies);
      if (!ignore)
        res.response
          ? setRendomMovie(
              res.response.data.results[
                // Random movie index
                Math.floor(Math.random() * res.response.data.results.length - 1)
              ]
            )
          : setError(request.error);
    }
    getData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="dashboard">
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `${
            rendomMovie
              ? `linear-gradient(to top, #111 0%, transparent 60%) ,url("https://image.tmdb.org/t/p/original/${rendomMovie?.backdrop_path}")`
              : `linear-gradient(#5B5B5B, #111)`
          }`,
          backgroundPosition: "center center",
        }}
        className="dashboard__header"
      ></div>

      <Row title="Popular Movies" requestUrl={request.popularMovies} />
      <Row title="Popular Tv Series" requestUrl={request.popularTvSeries} />
      <Row title="Families" requestUrl={request.families} />
      <Row title="Documentaries" requestUrl={request.documentaries} />
    </div>
  );
}

export default Dashboard;

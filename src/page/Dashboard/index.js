import React, { useState, useEffect } from "react";
import "./index.scss";
import { Row } from "../../component";
import request from "../../services/request";
import Http from "../../services/Http";

/**
 * Dashboard page that displays: popular movies, popular series, family, documentation
 */
function Dashboard() {
  const [rendomMovie, setRendomMovie] = useState();

  useEffect(() => {
    async function getData() {
      const data = await Http.get(request.popularMovies);
      setRendomMovie(
        data.data.results[
          Math.floor(Math.random() * data.data.results.length - 1)
        ]
      );
    }
    getData();
  }, []);

  return (
    <div className="dashboard">
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${rendomMovie?.backdrop_path}"), linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)`,
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

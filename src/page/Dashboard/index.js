import React, { useState, useEffect } from "react";
import "./index.scss";
import { Row } from "../../component";
import request from "../../services/request";
import Http from "../../services/Http";

/**
 * Dashboard page that displays:
 * => cool header
 * => popular movies
 * => popular series
 * => family, documentation
 */
function Dashboard() {
  const [rendomMovie, setRendomMovie] = useState();

  // Fetch popular movies from TMDB and pick a rendom one to display its backdrop
  useEffect(() => {
    async function getData() {
      const data = await Http.get(request.popularMovies);
      setRendomMovie(
        data.data.results[
          // Random movie index
          Math.floor(Math.random() * data.data.results.length - 1)
        ]
      );
      return data;
    }
    getData();
  }, []);

  return (
    <div className="dashboard">
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: `${
            rendomMovie
              ? `linear-gradient(to top, #111 0%, transparent 60%) ,url("https://image.tmdb.org/t/p/original/${rendomMovie?.backdrop_path}")`
              : `linear-gradient(to top, #111 0%, transparent 60%) ,url("https://mppmduse2pmpovwapp.azurewebsites.net/wp-content/uploads/2019/09/netflix-background-9.jpg")`
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

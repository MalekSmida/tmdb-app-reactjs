import React from "react";
import "./index.scss";
import { Row } from "../../component";
import request from "../../services/request";

/**
 * Dashboard page that displays: popular movies, popular series, family, documentation
 */
function Dashboard() {
  return (
    <div className="dashboard">
      <Row title="Popular Movies" requestUrl={request.popularMovies} />
      <Row title="Popular Tv Series" requestUrl={request.popularTvSeries} />
      <Row title="Families" requestUrl={request.families} />
      <Row title="Documentaries" requestUrl={request.documentaries} />
    </div>
  );
}

export default Dashboard;

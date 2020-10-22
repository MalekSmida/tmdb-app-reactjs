import React, { useState, useEffect } from "react";
import Http from "../../services/Http";
import "./index.scss";
// import { useParams } from "react-router-dom";

function Detail() {
  const [movieData, setMovieData] = useState();
  // let { id } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await Http.get(
        `/movie/${window.location.href.split("/").reverse()[0]}?api_key=${
          process.env.REACT_APP_API_KEY
        }`
      );
      setMovieData(data.data);
      console.log(data.data);
    }
    getData();
  }, []);
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}"), linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)`,
        backgroundPosition: "center center",
      }}
      className="detail"
    >
      <div className="detail__content">
        <h1>{movieData?.title}</h1>
        <h4>{movieData?.overview}</h4>
        <button>Play</button>
      </div>
    </div>
  );
}

export default Detail;

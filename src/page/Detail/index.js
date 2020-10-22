import React, { useState, useEffect } from "react";
import Http from "../../services/Http";
import "./index.scss";
// import { useParams } from "react-router-dom";

function Detail() {
  const [currentMovie, setCurrentMovie] = useState();
  // let { id } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await Http.get(
        `/movie/${window.location.href.split("/").reverse()[0]}?api_key=${
          process.env.REACT_APP_API_KEY
        }`
      );
      setCurrentMovie(data.data);
      console.log(data.data);
    }
    getData();
  }, []);
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}"), linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)`,
        backgroundPosition: "center center",
      }}
      className="detail"
    >
      <h1>detail</h1>
    </div>
  );
}

export default Detail;

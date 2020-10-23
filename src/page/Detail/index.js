import React, { useState, useEffect } from "react";
import Http from "../../services/Http";
import "./index.scss";
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";

function Detail() {
  const [movieData, setMovieData] = useState();
  const history = useHistory();
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

  const handleOnClick = () => history.push("/Player");
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to right, #000 0%, transparent 100%), url("https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
      className="detail"
    >
      <div className="detail__content">
        <h1>{movieData?.title}</h1>
        <h4>{movieData?.overview}</h4>
        <button onClick={handleOnClick}>Watch Movie</button>
      </div>
    </div>
  );
}

export default Detail;

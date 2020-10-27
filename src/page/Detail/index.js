import React, { useState, useEffect } from "react";

// Node module
import { useHistory, useParams } from "react-router-dom";

// Local file
import "./index.scss";
import { getDetail } from "../../services/Tmdb";

/**
 * Detail page displays movie: title, release_date, overview, genre
 * By clicking "Watch Movie" button you open Player page that displays the video
 */
function Detail() {
  const [movieData, setMovieData] = useState();
  const [error, setError] = useState({});
  const history = useHistory();
  let { type } = useParams();
  let { movieId } = useParams();

  // Fetch the movie data from TMDB using movieId
  useEffect(() => {
    let ignore = false;
    async function getData() {
      const request = await getDetail(type, movieId);
      if (!ignore)
        request.response
          ? setMovieData(request.response.data)
          : setError(request.error);
    }
    getData();
    return () => {
      ignore = true;
    };
  }, [type, movieId]);

  // Handle click by opening video interface
  const handleOnClick = () => history.push(`/Player/${movieData?.id}`);
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `${
          movieData?.backdrop_path
            ? `linear-gradient(to right, #000 0%, transparent 100%), url("https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}")`
            : "linear-gradient(to right, #111 0%, #111 100%)"
        }`,
        backgroundPosition: "center center",
      }}
      className="detail"
    >
      <div className="detail__content">
        <h1>{type === "tv" ? movieData?.name : movieData?.title}</h1>
        <h5>
          {type === "tv" ? movieData?.first_air_date : movieData?.release_date}
        </h5>
        <h4>{movieData?.overview}</h4>
        <div className="detail__genreFlag">
          {movieData?.genres.map((genre) => (
            <h5 key={genre?.id}>{genre?.name}</h5>
          ))}
        </div>
        <button onClick={handleOnClick}>
          Watch {type === "tv" ? "Tv Serie" : "Movie"}
        </button>
      </div>
    </div>
  );
}

export default Detail;

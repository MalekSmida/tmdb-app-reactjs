import React, { useState, useEffect } from "react";
import Http from "../../services/Http";
import "./index.scss";
import { useHistory, useParams } from "react-router-dom";

/**
 * Detail page displays movie: title, release_date, overview, genre
 * By clicking "Watch Movie" button you open Player page that displays the video
 */
function Detail() {
  const [movieData, setMovieData] = useState();
  const history = useHistory();
  let { movieId } = useParams();

  // Fetch the movie data from TMDB using movieId
  useEffect(() => {
    async function getData() {
      const data = await Http.get(
        `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setMovieData(data.data);
      return data;
    }
    getData();
  }, [movieId]);

  // Handle click by opening video interface
  const handleOnClick = () => history.push(`/Player/${movieData?.id}`);
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `${
          movieData &&
          `linear-gradient(to right, #000 0%, transparent 100%), url("https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}")`
        }`,
        backgroundPosition: "center center",
      }}
      className="detail"
    >
      <div className="detail__content">
        <h1>{movieData?.title}</h1>
        <h5>{movieData?.release_date}</h5>
        <h4>{movieData?.overview}</h4>
        <div className="detail__genreFlag">
          {movieData?.genres.map((genre) => (
            <h5 key={genre?.id}>{genre?.name}</h5>
          ))}
        </div>
        <button onClick={handleOnClick}>Watch Movie</button>
      </div>
    </div>
  );
}

export default Detail;

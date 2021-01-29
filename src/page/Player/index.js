import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
// import movieTrailer from "movie-trailer";
import { useParams } from "react-router-dom";

// Local file
import "./index.scss";
import { Link } from "react-router-dom";
import { getVideo } from "../../services/Tmdb";

/**
 *  Player page that displays the video
 */
const Player = () => {
  const [movie, setMovie] = useState({
    url: null,
  });
  const [message, setMessage] = useState("Loading ..");
  let { type, movieId } = useParams();

  // Fetch the movie data from TMDB using movieId
  useEffect(() => {
    let ignore = false;
    (async function () {
      const request = await getVideo(type, movieId);
      if (ignore) return;
      if (!request.response || !request.response.data.results[0]?.site) {
        setMessage(`Not found`);
        return;
      }
      request.response.data.results[0]?.site === "YouTube"
        ? setMovie({
            url: `https://www.youtube.com/watch?v=${request.response.data.results[0].key}`,
          })
        : setMovie({
            url: `https://vimeo.com/${request.response.data.results[0].key}`,
          });
    })();
    return () => {
      ignore = true;
    };
  }, [type, movieId]);

  return (
    <div className="player">
      <div className="player__header" title="Go back Home">
        <Link to="/" style={{ cursor: "pointer" }}>
          <img
            src="https://i.pinimg.com/originals/e2/5c/43/e25c43c6a65bdca84c72f0c58524fcd6.png"
            alt="closeIcon"
          />
        </Link>
      </div>
      {movie.url ? (
        <ReactPlayer height="100vh" width="100%" url={movie.url} controls />
      ) : (
        <div className="player__message">
          <h1>{message}</h1>
        </div>
      )}
    </div>
  );
};

export default Player;

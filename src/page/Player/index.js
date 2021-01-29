import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { useParams } from "react-router-dom";

// Local file
import "./index.scss";
import { Link } from "react-router-dom";
import { getDetail } from "../../services/Tmdb";

/**
 *  Player page that displays the video
 */
const Player = () => {
  const [movieUrl, setMovieUrl] = useState();
  const [message, setMessage] = useState("Loading ..");
  let { type, movieId } = useParams();

  useEffect(() => {
    let mounted = true;

    (async function () {
      const request = await getDetail(type, movieId);
      if (!mounted) return;
      if (type === "tv") {
        setMessage("Tv shows trailers are not available yet!");
        return;
      }
      if (!request.response) {
        setMessage("Not found");
        return;
      }
      if (!request.response) {
        setMessage("Not found");
        return;
      }
      movieTrailer(
        type === "tv"
          ? request.response.data?.name
          : request.response.data?.title
      )
        .then((res) => {
          mounted && setMovieUrl(res);
        })
        .catch((err) => setMessage("Not found"));
    })();

    return () => {
      mounted = false;
    };
  }, [type, movieId]);

  return (
    <div className="player">
      <div className="player__header">
        <div className="player__header__wrapper">
          <Link to="/" style={{ cursor: "pointer" }}>
            <img
              src="https://i.pinimg.com/originals/e2/5c/43/e25c43c6a65bdca84c72f0c58524fcd6.png"
              alt="closeIcon"
            />
          </Link>
        </div>
      </div>
      {movieUrl ? (
        <ReactPlayer height="100vh" width="100%" url={movieUrl} controls />
      ) : (
        <div className="player__message">
          <h1>{message}</h1>
        </div>
      )}
    </div>
  );
};

export default Player;

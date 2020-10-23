import React, { createRef, useEffect } from "react";
import "shaka-player/dist/controls.css";
import shaka from "shaka-player/dist/shaka-player.ui.js";
import "./index.scss";
import { Link } from "react-router-dom";

/**
 * initPlayer will initialize the video loaded from manifest with specific config
 * @param {object} pVideoRef
 */
const initPlayer = async (pVideoRef) => {
  console.log(pVideoRef);
  const ui = pVideoRef["ui"];
  const config = {
    controlPanelElements: [
      "play_pause",
      "time_and_duration",
      "volume",
      "fullscreen",
    ],
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.addEventListener("error", onError);
  controls.addEventListener("error", onError);
  try {
    // Load manifest
    await player.load(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    );
    console.log("The video has now been loaded!");
  } catch (err) {
    onError(err);
  }
};

// Handle error
const onError = (event) =>
  console.error("Error code", event.detail.code, "object", event.detail);

/**
 *  Player page that displays the video
 */
const Player = () => {
  const videoRef = createRef();

  useEffect(() => {
    document.addEventListener("shaka-ui-loaded", () =>
      initPlayer(videoRef.current)
    );
  }, [videoRef]);

  return (
    <div
      className="player"
      data-shaka-player-container
      data-shaka-player-cast-receiver-id="7B25EC44"
    >
      <div className="player__header">
        <h1>Video</h1>
        <Link to="/" style={{ cursor: "pointer" }}>
          <img
            src="https://i.pinimg.com/originals/e2/5c/43/e25c43c6a65bdca84c72f0c58524fcd6.png"
            alt="closeIcon"
          />
        </Link>
      </div>
      <video
        autoPlay
        data-shaka-player
        ref={videoRef}
        style={{ height: "100vh", width: "100vw", backgroundColor: "black " }}
      ></video>
    </div>
  );
};

export default Player;

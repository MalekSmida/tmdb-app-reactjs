import React, { createRef, useEffect } from "react";
import "shaka-player/dist/controls.css";
import shaka from "shaka-player/dist/shaka-player.ui.js";

const initPlayer = async (pVideoRef) => {
  const ui = pVideoRef["ui"];
  const config = {
    controlPanelElements: [
      "autoplay",
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
    await player.load(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    );
    console.log("The video has now been loaded!");
  } catch (err) {
    console.log("TCL: err", err);
    onError(err);
  }
};

const onError = (event) =>
  console.error("Error code", event.detail.code, "object", event.detail);

const Player = () => {
  const videoRef = createRef();

  useEffect(() => {
    document.addEventListener("shaka-ui-loaded", () =>
      initPlayer(videoRef.current)
    );
  }, []);

  return (
    <div
      data-shaka-player-container
      data-shaka-player-cast-receiver-id="7B25EC44"
    >
      <button>Close</button>
      <video
        data-shaka-player
        ref={videoRef}
        style={{ width: "100%", height: "100%" }}
      ></video>
    </div>
  );
};

export default Player;

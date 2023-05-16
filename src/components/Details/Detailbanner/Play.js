import React from "react";
import PlayIcon from "@mui/icons-material/PlayArrow";
import "./Play.css";

const Play = () => {
  return (
    <button className="play_btn">
      <PlayIcon style={{ fontSize: "30px" }} />
      <p className="tailer_label">Watch Trailer</p>
    </button>
  );
};

export default Play;

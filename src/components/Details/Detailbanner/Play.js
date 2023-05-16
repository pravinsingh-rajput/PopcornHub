import React from "react";
import PlayIcon from "@mui/icons-material/PlayArrow";
import "./Play.css";

const Play = ({ data }) => {
  const clickHandler = (url) => {
    window.open(url);
  };

  return (
    <button className="play_btn" onClick={() => clickHandler(data)}>
      <PlayIcon style={{ fontSize: "30px" }} />
      <p className="tailer_label">Watch</p>
    </button>
  );
};

export default Play;

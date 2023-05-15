import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Rating.css";

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textSize: "34px",
          trailColor: "transparent",
        })}
      />
    </div>
  );
};

export default Rating;
